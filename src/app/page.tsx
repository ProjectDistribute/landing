"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Server, Globe, Zap, ArrowRight, Github, FileText, MessageCircle } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import { VinylAnimation } from "@/components/VinylAnimation";
import { GridRuler } from "@/components/GridRuler";

const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid").then(mod => mod.FeaturesGrid), { ssr: false });
const AppLayersAnimation = dynamic(() => import("@/components/AppLayersAnimation").then(mod => mod.AppLayersAnimation), { ssr: false });
const PiracyDisclaimer = dynamic(() => import("@/components/PiracyDisclaimer").then(mod => mod.PiracyDisclaimer), { ssr: false });
const VinylPhysics = dynamic(() => import("@/components/VinylPhysics").then(mod => mod.VinylPhysics), { ssr: false });

const transition = {
  duration: 1,
  ease: [0.16, 1, 0.3, 1] as const,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition,
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-clip">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridRuler />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-full max-w-[1400px] opacity-30 mix-blend-screen"
          style={{
            background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 60%)"
          }}
        />
      </div>

      <motion.nav
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-8 md:px-12 backdrop-blur-sm bg-black/20"
      >
        <div className="flex items-center gap-2">
          <Image src="/app.png" alt="Distribute Logo" width={24} height={24} className="rounded" />
          <span className="text-xl font-bold tracking-tight uppercase tracking-widest">Distribute</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="hidden text-sm font-medium text-zinc-500 transition-colors hover:text-white md:block">Updates</a>
          <a href="https://distribute-docs.sourceloc.net/docs" className="hidden text-sm font-medium text-zinc-500 transition-colors hover:text-white md:flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Documentation
          </a>
          <a href="https://discord.gg/X2sZKXhxJj" className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-800">
            <MessageCircle className="h-4 w-4" />
            Discord
          </a>
        </div>
      </motion.nav>

      <main className="relative z-10 flex flex-col items-center pt-32 md:pt-48">
        <section className="relative flex flex-col items-center px-6 text-center">


          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
              <Image
                src="/app.png"
                alt="Distribute Logo"
                width={64}
                height={64}
                className="relative rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>

          <VinylAnimation />

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
            className="relative z-10 mb-6 max-w-4xl text-6xl font-bold tracking-tight sm:text-8xl"
            aria-label="Stop renting your music."
          >
            {"Stop renting your music.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
                }}
                className="inline-block mr-4 last:mr-0 text-white"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mb-12 max-w-2xl text-lg text-zinc-400 sm:text-xl md:text-2xl leading-relaxed"
          >
            Distribute is an offline-first streaming music app that connects to your home server.
            Cross-sync servers to expand your library.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-6 sm:flex-row"
          >
            <Button size="lg" className="h-14 rounded-full bg-white px-10 text-base font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95" asChild>
              <a href="https://discord.gg/X2sZKXhxJj">Join the Community</a>
            </Button>
            <span className="text-sm font-medium text-zinc-500 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Currently in closed beta
            </span>
          </motion.div>
        </section>

        <FeaturesGrid />

        <AppLayersAnimation />

        <PiracyDisclaimer />

        <ClosingSection />
      </main>

      <footer className="border-t border-zinc-900 px-6 py-12 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-zinc-500">© 2026 sourcelocation. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://twitter.com/sourceloc" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 transition-colors hover:text-white">Twitter</a>
            <a href="https://github.com/sourcelocation" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 transition-colors hover:text-white">GitHub</a>
            <a href="/privacy" className="text-sm text-zinc-500 transition-colors hover:text-white">Privacy</a>
            <a href="/license" className="text-sm text-zinc-500 transition-colors hover:text-white">License</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ClosingSection() {
  const [startPhysics, setStartPhysics] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setStartPhysics(true)}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="relative mt-48 flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {startPhysics && <VinylPhysics titleRef={titleRef} />}

      <div className="relative z-10 flex flex-col items-center">
        <Badge variant="outline" className="mb-6 border-zinc-800 bg-black/50 py-1.5 text-zinc-400 backdrop-blur-md">
          Ready to start?
        </Badge>
        <h2 ref={titleRef} className="mb-8 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-2xl">
          Join the future of music streaming.
        </h2>
        <Button
          size="lg"
          className="h-14 rounded-full bg-white px-10 text-base font-semibold text-black transition-all hover:scale-105 active:scale-95 hover:bg-zinc-200 shadow-xl"
          asChild
        >
          <a href="https://discord.gg/X2sZKXhxJj">
            Join the Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>


    </motion.section>
  );
}
