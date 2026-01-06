"use client";

import { motion } from "framer-motion";
import { Music, Server, WifiOff, Github, Share2, Cpu } from "lucide-react";

import { GlobeAnimation } from "./GlobeAnimation";

export function FeaturesGrid() {
    return (
        <section className="relative z-10 mt-64 w-full max-w-[1400px] px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative md:col-span-2 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-950 to-black p-10 border border-white/5"
                >
                    <div className="relative z-10">
                        <div className="mb-4 inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                            <WifiOff className="mr-2 h-4 w-4" />
                            Offline Ready
                        </div>
                        <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                            Play anywhere.<br />
                            <span className="text-white/50">No signal required.</span>
                        </h3>
                        <p className="mt-4 max-w-md text-base text-zinc-400">
                            Your library is cached locally on your device. Take your entire collection on the plane, the subway, or into the wild.
                        </p>
                    </div>

                    <div className="absolute bottom-0 right-0 h-[250px] w-[350px] translate-x-12 translate-y-12 overflow-hidden rounded-tl-[2rem] border-l border-t border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl transition-transform duration-700 group-hover:-translate-x-0 group-hover:-translate-y-0">
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-16 w-16 rounded-xl bg-zinc-800 animate-pulse" />
                                <div className="space-y-2">
                                    <div className="h-4 w-32 rounded bg-zinc-800" />
                                    <div className="h-3 w-20 rounded bg-zinc-800/50" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-2 w-full rounded-full bg-zinc-800/50 overflow-hidden">
                                    <div className="h-full w-2/3 bg-blue-500" />
                                </div>
                                <div className="flex justify-between text-xs text-zinc-600">
                                    <span>2:14</span>
                                    <span>3:45</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative md:row-span-2 overflow-hidden rounded-[2.5rem] bg-zinc-900 p-10 border border-zinc-800"
                >
                    <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-white">
                                <Server className="h-6 w-6" />
                            </div>
                            <h3 className="text-3xl font-bold leading-tight text-white">
                                Home Server<br />Sync
                            </h3>
                        </div>

                        <div className="mt-12 flex-1 relative flex items-center justify-center">
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 h-20 w-px bg-gradient-to-b from-zinc-700 to-transparent z-20" />

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-16 w-32 rounded-xl border border-zinc-700 bg-zinc-900/80 backdrop-blur flex items-center justify-center z-30 shadow-2xl">
                                <span className="text-xs font-mono text-emerald-500 animate-pulse">ONLINE</span>
                            </div>

                            <div className="absolute -bottom-[450px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-100 pointer-events-none">
                                <GlobeAnimation />
                            </div>
                        </div>

                        <p className="mt-8 text-base text-zinc-400 relative z-20">
                            Direct connection to your personal storage. No clouds, no subscriptions. Just your data.
                        </p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none z-10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-10 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                    <div className="relative z-10">
                        <Github className="mb-6 h-8 w-8 text-zinc-400 group-hover:text-white transition-colors" />
                        <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Auditable, transparent, and built by the community for the community.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-bl from-zinc-800 to-black p-10 border border-zinc-800"
                >
                    <div className="absolute top-8 right-8 p-4 opacity-30 group-hover:opacity-100 transition-all duration-500 rounded-full bg-white/5 border border-white/10 shadow-2xl">
                        <Share2 className="h-20 w-20 text-indigo-400/80" />
                    </div>
                    <div className="relative z-10 mt-auto pt-32">
                        <h3 className="text-xl font-bold text-white mb-2">Decentralized</h3>
                        <p className="text-sm text-zinc-400">
                            We don't store your data. We don't control your data. We don't own your data.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
