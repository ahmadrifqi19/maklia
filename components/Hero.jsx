'use client';

import Image from 'next/image';
import { Fraunces } from 'next/font/google';
import { Calendar, Users, Landmark, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

// Serif hangat untuk headline & statistik
const display = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' });

const stats = [
  { icon: Landmark, value: '15 Tahun', label: 'Pengalaman Perbankan' },
  { icon: Calendar, value: '100+', label: 'Sesi Seminar' },
  { icon: Users, value: '150+', label: 'Klien Terdampingi' },
];

export default function Hero({ onOpenCoEvent }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#031c14] text-[#F6F0E0] flex items-center justify-center">
      {/* Dynamic Keyframes Animation */}
      <style>{`
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .hero-rise { animation: heroRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .hero-rise-2 { animation-delay: 0.15s; }
          .hero-rise-3 { animation-delay: 0.3s; }
        }
      `}</style>

      {/* Modern Gradient Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,#0d5a42_0%,transparent_55%),radial-gradient(circle_at_20%_80%,#063828_0%,transparent_50%),linear-gradient(180deg,#042219_0%,#02140e_100%)] pointer-events-none"
      />

      {/* Geometri Khatam Islami - Transparansi Diturunkan Sangat Halus (Ultra subtle 3-4%) */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-[#D8B66A] opacity-[0.035] pointer-events-none"
      >
        <defs>
          <pattern id="khatam-modern" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <rect x="15" y="15" width="30" height="30" />
              <rect x="15" y="15" width="30" height="30" transform="rotate(45 30 30)" />
              <circle cx="30" cy="30" r="3" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#khatam-modern)" />
      </svg>

      {/* Ambient Glow Subtle Circles */}
      <div className="absolute top-1/4 right-10 h-72 w-72 rounded-full bg-[#D8B66A]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-[#10b981]/10 blur-[90px] pointer-events-none" />

      {/* Pembatas Garis Bawah Emas Soft */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8B66A]/40 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* ==================== Kiri: Konten & Call to Action ==================== */}
          <div className="hero-rise text-center lg:col-span-7 lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Tag / Badge Atas */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8B66A]/30 bg-[#D8B66A]/10 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#E8CF92] shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#D8B66A]" aria-hidden="true" />
              <span>Syiar Keuangan Bebas Riba Bersama MakLia</span>
            </div>

            {/* Headline Utama */}
            <h1
              className={`${display.className} mt-5 text-balance text-3xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] tracking-tight text-white`}
            >
              15 tahun di dunia perbankan, kini mendampingi keuangan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0E0] via-[#E8CF92] to-[#D8B66A]">berkah Anda</span>.
            </h1>

            {/* Sub-deskripsi */}
            <p className="mt-5 max-w-xl text-balance text-sm sm:text-base lg:text-lg leading-relaxed text-[#B7C9BF]">
              Solusi praktis dan syar&apos;i untuk melepas utang riba, merencanakan keuangan keluarga, serta menata portofolio bisnis yang berkeberkahan.
            </p>

            {/* Tombol Aksi (CTA) */}
            <div className="mt-8 flex flex-col w-full sm:w-auto sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#events"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D8B66A] to-[#C9A354] px-7 py-3.5 text-sm sm:text-base font-bold text-[#04251b] shadow-lg shadow-[#D8B66A]/20 transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:shadow-[#D8B66A]/30 active:scale-[0.98]"
              >
                <span>Lihat Jadwal Seminar</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={onOpenCoEvent}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#F6F0E0]/20 bg-[#F6F0E0]/5 backdrop-blur-sm px-7 py-3.5 text-sm sm:text-base font-semibold text-[#F6F0E0] transition-all duration-300 hover:border-[#D8B66A]/60 hover:bg-[#F6F0E0]/10 active:scale-[0.98]"
              >
                <Sparkles className="h-4 w-4 text-[#D8B66A]" />
                <span>Undang Co-Seminar</span>
              </button>
            </div>

            {/* Statistik (Mobile Grid / Desktop Row) */}
            <div className="mt-10 sm:mt-12 w-full border-t border-[#F6F0E0]/10 pt-6">
              <dl className="grid grid-cols-3 divide-x divide-[#F6F0E0]/15 text-center lg:text-left">
                {stats.map(({ icon: Icon, value, label }, index) => (
                  <div key={label} className={`px-2 sm:px-4 ${index === 0 ? 'pl-0 text-left' : ''} ${index === 2 ? 'pr-0' : ''}`}>
                    <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-1">
                      <Icon className="h-4 w-4 text-[#D8B66A]" aria-hidden="true" />
                    </div>
                    <dt className="sr-only">{label}</dt>
                    <dd className={`${display.className} text-lg sm:text-2xl font-bold text-white tracking-tight`}>{value}</dd>
                    <p className="mt-0.5 text-[11px] sm:text-xs text-[#9FB3A8] leading-tight font-medium">{label}</p>
                  </div>
                ))}
              </dl>
            </div>

          </div>

          {/* ==================== Kanan: Visual Frame & Foto ==================== */}
          <div className="hero-rise hero-rise-2 flex justify-center lg:col-span-5 lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-[40px] rounded-t-[180px] bg-gradient-to-b from-[#D8B66A]/30 via-transparent to-[#D8B66A]/10 blur-md pointer-events-none" />

              {/* Bingkai Utama Modern */}
              <div className="relative rounded-[36px] rounded-t-[170px] border border-[#D8B66A]/40 bg-[#04251b]/80 p-2.5 sm:p-3 shadow-2xl backdrop-blur-xl">
                
                {/* Frame Foto Dalam */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] rounded-t-[160px] bg-gradient-to-b from-[#0a4834] via-[#063023] to-[#021710]">
                  
                  {/* Subtle Pattern Inside Frame */}
                  <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-[#D8B66A] opacity-10">
                    <rect width="100%" height="100%" fill="url(#khatam-modern)" />
                  </svg>
                  
                  {/* Overlay Gradient Halus Bawah Foto */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#02140e] via-[#02140e]/60 to-transparent z-10" />

                  {/* Foto Profil */}
                  <Image
                    src="/maklia.png"
                    alt="MakLia - Mentor Keuangan Syariah"
                    fill
                    priority
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 85vw"
                    className="select-none object-contain object-bottom transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Floating Badge Profile */}
              <div className="hero-rise hero-rise-3 absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:-right-4 sm:translate-x-0 z-20 flex items-center gap-3 rounded-2xl border border-[#D8B66A]/40 bg-[#031811]/90 px-4 py-2.5 shadow-2xl backdrop-blur-md whitespace-nowrap min-w-[220px]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#D8B66A] to-[#B39045] text-[#04251b] shadow-md">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-white leading-tight">MakLia</span>
                  <span className="block text-[11px] font-medium text-[#E8CF92] leading-tight">Mentor Keuangan Syariah</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}