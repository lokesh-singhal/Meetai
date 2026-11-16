"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Eye,
    EyeOff,
    ArrowRight,
    Loader2,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const signInSchema = z.object({
    email: z.email("Enter a valid email address"),
    password: z.string().min(4, "Password is required"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (dataForm: SignInFormData) => {
        try {
            console.log(dataForm);
            const { data, error } = await authClient.signIn.email({
                email: dataForm.email,
                password: dataForm.password,
                callbackURL: "/dashboard",
            }, {
                onSuccess: (ctx) => {

                }
            })

            if(error){
                toast.error(error.message);
                return;
            }
        } catch (error: any) {
            toast.error(error);
        }
    };

    const handleGoogleSignIn = async () => {
        setGoogleLoading(true);
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/dashboard",
            newUserCallbackURL: "/dashboard"
        }, {
            onSuccess: (ctx) => {
                setGoogleLoading(false);
            },
            onError: (ctx) => {
                setGoogleLoading(false);
                console.log(ctx)
                toast.error(ctx.error.message);
            },
        });
    };

    return (
        <main className="min-h-screen bg-white flex">

            <section className="hidden lg:flex lg:w-1/2 bg-[#111827] 
        relative overflow-hidden flex-col justify-between p-12">

                <div className="absolute w-96 h-96 bg-indigo-600/30 
          rounded-full blur-[120px] -top-20 -left-20" />

                <div className="absolute w-96 h-96 bg-violet-600/20 
          rounded-full blur-[120px] bottom-0 right-0" />

                <Link href="/" className="relative flex items-center gap-2 mb-3">
                    <img width={180} src="/logo.svg" alt="" />
                </Link>

                <div className="relative max-w-lg">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5
            rounded-full border border-white/10 bg-white/5 mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-sm text-gray-300">
                            Meetings made simple
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold text-white leading-tight">
                        Connect better.
                        <br />
                        <span className="text-indigo-400">
                            Collaborate smarter.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                        Bring your team together, share ideas, and make
                        every conversation count. Your next great meeting
                        starts here.
                    </p>

                    <div className="mt-12 relative">
                        <div className="rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-xl p-5 shadow-2xl">

                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <p className="text-white font-medium">
                                        Team Sync Meeting
                                    </p>
                                    <p className="text-gray-400 text-xs mt-1">
                                        4 participants
                                    </p>
                                </div>
                                <span className="text-xs text-red-400 bg-red-500/10
                  px-3 py-1 rounded-full">
                                    ● LIVE
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {["Alex Morgan", "Sarah Chen", "John Smith", "Emma Wilson"].map(
                                    (name, index) => (
                                        <div
                                            key={name}
                                            className={`h-24 rounded-xl flex items-center
                        justify-center ${index % 2 === 0
                                                    ? "bg-indigo-500/20"
                                                    : "bg-violet-500/20"
                                                }`}
                                        >
                                            <div className="text-center">
                                                <div className="w-9 h-9 rounded-full bg-white/15
                          flex items-center justify-center text-white
                          mx-auto mb-1 font-semibold">
                                                    {name[0]}
                                                </div>
                                                <p className="text-xs text-gray-300">{name}</p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="flex justify-center gap-4 mt-5">
                                <div className="w-9 h-9 rounded-full bg-white/10" />
                                <div className="w-9 h-9 rounded-full bg-white/10" />
                                <div className="w-9 h-9 rounded-full bg-red-500" />
                                <div className="w-9 h-9 rounded-full bg-white/10" />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="relative text-gray-500 text-sm mt-1">
                    © 2026 MeetAi. All rights reserved.
                </p>
            </section>

            <section className="w-full lg:w-1/2 flex items-center
        justify-center px-6 py-12">

                <div className="w-full max-w-md">

                    <Link href="/" className="flex lg:hidden items-center
            justify-center gap-2 mb-12">
                        <img width={180} src="/logo.svg" alt="" />
                    </Link>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Welcome back
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Sign in to continue to your meetings.
                        </p>
                    </div>

                    <button
                        type="button"
                        disabled={googleLoading}
                        className="w-full flex items-center justify-center
              gap-3 border border-gray-200 rounded-xl py-3 disabled:cursor-not-allowed
              font-medium text-gray-700 hover:bg-gray-50
              transition"
                        onClick={handleGoogleSignIn}
                    >
                        <svg viewBox="0 0 48 48" className="w-5 h-5">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22
                9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0
                14.62 0 6.51 5.38 2.56 13.22l7.98 6.19
                C12.43 13.72 17.74 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15
                -3.09-.38-4.55H24v9.02h12.94c-.58 2.96
                -2.26 5.48-4.76 7.18l7.73 6C44.42
                37.96 46.98 31.82 46.98 24.55z"/>
                            <path fill="#FBBC05" d="M10.53 28.59A14.4
                14.4 0 0 1 9.75 24c0-1.59.27-3.13.76
                -4.59l-7.98-6.19A23.9 23.9 0 0 0
                0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z"/>
                            <path fill="#34A853" d="M24 48c6.48 0
                11.93-2.13 15.91-5.8l-7.73-6c-2.15
                1.45-4.92 2.3-8.18 2.3-6.26
                0-11.57-4.22-13.47-9.91l-7.98
                6.19C6.51 42.62 14.62 48 24 48z"/>
                        </svg>
                        Continue with Google
                    </button>

                    <div className="flex items-center gap-4 my-7">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400">
                            OR CONTINUE WITH EMAIL
                        </span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium
                text-gray-700 mb-2">
                                Email address
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                {...register("email")}
                                className={`w-full px-4 py-3 rounded-xl border
                  outline-none transition placeholder:text-gray-400
                  focus:ring-2 focus:ring-indigo-100
                  ${errors.email
                                        ? "border-red-400"
                                        : "border-gray-200 focus:border-indigo-500"
                                    }`}
                            />

                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1.5">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Password
                                </label>

                                <Link href="/forgot-password"
                                    className="text-sm font-medium text-indigo-600
                    hover:text-indigo-700">
                                    Forgot password?
                                </Link>
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    minLength={4}
                                    placeholder="Enter your password"
                                    {...register("password")}
                                    className={`w-full px-4 py-3 pr-12 rounded-xl
                    border outline-none transition
                    placeholder:text-gray-400 focus:ring-2
                    focus:ring-indigo-100 ${errors.password
                                            ? "border-red-400"
                                            : "border-gray-200 focus:border-indigo-500"
                                        }`}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2
                    text-gray-400 hover:text-gray-600"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword
                                        ? <EyeOff size={19} />
                                        : <Eye size={19} />}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1.5">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center
                gap-2 bg-indigo-600 hover:bg-indigo-700
                disabled:opacity-60 text-white font-semibold
                py-3 rounded-xl transition shadow-lg
                shadow-indigo-600/20"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={19} />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign in
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        Don't have an account?{" "}
                        <Link href="/signup"
                            className="text-indigo-600 font-semibold hover:text-indigo-700">
                            Create an account
                        </Link>
                    </p>

                    <p className="text-center text-xs text-gray-400 mt-10">
                        By continuing, you agree to our{" "}
                        <Link href="/terms" className="underline">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline">
                            Privacy Policy
                        </Link>.
                    </p>

                </div>
            </section>
        </main>
    );
}
