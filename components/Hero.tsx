import React from 'react'
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Video, Mic, Users, Captions, } from "lucide-react";


const Hero = () => {
    return (
        <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-white text-slate-900">

            <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-200/40 blur-[120px]" />
            <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">

                <div className="max-w-xl">

                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
                        <Sparkles size={15} />
                        AI-powered video meetings
                        <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs">
                            New
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
                        Meetings that
                        <br />
                        mean more.
                        <br />
                        <span className="bg-linear-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                            Powered by AI.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-lg text-lg leading-8 text-slate-500">
                        Connect, collaborate, and get more done. MeetAI brings
                        intelligent video meetings, real-time conversations, and
                        AI-powered insights together in one place.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">

                        <Link
                            href="/signup"
                            className="group inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25"
                        >
                            Get started for free
                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            href="#features"
                            className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                        >
                            <Play size={17} className="text-purple-600" />
                            Explore features
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-slate-500">
                        <span className="flex items-center gap-2">
                            <Video size={17} className="text-purple-600" />
                            HD Video
                        </span>
                        <span className="flex items-center gap-2">
                            <Captions size={17} className="text-purple-600" />
                            AI Transcription
                        </span>
                        <span className="flex items-center gap-2">
                            <Sparkles size={17} className="text-purple-600" />
                            Smart Summaries
                        </span>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-xl">

                    <div className="absolute -inset-5 rounded-[32px] bg-linear-to-r from-purple-200/60 to-blue-200/60 blur-2xl" />

                    <div className="relative rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/40">

                        <div className="flex items-center justify-between px-3 py-3">
                            <div>
                                <p className="font-semibold text-slate-900">
                                    Team Standup
                                </p>
                                <p className="text-xs text-slate-400">
                                    meetai.app / room-4821
                                </p>
                            </div>

                            <div className="flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-medium text-red-500">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                                LIVE
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">

                            <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-indigo-400 to-purple-600">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl font-bold text-white">
                                    JD
                                </div>
                                <span className="absolute bottom-3 left-3 rounded-lg bg-black/30 px-2 py-1 text-xs text-white">
                                    John Davis
                                </span>
                            </div>

                            <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl font-bold text-white">
                                    SK
                                </div>
                                <span className="absolute bottom-3 left-3 rounded-lg bg-black/30 px-2 py-1 text-xs text-white">
                                    Sarah Kim
                                </span>
                            </div>

                            <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-pink-400 to-purple-600">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl font-bold text-white">
                                    AM
                                </div>
                                <span className="absolute bottom-3 left-3 rounded-lg bg-black/30 px-2 py-1 text-xs text-white">
                                    Alex Morgan
                                </span>
                            </div>

                            <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl border border-purple-100 bg-linear-to-br from-purple-50 to-blue-50">
                                <div className="text-center">
                                    <Sparkles className="mx-auto mb-2 text-purple-600" size={30} />
                                    <p className="text-sm font-semibold text-slate-800">
                                        MeetAI Assistant
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Listening & learning
                                    </p>
                                </div>
                                <span className="absolute bottom-3 left-3 rounded-lg bg-white/80 px-2 py-1 text-xs text-slate-600">
                                    AI Assistant
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4 py-5">
                            {[Mic, Video, Users].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600"
                                >
                                    <Icon size={18} />
                                </div>
                            ))}

                            <div className="flex h-11 w-14 items-center justify-center rounded-full bg-red-500 text-white">
                                <Video size={19} />
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-10 -left-8 hidden w-64 rounded-2xl border border-purple-100 bg-white p-4 shadow-xl shadow-slate-200/70 sm:block">
                        <div className="flex items-center gap-2">
                            <div className="rounded-lg bg-purple-100 p-2">
                                <Sparkles size={17} className="text-purple-600" />
                            </div>
                            <span className="text-sm font-semibold text-slate-800">
                                AI Meeting Summary
                            </span>
                        </div>

                        <p className="mt-3 text-xs leading-5 text-slate-500">
                            3 key decisions identified. 2 action items generated.
                        </p>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-4/5 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />
                        </div>
                    </div>

                    <div className="absolute -right-5 -top-5 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:flex">
                        <Users size={17} className="text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">
                            12 participants
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
