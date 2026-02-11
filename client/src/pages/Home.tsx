import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Copy, Check, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const usdtAddress = "TXSiAmsqFU4AvYDyKJ6gD5WKJG89178ZDZ";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(usdtAddress);
      setCopied(true);
      toast({
        title: "Address Copied!",
        description: "TRC-20 address copied to clipboard.",
        className: "bg-primary text-primary-foreground border-none",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        variant: "destructive",
      });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/972568985150", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
        {/* Background Parallax-ish Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background z-10" />
          <img 
            src="/images/header-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative mx-auto w-40 h-40 md:w-56 md:h-56"
          >
            <div className="absolute inset-0 rounded-full border-4 border-background/50 shadow-2xl" />
            <img 
              src="/images/profile.jpg" 
              alt="Joma Profile" 
              className="w-full h-full rounded-full object-cover shadow-inner object-[center_10%]"
            />
            <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-background animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide mb-2 border border-primary/20">
              Web Developer | Student
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground text-shadow-sm">
              Hi, I'm Joma <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                from Gaza
              </span>
              <span className="ml-4 inline-block animate-wave origin-bottom-right">👋</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Building a future through code and resilience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-medium border-2 hover:bg-secondary/50"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Read My Story
              <ArrowRight className="ml-2 h-5 w-5 opacity-50" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 md:px-8 bg-secondary/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader title="About Me" centered subtitle="A journey of hope and determination." />
          
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/gallery-1.jpg" 
                  alt="Joma Portrait" 
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3 space-y-6"
            >
              <p className="text-lg leading-relaxed text-muted-foreground font-sans">
                <span className="text-foreground font-semibold text-2xl font-display block mb-4">Hello friend.</span>
                My name is <strong className="text-primary">Jomaa Khaled Dahlan</strong>. I am a university student passionate about learning and building a better future. Unfortunately, the war has deeply affected my dreams and ambitions, challenging me to stay strong and hopeful despite the hardships.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground font-sans">
                My father is a doctor, and his dedication to helping others has inspired me to pursue my own path of making a positive impact. I believe that through education and perseverance, we can overcome even the toughest obstacles.
              </p>
              
              <div className="pt-4 flex gap-4">
                 <div className="flex flex-col">
                   <span className="text-3xl font-display font-bold text-foreground">20+</span>
                   <span className="text-sm text-muted-foreground uppercase tracking-wider">Projects</span>
                 </div>
                 <div className="w-px bg-border h-12" />
                 <div className="flex flex-col">
                   <span className="text-3xl font-display font-bold text-foreground">100%</span>
                   <span className="text-sm text-muted-foreground uppercase tracking-wider">Committed</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Struggles Section */}
      <section id="struggles" className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="My Reality" centered />
          
          <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-card to-secondary/20">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 order-2 md:order-1">
                <div className="inline-flex items-center gap-2 text-destructive font-medium bg-destructive/10 px-3 py-1 rounded-full w-fit">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Resilience in Adversity</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground">
                  Shattered Dreams, <br/> Unbroken Spirit.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Living in Gaza during the war has been one of the toughest experiences of my life. The destruction around me not only shattered buildings but also shattered dreams. Many opportunities that I once hoped for have been taken away, and the uncertainty of the future weighs heavily on my heart.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Despite the hardships, I try to stay strong and keep my focus on education and growth. The resilience of my community and family gives me hope that better days will come. I am determined to rebuild my life and contribute to a brighter future for Gaza.
                </p>
              </div>
              <div className="relative h-64 md:h-auto order-1 md:order-2">
                <img 
                  src="/images/header-bg.jpg" 
                  alt="Struggles" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Gallery" centered subtitle="Snapshots from my life and surroundings." />
          <GalleryGrid />
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-24 px-4 md:px-8 bg-background relative">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader title="Support My Journey" centered />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <p className="text-xl text-muted-foreground mb-8 font-light">
              If you'd like to support my work, my education, and my future projects, your contribution means the world to me.
            </p>

            <div className="bg-secondary/50 rounded-xl p-6 mb-8 border border-border">
              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-3">USDT (TRC-20) Address</p>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <code className="flex-1 bg-background px-4 py-3 rounded-lg border border-border font-mono text-sm break-all w-full text-center md:text-left select-all">
                  {usdtAddress}
                </code>
                <Button 
                  onClick={handleCopy} 
                  className={cn(
                    "w-full md:w-auto transition-all duration-300 min-w-[140px]",
                    copied ? "bg-green-500 hover:bg-green-600 text-white" : ""
                  )}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" /> Copy Address
                    </>
                  )}
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground/60 italic">
              Your support helps me continue my education and survive these challenging times. Thank you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-2xl mb-6">Joma.</h2>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://wa.me/972568985150" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="sr-only">WhatsApp</span>
            </a>
            {/* Add more social links if available */}
          </div>
          
          <div className="h-px w-24 bg-white/10 mx-auto mb-8" />
          
          <p className="text-white/40 font-light text-sm">
            &copy; 2025 Joma | Gaza - All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
