'use client';

import { Fraunces } from 'next/font/google';
import { MessageCircle, Handshake, ArrowRight } from 'lucide-react';

const display = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' });

const waNumber = '6282154430644'; // Nomor WA Admin MakLia

const partners = [
  'DKM Masjid',
  'Komunitas Bisnis & UMKM',
  'Instansi Perusahaan',
  'Event Organizer',
];

export default function CoEventSection({ onOpenCoEvent }) {
  const waCoEventUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    'Bismillah, hallo Admin MakLia. Kami dari [Nama Instansi/Komunitas] bermaksud untuk mengajukan undangan pembicara / kerja sama Co-Seminar bersama MakLia. Boleh dibantu informasi prosedurnya?'
  )}`;

  return (
    <section
      id="co-event"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a4834] via-[#063828] to-[#031e15] py-16 sm:py-20 lg:py-28 text-[#F6F0E0]"
    >
      {/* Dynamic Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#0d5a42_0%,transparent_60%),radial-gradient(circle_at_80%_80%,#063023_0%,transparent_50%)] pointer-events-none"
      />

      {/* Geometri Khatam Islami - Transparansi Ultra Subtle (3.5%) */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-[#D8B66A] opacity-[0.035] pointer-events-none">
        <defs>
          <pattern id="khatam-coevent" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <rect x="15" y="15" width="30" height="30" />
              <rect x="15" y="15" width="30" height="30" transform="rotate(45 30 30)" />
              <circle cx="30" cy="30" r="3" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#khatam-coevent)" />
      </svg>

      {/* Accent Architectural Arch Arc (Desktop Only) */}
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/2 hidden h-[120%] w-[380px] -translate-y-1/2 rounded-t-[999px] border border-[#D8B66A]/20 pointer-events-none lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 top-1/2 hidden h-[105%] w-[300px] -translate-y-1/2 rounded-t-[999px] border border-[#F6F0E0]/10 pointer-events-none lg:block"
      />

      {/* Garis Emas Soft Pembatas Atas */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B66A]/40 to-transparent pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Konten Kiri */}
          <div className="text-center lg:col-span-8 lg:text-left flex flex-col items-center lg:items-start">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8B66A]/30 bg-[#D8B66A]/10 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#E8CF92] shadow-sm mb-4">
              <Handshake className="h-4 w-4 text-[#D8B66A]" />
              <span>Kemitraan &amp; Kolaborasi Event</span>
            </div>

            <h2
              className={`${display.className} text-balance text-2xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight tracking-tight text-white`}
            >
              Ingin mengadakan co-seminar atau mengundang pembicara?
            </h2>

            <p className="mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-[#B7C9BF]">
              Terbuka untuk kolaborasi event bersama DKM masjid, komunitas bisnis/UMKM, instansi perusahaan,
              maupun event organizer untuk membawa nilai literasi keuangan bebas riba kepada anggota Anda.
            </p>

            {/* List Partner Badges */}
            <ul className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-2.5 lg:justify-start">
              {partners.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-[#D8B66A]/25 bg-[#F6F0E0]/5 backdrop-blur-sm px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#E8CF92] shadow-xs"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Sisi Kanan / CTA Action */}
          <div className="flex flex-col items-center gap-3.5 lg:col-span-4 lg:items-end w-full">
            <a
              href={waCoEventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#D8B66A] to-[#C9A354] px-7 py-3.5 text-xs sm:text-base font-bold text-[#04251b] shadow-lg shadow-[#D8B66A]/20 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5 text-[#04251b]" aria-hidden="true" />
              <span>Hubungi WA Admin Co-Event</span>
            </a>

            {onOpenCoEvent && (
              <button
                type="button"
                onClick={onOpenCoEvent}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#F6F0E0]/20 bg-[#F6F0E0]/5 px-7 py-3 text-xs sm:text-sm font-semibold text-[#F6F0E0] transition-colors hover:bg-[#F6F0E0]/10 hover:border-[#D8B66A]/50"
              >
                <span>Isi Form Pengajuan</span>
                <ArrowRight className="h-4 w-4 text-[#D8B66A]" />
              </button>
            )}

            <p className="text-center lg:text-right text-[11px] sm:text-xs text-[#9FB3A8]">
              Admin akan membalas dengan alur &amp; proposal kerja sama.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}