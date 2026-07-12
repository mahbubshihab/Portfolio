"use client";

import { Contact as VisualContact } from "@/features/contact/Contact";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative flex flex-col items-center justify-center bg-transparent">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl w-full px-6 relative z-10">
        <VisualContact />
      </div>
    </div>
  );
}
