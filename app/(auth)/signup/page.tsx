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
    CheckCircle2,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const signupSchema = z
    .object({
        name: z.string().min(2, "Name must contain at least 2 characters"),
        email: z.email("Enter a valid email address"),
        password: z
            .string()
            .min(8, "Password must contain at least 8 characters"),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (dataForm: SignupFormData) => {
        try {
            const { data, error } = await authClient.signUp.email({
                email: dataForm.email,
                name: dataForm.name,
                password: dataForm.password,
                callbackURL: "/dashboard",
            }, {
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
                onSuccess: (ctx) => {
                    
                }
            }
            )

        } catch (error) {
            console.error(error);
        }
    };

    const handleGoogleSignup = async () => {
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
    }

    return (
        <main className="min-h-screen flex bg-white">

            <section className="hidden lg:flex lg:w-1/2 bg-[#111827]
        relative overflow-hidden flex-col justify-between p-12">

                <div className="absolute w-96 h-96 bg-indigo-600/30
          rounded-full blur-[120px] -top-20 -left-20" />

                <div className="absolute w-96 h-96 bg-violet-600/20
          rounded-full blur-[120px] bottom-0 right-0" />

                <Link href="/" className="relative flex items-center gap-2 mb-2">
                    <img width={180} src="/logo.svg" alt="" />
                </Link>

                <div className="relative max-w-lg">

                    <div className="inline-flex items-center gap-2 px-3 py-1.5
            rounded-full border border-white/10 bg-white/5 mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-sm text-gray-300">
                            Your space to connect
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold text-white leading-tight">
                        Great things
                        <br />
                        happen when
                        <br />
                        <span className="text-indigo-400">
                            we connect.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                        Create your MeetAi account and bring your conversations,
                        ideas, and teams together in one place.
                    </p>

                    <div className="mt-10 space-y-5">
                        {[
                            "HD video meetings with your team",
                            "Share ideas with real-time collaboration",
                            "Join meetings from anywhere",
                        ].map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <CheckCircle2 className="text-indigo-400 w-5 h-5" />
                                <span className="text-gray-300 text-sm">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-xl p-5">

                        <div className="flex justify-between items-center mb-5">
                            <div>
                                <p className="text-white font-medium">
                                    Product Discussion
                                </p>
                                <p className="text-gray-400 text-xs mt-1">
                                    Team collaboration
                                </p>
                            </div>

                            <span className="text-xs text-green-400
                bg-green-400/10 px-3 py-1 rounded-full">
                                ● ACTIVE
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {["A", "S", "J"].map((item, index) => (
                                <div
                                    key={item}
                                    className={`h-20 rounded-xl flex items-center
                    justify-center text-white text-2xl font-semibold
                    ${index === 0
                                            ? "bg-indigo-500/30"
                                            : "bg-violet-500/20"
                                        }`}
                                >
                                    {item}
                                </div>
                            ))}
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
            justify-center gap-2 mb-10">
                        <img width={180} src="/logo.svg" alt="" />
                    </Link>

                    <div className="mb-7">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Create your account
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Get started with MeetAi today.
                        </p>
                    </div>

                    <button
                        type="button"
                        disabled={googleLoading}
                        onClick={handleGoogleSignup}
                        className="w-full flex items-center justify-center gap-3
              border border-gray-200 rounded-xl py-3 font-medium disabled:cursor-not-allowed disabled:bg-gray-100
              text-gray-700 hover:bg-gray-50 transition"
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
                        Sign up with Google
                    </button>

                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400">
                            OR SIGN UP WITH EMAIL
                        </span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium
                text-gray-700 mb-2">
                                Full name
                            </label>

                            <input
                                type="text"
                                placeholder="John Doe"
                                {...register("name")}
                                className={`w-full px-4 py-3 rounded-xl border
                  outline-none transition focus:ring-2
                  focus:ring-indigo-100 placeholder:text-gray-400
                  ${errors.name
                                        ? "border-red-400"
                                        : "border-gray-200 focus:border-indigo-500"
                                    }`}
                            />

                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

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
                  outline-none transition focus:ring-2
                  focus:ring-indigo-100 placeholder:text-gray-400
                  ${errors.email
                                        ? "border-red-400"
                                        : "border-gray-200 focus:border-indigo-500"
                                    }`}
                            />

                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium
                text-gray-700 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Minimum 8 characters"
                                    minLength={8}
                                    {...register("password")}
                                    className={`w-full px-4 py-3 pr-12 rounded-xl
                    border outline-none transition focus:ring-2
                    focus:ring-indigo-100 placeholder:text-gray-400
                    ${errors.password
                                            ? "border-red-400"
                                            : "border-gray-200 focus:border-indigo-500"
                                        }`}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2
                    -translate-y-1/2 text-gray-400"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword
                                        ? <EyeOff size={19} />
                                        : <Eye size={19} />}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium
                                            text-gray-700 mb-2">
                                Confirm password
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Re-enter your password"
                                    {...register("confirmPassword")}
                                    className={`w-full px-4 py-3 pr-12 rounded-xl
                                                border outline-none transition focus:ring-2
                                                focus:ring-indigo-100 placeholder:text-gray-400
                                                ${errors.confirmPassword
                                            ? "border-red-400"
                                            : "border-gray-200 focus:border-indigo-500"
                                        }`}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="absolute right-4 top-1/2
                                               -translate-y-1/2 text-gray-400"
                                    aria-label="Toggle confirm password visibility"
                                >
                                    {showConfirmPassword
                                        ? <EyeOff size={19} />
                                        : <Eye size={19} />}
                                </button>
                            </div>

                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.confirmPassword.message}
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
                                        shadow-indigo-600/20 mt-3"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={19} className="animate-spin" />
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    Create account
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-7">
                        Already have an account?{" "}
                        <Link href="/signin"
                            className="text-indigo-600 font-semibold hover:text-indigo-700">
                            Sign in
                        </Link>
                    </p>

                    <p className="text-center text-xs text-gray-400 mt-8">
                        By creating an account, you agree to our{" "}
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
