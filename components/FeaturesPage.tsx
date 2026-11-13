import { ReactNode } from 'react'
import {
    AudioLines,
    Languages,
    Sparkles,
    MessageCircle,
    FileText,
    Video,
    Mic,
    Search,
    NotebookPen,
    ListChecks,
    CheckCircle2,
    ArrowUpRight,
} from "lucide-react";


const features = [
    {
        id: "transcription",
        label: "LIVE TRANSCRIPTION",
        title: "Every word matters. Never miss a moment.",
        description:
            "Follow every conversation with real-time captions and accurate transcripts. Stay focused on the discussion while MeetAi captures what's being said.",
        points: [
            "Real-time speech-to-text",
            "Speaker-attributed transcripts",
            "Searchable conversation history",
        ],
        icon: AudioLines,
        accent: "blue",
    },
    {
        id: "summaries",
        label: "SMART SUMMARIES",
        title: "Less note-taking. More meaningful conversations.",
        description:
            "Turn lengthy meetings into concise summaries. MeetAi automatically highlights important discussions, decisions and key takeaways.",
        points: [
            "Automatic meeting summaries",
            "Key decisions and highlights",
            "Easy-to-review meeting recaps",
        ],
        icon: FileText,
        accent: "violet",
    },
    {
        id: "actions",
        label: "ACTION ITEMS",
        title: "Turn every discussion into meaningful action.",
        description:
            "Never lose track of what needs to be done. MeetAi identifies tasks, deadlines and responsibilities directly from your meeting conversations.",
        points: [
            "Automatic task extraction",
            "Assigned responsibilities",
            "Deadline tracking",
        ],
        icon: ListChecks,
        accent: "emerald",
    },
    {
        id: "translation",
        label: "LIVE TRANSLATION",
        title: "Great ideas speak every language.",
        description:
            "Bring people together across language barriers. Translate meeting transcripts and captions to make conversations more accessible.",
        points: [
            "Multilingual text translation",
            "English and Hindi support",
            "Translated meeting transcripts",
        ],
        icon: Languages,
        accent: "orange",
    },
    {
        id: "assistant",
        label: "ASK MEETAI",
        title: "Your meeting has questions. MeetAi has answers.",
        description:
            "Missed something important? Ask MeetAi about discussions, decisions or tasks and get answers grounded in your meeting transcript.",
        points: [
            "Context-aware meeting Q&A",
            "Catch up on missed discussions",
            "Instant answers from transcripts",
        ],
        icon: MessageCircle,
        accent: "pink",
    },
    {
        id: "memory",
        label: "MEETING MEMORY",
        title: "Your conversations deserve a better memory.",
        description:
            "Find information from previous meetings without digging through notes. Search conversations, decisions and important discussions in seconds.",
        points: [
            "Search previous meetings",
            "Find past decisions",
            "Organized meeting history",
        ],
        icon: Search,
        accent: "indigo",
    },
    {
        id: "notes",
        label: "SMART NOTES",
        title: "Beautifully organized notes, automatically.",
        description:
            "Turn your meeting transcripts into structured notes with topics, highlights and follow-ups, ready to review or share.",
        points: [
            "Structured meeting notes",
            "Important discussion highlights",
            "Copy and export notes",
        ],
        icon: NotebookPen,
        accent: "cyan",
    },
];

const themes: Record<
    string,
    { bg: string; icon: string; glow: string; text: string }
> = {
    blue: {
        bg: "bg-blue-50",
        icon: "bg-blue-600",
        glow: "bg-blue-300/40",
        text: "text-blue-600",
    },
    violet: {
        bg: "bg-violet-50",
        icon: "bg-violet-600",
        glow: "bg-violet-300/40",
        text: "text-violet-600",
    },
    emerald: {
        bg: "bg-emerald-50",
        icon: "bg-emerald-600",
        glow: "bg-emerald-300/40",
        text: "text-emerald-600",
    },
    orange: {
        bg: "bg-orange-50",
        icon: "bg-orange-500",
        glow: "bg-orange-300/40",
        text: "text-orange-600",
    },
    pink: {
        bg: "bg-pink-50",
        icon: "bg-pink-600",
        glow: "bg-pink-300/40",
        text: "text-pink-600",
    },
    indigo: {
        bg: "bg-indigo-50",
        icon: "bg-indigo-600",
        glow: "bg-indigo-300/40",
        text: "text-indigo-600",
    },
    cyan: {
        bg: "bg-cyan-50",
        icon: "bg-cyan-600",
        glow: "bg-cyan-300/40",
        text: "text-cyan-600",
    },
};

function Panel({
    title,
    children,
    className = "",
}: {
    title: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 ${className}`}
        >
            <div className="mb-3 flex items-center gap-2">
                <Sparkles size={15} className="text-blue-600" />
                <span className="text-xs font-semibold text-slate-800">
                    {title}
                </span>
            </div>
            {children}
        </div>
    );
}

function FeatureVisual({ id }: { id: string }) {
    switch (id) {
        case "transcription":
            return (
                <div className="relative w-full max-w-md">
                    <div className="overflow-hidden rounded-3xl border-4 border-white bg-slate-800 shadow-2xl">
                        <div className="flex aspect-4/3 flex-col items-center justify-center bg-linear-to-br from-blue-300 via-indigo-200 to-violet-200">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/80 text-blue-600">
                                <Video size={38} />
                            </div>
                            <span className="mt-4 text-sm font-semibold text-slate-700">
                                Team Meeting
                            </span>
                        </div>
                        <div className="flex justify-center gap-5 bg-slate-900 p-3 text-white">
                            <Mic size={17} />
                            <Video size={17} />
                            <MessageCircle size={17} />
                        </div>
                    </div>

                    <Panel
                        title="Live transcript"
                        className="absolute -bottom-8 -right-2 w-[75%] sm:-right-8"
                    >
                        <p className="text-xs leading-6 text-slate-600">
                            <b className="text-blue-600">Rahul:</b> Let's finalize
                            the design today.
                        </p>
                        <p className="text-xs leading-6 text-slate-600">
                            <b className="text-violet-600">Aman:</b> I'll handle
                            the frontend.
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-[10px] text-blue-600">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                            Transcribing...
                        </div>
                    </Panel>
                </div>
            );

        case "summaries":
            return (
                <Panel title="AI Meeting Summary" className="w-full max-w-sm">
                    <div className="space-y-4">
                        <div className="rounded-xl bg-violet-50 p-4">
                            <p className="text-xs font-semibold text-violet-700">
                                Meeting overview
                            </p>
                            <p className="mt-2 text-xs leading-5 text-slate-600">
                                The team reviewed project progress and discussed
                                upcoming development milestones.
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-800">
                                Key highlights
                            </p>
                            {[
                                "Frontend design approved",
                                "API integration scheduled",
                                "Testing begins next week",
                            ].map((item) => (
                                <div key={item} className="mt-3 flex gap-2">
                                    <CheckCircle2
                                        size={15}
                                        className="shrink-0 text-violet-500"
                                    />
                                    <span className="text-xs text-slate-600">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Panel>
            );

        case "actions":
            return (
                <Panel title="AI Action Items" className="w-full max-w-sm">
                    <div className="space-y-3">
                        {[
                            { task: "Complete dashboard UI", person: "Aman", date: "Friday" },
                            { task: "Integrate authentication", person: "Rahul", date: "Monday" },
                            { task: "Test API endpoints", person: "Priya", date: "Tuesday" },
                        ].map((item) => (
                            <div
                                key={item.task}
                                className="flex items-start gap-3 rounded-xl bg-slate-50 p-3"
                            >
                                <div className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-emerald-400" />
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-slate-800">
                                        {item.task}
                                    </p>
                                    <p className="mt-1 text-[11px] text-slate-500">
                                        {item.person} · Due {item.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Panel>
            );

        case "translation":
            return (
                <div className="w-full max-w-sm space-y-4">
                    <Panel title="Live Translation">
                        <div className="rounded-xl bg-slate-50 p-4">
                            <p className="text-[10px] font-semibold text-slate-400">
                                ENGLISH
                            </p>
                            <p className="mt-2 text-sm text-slate-800">
                                Let's start the meeting.
                            </p>
                        </div>
                        <div className="my-3 flex justify-center">
                            <Languages size={23} className="text-orange-500" />
                        </div>
                        <div className="rounded-xl bg-orange-50 p-4">
                            <p className="text-[10px] font-semibold text-orange-500">
                                HINDI
                            </p>
                            <p className="mt-2 text-sm text-slate-800">
                                चलिए मीटिंग शुरू करते हैं।
                            </p>
                        </div>
                    </Panel>
                </div>
            );

        case "assistant":
            return (
                <Panel title="Ask MeetAi" className="w-full max-w-sm">
                    <div className="space-y-4">
                        <div className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-tr-sm bg-blue-600 px-4 py-3 text-xs text-white">
                            What did I miss in the meeting?
                        </div>
                        <div className="max-w-[95%] rounded-2xl rounded-tl-sm bg-slate-100 p-4">
                            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-blue-600">
                                <Sparkles size={14} />
                                MeetAi Assistant
                            </div>
                            <p className="text-xs leading-6 text-slate-600">
                                The team discussed the dashboard design, confirmed
                                the deadline and assigned three development tasks.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-200 px-4 py-3 text-xs text-slate-400">
                            Ask anything about your meeting...
                        </div>
                    </div>
                </Panel>
            );

        case "memory":
            return (
                <Panel title="Meeting Memory" className="w-full max-w-sm">
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3">
                        <Search size={16} className="text-slate-400" />
                        <span className="text-xs text-slate-500">
                            Search meeting discussions...
                        </span>
                    </div>
                    <div className="mt-4 space-y-3">
                        {[
                            { name: "Project Planning", date: "Nov 10", detail: "Dashboard architecture discussed" },
                            { name: "Team Sync", date: "Nov 12", detail: "Authentication flow finalized" },
                        ].map((meeting) => (
                            <div key={meeting.name} className="rounded-xl bg-slate-50 p-3">
                                <div className="flex justify-between gap-2">
                                    <p className="text-xs font-semibold text-slate-800">
                                        {meeting.name}
                                    </p>
                                    <span className="text-[10px] text-slate-400">
                                        {meeting.date}
                                    </span>
                                </div>
                                <p className="mt-2 text-[11px] text-slate-500">
                                    {meeting.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </Panel>
            );

        case "notes":
            return (
                <Panel title="Smart Meeting Notes" className="w-full max-w-sm">
                    <div className="space-y-4 text-xs">
                        <div>
                            <p className="font-semibold text-slate-800">
                                Product Development Sync
                            </p>
                            <p className="mt-1 text-slate-400">
                                AI-generated meeting notes
                            </p>
                        </div>
                        <div className="border-t border-slate-100 pt-3">
                            <p className="font-semibold text-slate-800">
                                Discussion points
                            </p>
                            <ul className="mt-2 list-inside list-disc space-y-2 text-slate-600">
                                <li>Reviewed frontend progress</li>
                                <li>Discussed API integration</li>
                                <li>Confirmed next milestones</li>
                            </ul>
                        </div>
                        <div className="rounded-xl bg-cyan-50 p-3 text-cyan-700">
                            Next meeting: Review testing progress
                        </div>
                    </div>
                </Panel>
            );

        default:
            return null;
    }
}

const FeaturesPage = () => {
    return (
        <div id="features" className="bg-white">
            {features.map((feature, index) => {
                const Icon = feature.icon;
                const theme = themes[feature.accent];
                const reverse = index % 2 === 1;

                return (
                    <section
                        key={feature.id}
                        className={`overflow-hidden px-6 py-20 md:py-28 ${index % 2 ? "bg-slate-50/60" : "bg-white"
                            }`}
                    >
                        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">

                            <div
                                className={`relative flex min-h-95 items-center justify-center rounded-[2rem] ${theme.bg} p-10 sm:min-h-115 ${reverse ? "lg:order-2" : ""
                                    }`}
                            >
                                <div
                                    className={`absolute inset-12 rounded-full ${theme.glow} blur-[70px]`}
                                />
                                <div className="relative z-10 flex w-full items-center justify-center">
                                    <FeatureVisual id={feature.id} />
                                </div>
                            </div>

                            <div className={reverse ? "lg:order-1" : ""}>
                                <div className="mb-6 flex items-center gap-3">
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.icon} text-white`}
                                    >
                                        <Icon size={20} />
                                    </div>
                                    <span className={`text-xs font-bold tracking-[0.18em] ${theme.text}`}>
                                        {feature.label}
                                    </span>
                                </div>

                                <h3 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
                                    {feature.title}
                                </h3>

                                <p className="mt-6 max-w-lg text-base leading-8 text-slate-500 md:text-lg">
                                    {feature.description}
                                </p>

                                <div className="mt-8 space-y-4">
                                    {feature.points.map((point) => (
                                        <div key={point} className="flex items-center gap-3">
                                            <CheckCircle2
                                                size={19}
                                                className={`shrink-0 ${theme.text}`}
                                            />
                                            <span className="text-sm font-medium text-slate-700">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="/signup"
                                    className={`mt-9 inline-flex items-center gap-2 text-sm font-semibold ${theme.text} transition-all hover:gap-3`}
                                >
                                    Get started with MeetAi
                                    <ArrowUpRight size={17} />
                                </a>
                            </div>

                        </div>
                    </section>
                );
            })}
        </div>
    )
}

export default FeaturesPage
