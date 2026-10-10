'use client';

import { useEffect, useState } from 'react';
import { Fraunces } from 'next/font/google';
import { BookOpen, Users, UserCheck, X, CheckCircle2, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const display = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' });

const waNumber = '6282154430644';

const services = [
  {
    id: 'consult',
    icon: UserCheck,
    title: 'Konsultasi & Perencanaan Syariah',
    shortDesc:
      'Pendampingan 1-on-1 analisis keuangan keluarga, strategi pelepasan utang riba, dan penataan portofolio aset syariah.',
    badge: 'Layanan Privat 1-on-1',
    headline: 'Pendampingan Keuangan Syariah yang Personal, Aman, & Rapi',
    story:
      'Banyak keluarga dan pebisnis yang ingin berhijrah dari riba, namun merasa bingung dari mana harus memulai penataan ulang keuangan mereka. Melalui sesi privat ini, MakLia mendampingi Anda step-by-step secara mendalam dan rahasia.',
    highlights: [
      'Analisis arus kas (cashflow) dan pemetaan utang/riba secara detail.',
      'Penyusunan Roadmap pelepasan utang yang realistis dan aman.',
      'Restrukturisasi & penataan portofolio aset sesuai prinsip syariat Islam.',
      'Sesi diskusi privat 1-on-1 langsung bersama MakLia via Zoom / Pertemuan.',
    ],
    ctaText: 'Konsultasi Sesi Privat via WA',
    waMessage:
      'Bismillah, hallo Admin MakLia. Saya tertarik dengan layanan Konsultasi & Perencanaan Syariah Privat. Mohon info alur booking sesinya.',
  },
  {
    id: 'education',
    icon: BookOpen,
    title: 'Edukasi & Seminar Bebas Riba',
    shortDesc:
      'Sesi workshop, webinar, dan kajian edukatif mengenai fikih muamalah praktis untuk masyarakat umum, akademisi, dan praktisi.',
    badge: 'Program Edukasi & Literasi',
    headline: 'Memahami Fikih Muamalah Praktis Tanpa Rumit',
    story:
      'Edukasi keuangan syariah yang dirancang agar mudah dipahami oleh siapa saja—mulai dari ibu rumah tangga, profesional, hingga pebisnis muda. Menghadirkan materi bebas riba yang aplikatif untuk kehidupan sehari-hari.',
    highlights: [
      'Pemahaman dasar Fikih Muamalah & bahaya riba dalam perspektif syariat.',
      'Studi kasus nyata penyelesaian masalah keuangan keluarga & UMKM.',
      'Sesi tanya-jawab interaktif dan pembahasan topik muamalah terkini.',
      'Akses grup diskusi alumni edukasi MakLia.',
    ],
    ctaText: 'Info Jadwal Edukasi Terbaru',
    waMessage:
      'Bismillah, hallo Admin MakLia. Saya ingin bertanya mengenai jadwal seminar/webinar edukasi keuangan syariah terdekat.',
  },
  {
    id: 'corporate',
    icon: Users,
    title: 'Co-Seminar & Corporate Partnership',
    shortDesc:
      'Kolaborasi penyelenggaraan event literasi keuangan bersama masjid, instansi BUMN/Swasta, komunitas UMKM, dan event organizer.',
    badge: 'Kemitraan Organisasi & Event',
    headline: 'Bawa Literasi Keuangan Berkah ke Komunitas & Perusahaan Anda',
    story:
      'MakLia siap berkolaborasi sebagai narasumber utama maupun pendamping materi dalam acara seminar, workshop, atau kajian yang diselenggarakan oleh lembaga, DKM masjid, perusahaan, maupun komunitas bisnis Anda.',
    highlights: [
      'Materi seminar disesuaikan (customized) dengan kebutuhan peserta.',
      'Penyampaian materi yang komunikatif, hangat, dan solutif.',
      'Fasilitas modul ringkasan & tanya-jawab langsung bersama MakLia.',
      'Kerja sama event offline maupun webinar online.',
    ],
    ctaText: 'Ajukan Kerja Sama Event via WA',
    waMessage:
      'Bismillah, hallo Admin MakLia. Kami dari [Nama Instansi/Komunitas] bermaksud mengundang MakLia untuk kolaborasi Co-Seminar / Narasumber.',
  },
];

export default function Services({ onOpenConsult }) {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (!selectedService) return;
    const onKey = (e) => e.key === 'Escape' && setSelectedService(null);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [selectedService]);

  const ModalIcon = selectedService?.icon;

  return (
    <section id="services" className="relative overflow-hidden bg-[#031c14] py-16 sm:py-20 lg:py-28 text-[#F6F0E0]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0d5a42_0%,transparent_65%),linear-gradient(180deg,#042219_0%,#031811_50%,#02120d_100%)] pointer-events-none"
      />

      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-[#D8B66A] opacity-[0.035] pointer-events-none">
        <defs>
          <pattern id="khatam-services" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <rect x="15" y="15" width="30" height="30" />
              <rect x="15" y="15" width="30" height="30" transform="rotate(45 30 30)" />
              <circle cx="30" cy="30" r="3" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#khatam-services)" />
      </svg>

      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B66A]/40 to-transparent pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8B66A]/30 bg-[#D8B66A]/10 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#E8CF92] shadow-sm mb-4">
            <Sparkles className="h-4 w-4 text-[#D8B66A]" />
            <span>Program Pendampingan Berkah</span>
          </div>
          <h2 className={`${display.className} text-balance text-2xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight tracking-tight text-white`}>
            Tiga cara MakLia mendampingi Anda
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-sm sm:text-base leading-relaxed text-[#B7C9BF]">
            Pilih bentuk pendampingan yang paling sesuai untuk kebutuhan pribadi, keluarga, maupun organisasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8 items-stretch">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className={`group relative flex flex-col rounded-t-[120px] sm:rounded-t-[150px] rounded-b-3xl border border-[#D8B66A]/30 bg-gradient-to-b from-[#0a4834]/50 via-[#052c20]/60 to-[#031a13]/80 px-6 sm:px-7 pb-7 pt-12 sm:pt-14 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D8B66A]/70 hover:shadow-2xl hover:shadow-[#D8B66A]/10 ${
                  i === 1 ? 'md:-translate-y-2' : ''
                }`}
              >
                <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#D8B66A] to-[#B39045] text-[#04251b] shadow-lg shadow-[#D8B66A]/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                </div>

                <h3 className={`${display.className} mt-6 text-balance text-lg sm:text-xl font-bold leading-snug text-white`}>
                  {item.title}
                </h3>
                
                <p className="mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-[#B7C9BF]">
                  {item.shortDesc}
                </p>

                <div className="mt-6 border-t border-[#F6F0E0]/10 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (item.id === 'consult' && onOpenConsult) {
                        onOpenConsult();
                      } else {
                        setSelectedService(item);
                      }
                    }}
                    className="group/btn inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-[#E8CF92] transition-colors hover:bg-[#D8B66A]/10 hover:text-white"
                  >
                    <span>Pelajari Selengkapnya</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#02100b]/80 p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && setSelectedService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="relative flex max-h-[85vh] sm:max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-[#D8B66A]/50 bg-[#FAF6EA] p-5 sm:p-8 text-[#04251b] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Tutup"
              className="absolute right-4 top-4 z-10 rounded-full bg-[#04251b]/5 p-2 text-[#4a6154] transition-colors hover:bg-[#04251b]/15 hover:text-[#04251b]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="space-y-5 overflow-y-auto pr-1 text-left pt-2">
              <div className="flex items-start gap-3.5 sm:gap-4 pr-8">
                <span className="flex h-14 w-12 sm:h-16 sm:w-14 shrink-0 items-center justify-center rounded-t-[999px] rounded-b-xl border border-[#B8923F]/60 bg-[#04251b] text-[#E8CF92] shadow-sm">
                  <ModalIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <span className="inline-block rounded-full bg-[#04251b]/10 px-3 py-1 text-[11px] sm:text-xs font-bold text-[#0a4a36] ring-1 ring-[#B8923F]/40">
                    {selectedService.badge}
                  </span>
                  <h3
                    id="service-modal-title"
                    className={`${display.className} mt-2 text-balance text-xl sm:text-2xl font-bold leading-snug text-[#04251b]`}
                  >
                    {selectedService.headline}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-base leading-relaxed text-[#3a5245]">
                {selectedService.story}
              </p>

              <div className="rounded-2xl border-l-3 border-[#B8923F] bg-[#04251b]/5 p-4 sm:p-5">
                <h4 className={`${display.className} text-sm sm:text-base font-bold text-[#04251b]`}>
                  Apa yang Anda dapatkan:
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {selectedService.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2a4034]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0d7a57]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#04251b]/15 pt-5">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="order-2 sm:order-1 w-full sm:w-auto rounded-xl border border-[#04251b]/20 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#3a5245] transition-colors hover:bg-[#04251b]/5"
              >
                Tutup
              </button>
              <a
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(selectedService.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="order-1 sm:order-2 flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#04251b] to-[#0a4a36] px-6 py-3 text-xs sm:text-sm font-bold text-[#E8CF92] shadow-lg shadow-[#04251b]/20 transition-all hover:brightness-110 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 text-[#D8B66A]" aria-hidden="true" />
                <span>{selectedService.ctaText}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}