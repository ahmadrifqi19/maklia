'use client';

import { Fraunces } from 'next/font/google';
import { Quote, Landmark, Sunrise, HeartHandshake } from 'lucide-react';

// Font Fraunces matching dengan Hero Section
const display = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' });

const journey = [
  {
    icon: Landmark,
    title: 'Dari Dalam Perbankan',
    text: '15 tahun memahami seluk-beluk dan cara kerja sistem keuangan konvensional.',
  },
  {
    icon: Sunrise,
    title: 'Titik Balik Hijrah',
    text: 'Memilih komitmen penuh meninggalkan transaksi yang berisiko riba.',
  },
  {
    icon: HeartHandshake,
    title: 'Misi Dakwah Hari Ini',
    text: 'Mengedukasi dan mendampingi Anda menata keuangan yang aman, legal, dan syar’i.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF6EA] py-16 sm:py-20 lg:py-28">
      {/* Pola Geometri Islami - Transparansi Ultra Subtle (3.5%) */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-[#0d5a42] opacity-[0.035] pointer-events-none">
        <defs>
          <pattern id="khatam-about" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <rect x="15" y="15" width="30" height="30" />
              <rect x="15" y="15" width="30" height="30" transform="rotate(45 30 30)" />
              <circle cx="30" cy="30" r="3" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#khatam-about)" />
      </svg>

      {/* Garis Emas Soft Pembatas Atas */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B8923F]/50 to-transparent pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header & Quote Layout Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Sisi Kiri: Judul & Emblem Badge */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex h-16 w-14 sm:h-20 sm:w-16 items-center justify-center rounded-t-[999px] rounded-b-2xl border border-[#B8923F]/60 bg-[#04251b] text-[#E8CF92] shadow-md transition-transform hover:scale-105 duration-300">
              <Quote className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            </div>

            <h2
              className={`${display.className} mt-6 text-balance text-2xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight text-[#04251b] tracking-tight`}
            >
              Perjalanan hijrah &amp; misi dakwah
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#4a6154] font-medium max-w-md">
              Dari praktisi perbankan belasan tahun menjadi pendamping keuangan berkah keluarga Anda.
            </p>
          </div>

          {/* Sisi Kanan: Kutipan MakLia */}
          <div className="lg:col-span-7">
            <figure className="relative border-l-2 sm:border-l-3 border-[#B8923F] pl-5 sm:pl-8 py-1">
              <blockquote
                className={`${display.className} max-w-2xl text-lg sm:text-2xl font-medium leading-relaxed sm:leading-[1.6] text-[#083325]`}
              >
                <p className="italic">
                  &ldquo;Memahami seluk-beluk sistem keuangan konvensional selama 15 tahun memberikan pemahaman
                  mendalam tentang bagaimana finansial bekerja. Namun, titik balik perjalanan hidup membawa saya pada
                  komitmen untuk meninggalkan transaksi berisiko riba dan mendedikasikan ilmu ini untuk
                  mengedukasi masyarakat. Misi saya adalah membantu Anda menata masa depan finansial yang aman,
                  legal, syar&apos;i, dan berkeberkahan.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2 text-xs sm:text-sm text-[#4a6154]">
                <div className="h-px w-6 bg-[#B8923F]" aria-hidden="true" />
                <span>
                  <strong className="font-bold text-[#04251b]">MakLia</strong> &mdash; Mentor Keuangan Syariah
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Perjalanan (Journey Timeline) - Mobile Responsive */}
        <div className="mt-14 sm:mt-20">
          <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            
            {/* Horizontal Line Connector (Desktop/Tablet) */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-gradient-to-r from-[#B8923F] via-[#B8923F]/40 to-[#B8923F] sm:block pointer-events-none"
            />

            {journey.map(({ icon: Icon, title, text }, index) => (
              <li key={title} className="relative flex items-start gap-4 sm:block">
                
                {/* Vertical Line Connector (Mobile Only) */}
                {index !== journey.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-6 top-12 bottom-0 -mb-8 w-0.5 bg-gradient-to-b from-[#B8923F] to-[#B8923F]/20 sm:hidden pointer-events-none"
                  />
                )}

                {/* Icon Badge */}
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B8923F]/70 bg-[#04251b] text-[#E8CF92] shadow-md transition-transform duration-300 hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                {/* Text Content */}
                <div className="pt-0.5 sm:pt-5">
                  <h3 className={`${display.className} text-base sm:text-lg font-bold text-[#04251b] tracking-tight`}>
                    {title}
                  </h3>
                  <p className="mt-1 max-w-xs text-xs sm:text-sm leading-relaxed text-[#4a6154]">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}