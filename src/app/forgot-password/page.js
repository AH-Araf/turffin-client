"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://res.cloudinary.com/dzbg5o5wo/image/upload/f_auto,q_auto/footer_graphic_bhyigj",
    "https://res.cloudinary.com/dzbg5o5wo/image/upload/f_auto,q_auto/footer_graphic_bhyigj",
    "https://res.cloudinary.com/dzbg5o5wo/image/upload/f_auto,q_auto/footer_graphic_bhyigj",
  ];

  return (
    <>
      <div className="min-h-screen bg-[#eef5f0] flex flex-col items-center justify-start px-4 py-10 sm:px-6 sm:py-8">

        {/* ── Brand ── */}
        {/* Mobile: compact column | Desktop: original column */}
        <div className="flex flex-col items-center mb-5 sm:mb-7">
          <img
            src="https://res.cloudinary.com/dzbg5o5wo/image/upload/f_auto,q_auto/Margin_i8fxux"
            alt="TurfPro"
            className="w-[44px] h-[55px] rounded-xl object-cover sm:w-[64px] sm:h-[80px] sm:rounded-2xl mb-1 sm:mb-0"
          />
          <h1 className="text-[28px] font-bold text-[#191C1E] text-center sm:w-[164.7px] sm:text-[48px] [font-family:Lexend]">
            TurfPro
          </h1>
          <p className="text-[11px] text-[#3D4A3E] tracking-widest font-normal leading-[1.625] sm:text-[16px] sm:-mt-1">
            Elite Athletics Management
          </p>
        </div>

        {/* ── Card ── */}
        <div className="w-full max-w-sm bg-white rounded-2xl border border-[#BCCABB] px-5 py-6 sm:px-8 sm:py-9">
          <h2 className="text-[18px] font-bold text-[#1a2a22] mb-1.5 sm:text-xl sm:mb-2">Forgot Password?</h2>
          <p className="text-[13px] text-[#4f6b5a] font-normal leading-relaxed mb-5 sm:text-sm sm:mb-6">
            No worries! Enter the email address associated with your account and we'll send a recovery link.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[12px] font-normal leading-[14.4px] text-[#3D4A3E] mb-2 tracking-[0.6px]"
              >
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8aaa96] pointer-events-none">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="coach@turfpro.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3 bg-[#f7fbf8] border border-[#d4e6da] rounded-xl text-base sm:text-sm text-[#1a2a22] placeholder-[#BCCABB] outline-none focus:border-[#BCCABB] focus:ring-2 focus:ring-[#3aab5e]/10 transition"
                />
              </div>
            </div>

            {/* Info Note */}
            <div className="flex items-start gap-2.5 bg-[#f5f6f7] border border-[#d0d5dd] rounded-xl px-3 py-2.5 mb-5 sm:px-3.5 sm:py-3">
              <svg className="shrink-0 mt-0.5 text-[#586377]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-[11.5px] sm:text-xs text-[#586377] leading-[1.625]">
                Instructions will be sent to this email if an account exists. The link will expire in 15 minutes.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!email}
              className="w-full flex items-center justify-center gap-[8px] mb-[14px] bg-[#4ADE80] hover:bg-[#2d8f4e] text-[#005E2D] text-[15px] sm:text-[16px] font-bold leading-[24px] py-3.5 sm:pt-3.5 sm:pb-4.25 rounded-xl shadow-[0_3px_12px_rgba(58,171,94,0.30)] hover:shadow-[0_5px_18px_rgba(58,171,94,0.38)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 [font-family:Lexend] tracking-[0px]"
            >
              Send Recovery Link
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </button>
          </form>

          {/* Divider */}
          <div className="w-full h-px bg-[#d4e6da] my-5" />

          {/* Back to Login */}
          <Link
            href="/login"
            className="flex items-center justify-center gap-1.5 text-[13px] sm:text-[14px] font-semibold text-[#545F73] hover:text-[#3aab5e] transition-colors pt-[14px] leading-[20px] [font-family:Inter] tracking-[0px]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12,19 5,12 12,5" />
            </svg>
            Back to Login
          </Link>
        </div>

        {/* Support */}
        <p className="mt-5 text-[11px] sm:text-xs text-[#8aaa96]">
          Having trouble?{" "}
          <a href="/contact" className="text-[#3aab5e] font-medium hover:underline">Contact</a>
          {" "}
          <a href="/support" className="text-[#3aab5e] font-medium hover:underline">Support</a>
        </p>

        {/* dots */}
        <div className="mt-7 sm:mt-10 w-full sm:w-[256px] max-w-sm">
          {/* Dot Navigation */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                    ? "bg-[#3aab5e] w-6"
                    : "bg-[#d4e6da] hover:bg-[#3aab5e]/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-2xl">
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full opacity-20 h-auto object-cover transition-opacity duration-300"
            />
          </div>
        </div>

      </div>
    </>
  );
}