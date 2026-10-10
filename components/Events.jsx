'use client';

import Image from 'next/image';
import { Fraunces } from 'next/font/google';
import { Calendar, Clock, MapPin, MessageCircle, CalendarDays } from 'lucide-react';

const display = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' });

const waNumber = '6282154430644';

const eventsData = [
  {
    id: 1,
    title: 'Zoom Kickback Bareng Circle Miracle',
    date: 'Senin - Sabtu',
    time: '06:30 - 07:30 WIB',
    type: 'Online via Zoom',
    price: 0,
    category: 'Edukasi Publik',
    poster: '/posters/event-1.jpg',
    waRegisterUrl: `https://wa.me/${waNumber}?text=${encodeURIComponent(
      "Bismillah, hallo Admin MakLia. Saya ingin mendaftar untuk event: 'Zoom Kickback Bareng Circle Miracle'. Mohon info petunjuk pendaftaran & akses Zoom."
    )}`,
  },
];

export default function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-[#FAF6EA] py-16 sm:py-20 lg:py-28">
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-[#0d5a42] opacity-[0.035] pointer-events-none">
        <defs>
          <pattern id="khatam-events" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <rect x="15" y="15" width="30" height="30" />
              <rect x="15" y="15" width="30" height="30" transform="rotate(45 30 30)" />
              <circle cx="30" cy="30" r="3" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#khatam-events)" />
      </svg>

      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B8923F]/50 to-transparent pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex flex-col items-center lg:items-end justify-between gap-4 md:flex-row text-center md:text-left">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B8923F]/40 bg-[#04251b]/5 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#0d5a42] shadow-sm mb-3">
              <CalendarDays className="h-4 w-4 text-[#B8923F]" />
              <span>Jadwal Edukasi &amp; Kajian</span>
            </div>
            <h2
              className={`${display.className} text-balance text-2xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight text-[#04251b] tracking-tight`}
            >
              Agenda &amp; seminar terdekat
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-base leading-relaxed text-[#4a6154]">
            Pilih agenda edukasi MakLia yang Anda inginkan, lalu amankan kursi pendaftaran langsung via WhatsApp Admin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center items-stretch">
          {eventsData.map((evt) => (
            <article
              key={evt.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#B8923F]/35 bg-[#FFFDF6] shadow-lg shadow-[#04251b]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8923F]/70 hover:shadow-xl hover:shadow-[#04251b]/10"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gradient-to-br from-[#0a4a36] to-[#04251b]">
                <Image
                  src={evt.poster}
                  alt={`Poster ${evt.title}`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#04251b]/85 via-[#04251b]/30 to-transparent z-10" />

                <span className="absolute left-3 top-3 z-20 rounded-full border border-[#D8B66A]/40 bg-[#04251b]/85 backdrop-blur-md px-3 py-1 text-[11px] sm:text-xs font-medium text-[#E8CF92] shadow-sm">
                  {evt.category}
                </span>

                <span
                  className={`${display.className} absolute bottom-3 right-3 z-20 rounded-xl bg-gradient-to-r from-[#D8B66A] to-[#B39045] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#04251b] shadow-md`}
                >
                  {evt.price === 0 ? 'Gratis' : `Rp ${evt.price.toLocaleString('id-ID')}`}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6 text-left">
                <h3
                  className={`${display.className} line-clamp-2 min-h-[3rem] text-base sm:text-xl font-bold leading-snug text-[#04251b]`}
                >
                  {evt.title}
                </h3>

                <ul className="mt-4 space-y-2.5 border-t border-[#04251b]/10 pt-4 text-xs sm:text-sm text-[#3f574b]">
                  <li className="flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 shrink-0 text-[#0d7a57]" aria-hidden="true" />
                    <span>{evt.date}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 shrink-0 text-[#0d7a57]" aria-hidden="true" />
                    <span>{evt.time}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 text-[#0d7a57]" aria-hidden="true" />
                    <span>{evt.type}</span>
                  </li>
                </ul>

                <div className="mt-6 pt-2">
                  <a
                    href={evt.waRegisterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#04251b] px-5 py-3 text-xs sm:text-sm font-bold text-[#E8CF92] shadow-md shadow-[#04251b]/20 transition-all duration-300 hover:bg-[#0a4a36] hover:shadow-lg active:scale-[0.98]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#D8B66A]" aria-hidden="true" />
                    <span>Daftar via WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}