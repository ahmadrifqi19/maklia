'use client';

import { Fraunces } from 'next/font/google';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';

const display = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' });

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-[#3f574b] border-t border-[#D8B66A]/30 pt-14 pb-8 overflow-hidden">
      {/* Garis Pembatas Atas Emas Soft */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8B66A]/60 to-transparent pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Konten Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#04251b]/10">
          
          {/* Brand & Deskripsi */}
          <div className="md:col-span-5 text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start mb-4">
              <Image
                src="/logo.png"
                alt="Logo MakLia - Konsultan Keuangan Syariah"
                width={180}
                height={58}
                className="h-14 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm text-[#4a6154] leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
              Mentor &amp; Konsultan Keuangan Syariah. Berkomitmen membantu keluarga dan pebisnis mewujudkan perencanaan keuangan yang aman, legal, syar&apos;i, dan bebas riba.
            </p>
          </div>

          {/* Navigasi Cepat */}
          <div className="md:col-span-4 text-center md:text-left">
            <h4 className={`${display.className} text-sm font-bold text-[#04251b] mb-4 tracking-wide uppercase`}>
              Navigasi Halaman
            </h4>
            <ul className="flex flex-wrap justify-center md:justify-start gap-y-2.5 gap-x-6 text-xs sm:text-sm font-medium">
              <li>
                <a href="#about" className="text-[#3f574b] hover:text-[#04251b] transition-colors">Tentang MakLia</a>
              </li>
              <li>
                <a href="#services" className="text-[#3f574b] hover:text-[#04251b] transition-colors">Layanan Pendampingan</a>
              </li>
              <li>
                <a href="#events" className="text-[#3f574b] hover:text-[#04251b] transition-colors">Agenda &amp; Seminar</a>
              </li>
              <li>
                <a href="#co-event" className="text-[#3f574b] hover:text-[#04251b] transition-colors">Undang Co-Event</a>
              </li>
            </ul>
          </div>

          {/* Ikuti Social Media Kami (TikTok & Instagram) */}
          <div className="md:col-span-3 text-center md:text-right flex flex-col items-center md:items-end justify-between">
            <div>
              <h4 className={`${display.className} text-sm font-bold text-[#04251b] mb-4 tracking-wide uppercase`}>
                Ikuti Media Sosial
              </h4>
              <div className="flex items-center justify-center md:justify-end gap-3">
                
                {/* TikTok Icon (Warna Emas Gradient) */}
                <a
                  href="https://tiktok.com/maklia.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B8923F]/30 bg-[#04251b] transition-all duration-300 hover:bg-[#0a4a36] hover:scale-105 shadow-md"
                  aria-label="TikTok MakLia"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                    <defs>
                      <linearGradient id="gold-tiktok-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E8CF92" />
                        <stop offset="100%" stopColor="#B39045" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gold-tiktok-grad)"
                      d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.896c.214 0 .422.023.623.067V9.336a6.335 6.335 0 0 0-.623-.031 6.34 6.34 0 1 0 6.34 6.34V9.617a8.212 8.212 0 0 0 4.771 1.517V7.689a4.8 4.8 0 0 1-1.001-1.003z"
                    />
                  </svg>
                </a>

                {/* Instagram Icon (Warna Emas Gradient) */}
                <a
                  href="https://instagram.com/maklia.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B8923F]/30 bg-[#04251b] transition-all duration-300 hover:bg-[#0a4a36] hover:scale-105 shadow-md"
                  aria-label="Instagram MakLia"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                    <defs>
                      <linearGradient id="gold-ig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E8CF92" />
                        <stop offset="100%" stopColor="#B39045" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gold-ig-grad)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#04251b] hover:text-[#0d7a57] transition-colors"
            >
              <span>Kembali ke atas</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#5a6f63] gap-2 text-center sm:text-left font-medium">
          <p>© 2026 MakLia — Konsultan Keuangan Syariah. All rights reserved.</p>
          <p className="text-[11px] text-[#0d7a57] font-semibold">Syiar Keuangan Berkah &amp; Bebas Riba</p>
        </div>

      </div>
    </footer>
  );
}