import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.messages.list.path, async (req, res) => {
    const messages = await storage.getMessages();
    res.json(messages);
  });

  // Seed data if empty
  async function seed() {
    const existing = await storage.getMessages();
    if (existing.length === 0) {
      await storage.createMessage({ name: "Amjad Masad", content: "Great to see your progress, Joma! Keep building." });
      await storage.createMessage({ name: "Sarah K.", content: "Your story is so inspiring. Stay strong!" });
      await storage.createMessage({ name: "Tech Community", content: "We are rooting for you and your future projects." });
    }
  }
  seed();

  return httpServer;
}
