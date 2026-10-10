'use client';

import { useState, useEffect } from 'react';
import { Fraunces } from 'next/font/google';
import { X, Send, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Events from '@/components/Events';
import CoEventSection from '@/components/CoEventSection';
import Footer from '@/components/Footer';

const display = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' });

const waNumber = '6282154430644'; // Nomor WA Admin MakLia

export default function Home() {
  const [modalType, setModalType] = useState<'consult' | 'co-event' | null>(null);

  // State untuk Form Co-Event
  const [coForm, setCoForm] = useState({
    lembaga: '',
    whatsapp: '',
    rencana: '',
  });

  // State untuk Form Konsultasi
  const [consultForm, setConsultForm] = useState({
    nama: '',
    whatsapp: '',
    topik: 'Penyelesaian / Restrukturisasi Utang Riba',
  });

  // Kunci Scroll Halaman saat Modal Terbuka
  useEffect(() => {
    if (!modalType) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalType(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [modalType]);

  // Handler Submit Form Co-Event (Kirim via WhatsApp)
  const handleCoEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bismillah, hallo Admin MakLia. Kami ingin mengajukan Kolaborasi Co-Seminar / Event:\n\n• Nama Lembaga: ${coForm.lembaga}\n• WA PIC: ${coForm.whatsapp}\n• Rencana Tanggal & Peserta: ${coForm.rencana}`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setModalType(null);
    setCoForm({ lembaga: '', whatsapp: '', rencana: '' });
  };

  // Handler Submit Form Konsultasi Privat (Kirim via WhatsApp)
  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bismillah, hallo Admin MakLia. Saya ingin melakukan Booking Sesi Konsultasi Privat:\n\n• Nama Lengkap: ${consultForm.nama}\n• Nomor WA: ${consultForm.whatsapp}\n• Topik Utama: ${consultForm.topik}`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setModalType(null);
    setConsultForm({ nama: '', whatsapp: '', topik: 'Penyelesaian / Restrukturisasi Utang Riba' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#04251b] text-[#F6F0E0]">
      <Navbar />

      <main className="flex-grow">
        <Hero onOpenCoEvent={() => setModalType('co-event')} />
        <About />
        <Services onOpenConsult={() => setModalType('consult')} />
        <Events />
        <CoEventSection onOpenCoEvent={() => setModalType('co-event')} />
      </main>

      <Footer />

      {/* ==================== MODAL CO-EVENT / SEMINAR ==================== */}
      {modalType === 'co-event' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#02100b]/80 p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && setModalType(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#D8B66A]/50 bg-[#FAF6EA] p-6 sm:p-8 text-[#04251b] shadow-2xl"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 rounded-full bg-[#04251b]/5 p-2 text-[#4a6154] transition-colors hover:bg-[#04251b]/15 hover:text-[#04251b]"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Modal */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#04251b] text-[#E8CF92] shadow-md">
                <Sparkles className="h-6 w-6 text-[#D8B66A]" />
              </span>
              <div>
                <h3 className={`${display.className} text-xl sm:text-2xl font-bold text-[#04251b] leading-tight`}>
                  Pengajuan Co-Event
                </h3>
                <p className="text-xs sm:text-sm text-[#4a6154]">Kolaborasi seminar &amp; kajian bersama MakLia</p>
              </div>
            </div>

            {/* Form Co-Event */}
            <form onSubmit={handleCoEventSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#04251b] mb-1.5">
                  Nama Lembaga / Komunitas / DKM
                </label>
                <input
                  required
                  type="text"
                  value={coForm.lembaga}
                  onChange={(e) => setCoForm({ ...coForm, lembaga: e.target.value })}
                  placeholder="Contoh: DKM Masjid Agung / Komunitas UMKM"
                  className="w-full px-4 py-3 rounded-xl border border-[#B8923F]/40 bg-white text-sm text-[#04251b] placeholder-[#8a9e93] focus:ring-2 focus:ring-[#04251b] focus:border-transparent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#04251b] mb-1.5">
                  Nomor WhatsApp PIC / Panitia
                </label>
                <input
                  required
                  type="tel"
                  value={coForm.whatsapp}
                  onChange={(e) => setCoForm({ ...coForm, whatsapp: e.target.value })}
                  placeholder="Contoh: 081234567890"
                  className="w-full px-4 py-3 rounded-xl border border-[#B8923F]/40 bg-white text-sm text-[#04251b] placeholder-[#8a9e93] focus:ring-2 focus:ring-[#04251b] focus:border-transparent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#04251b] mb-1.5">
                  Rencana Tanggal &amp; Estimasi Peserta
                </label>
                <input
                  required
                  type="text"
                  value={coForm.rencana}
                  onChange={(e) => setCoForm({ ...coForm, rencana: e.target.value })}
                  placeholder="Contoh: 20 November 2026, ~100 Peserta"
                  className="w-full px-4 py-3 rounded-xl border border-[#B8923F]/40 bg-white text-sm text-[#04251b] placeholder-[#8a9e93] focus:ring-2 focus:ring-[#04251b] focus:border-transparent focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#04251b] to-[#0a4a36] text-[#E8CF92] font-bold text-sm shadow-lg shadow-[#04251b]/20 transition-all hover:brightness-110 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4 text-[#D8B66A]" />
                  <span>Kirim Pengajuan via WA</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL KONSULTASI PRIVAT ==================== */}
      {modalType === 'consult' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#02100b]/80 p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && setModalType(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#D8B66A]/50 bg-[#FAF6EA] p-6 sm:p-8 text-[#04251b] shadow-2xl"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 rounded-full bg-[#04251b]/5 p-2 text-[#4a6154] transition-colors hover:bg-[#04251b]/15 hover:text-[#04251b]"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Modal */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#04251b] text-[#E8CF92] shadow-md">
                <UserCheck className="h-6 w-6 text-[#D8B66A]" />
              </span>
              <div>
                <h3 className={`${display.className} text-xl sm:text-2xl font-bold text-[#04251b] leading-tight`}>
                  Booking Konsultasi Privat
                </h3>
                <p className="text-xs sm:text-sm text-[#4a6154]">Sesi 1-on-1 bersama MakLia</p>
              </div>
            </div>

            {/* Form Konsultasi */}
            <form onSubmit={handleConsultSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#04251b] mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  required
                  type="text"
                  value={consultForm.nama}
                  onChange={(e) => setConsultForm({ ...consultForm, nama: e.target.value })}
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full px-4 py-3 rounded-xl border border-[#B8923F]/40 bg-white text-sm text-[#04251b] placeholder-[#8a9e93] focus:ring-2 focus:ring-[#04251b] focus:border-transparent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#04251b] mb-1.5">
                  Nomor WhatsApp (Aktif)
                </label>
                <input
                  required
                  type="tel"
                  value={consultForm.whatsapp}
                  onChange={(e) => setConsultForm({ ...consultForm, whatsapp: e.target.value })}
                  placeholder="Contoh: 081234567890"
                  className="w-full px-4 py-3 rounded-xl border border-[#B8923F]/40 bg-white text-sm text-[#04251b] placeholder-[#8a9e93] focus:ring-2 focus:ring-[#04251b] focus:border-transparent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#04251b] mb-1.5">
                  Topik Utama Konsultasi
                </label>
                <select
                  value={consultForm.topik}
                  onChange={(e) => setConsultForm({ ...consultForm, topik: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#B8923F]/40 bg-white text-sm text-[#04251b] focus:ring-2 focus:ring-[#04251b] focus:border-transparent focus:outline-none"
                >
                  <option value="Penyelesaian / Restrukturisasi Utang Riba">
                    Penyelesaian / Restrukturisasi Utang Riba
                  </option>
                  <option value="Perencanaan Portofolio & Investasi Syariah">
                    Perencanaan Portofolio &amp; Investasi Syariah
                  </option>
                  <option value="Pembersihan Aset Non-Halal">
                    Pembersihan Aset Non-Halal
                  </option>
                  <option value="Perencanaan Keuangan Keluarga Syariah">
                    Perencanaan Keuangan Keluarga Syariah
                  </option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#04251b] to-[#0a4a36] text-[#E8CF92] font-bold text-sm shadow-lg shadow-[#04251b]/20 transition-all hover:brightness-110 active:scale-[0.98]"
                >
                  <ShieldCheck className="h-4 w-4 text-[#D8B66A]" />
                  <span>Ajukan Konsultasi via WA</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}