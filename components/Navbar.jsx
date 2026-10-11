'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Ganti dengan nomor WhatsApp Admin MakLia (Gunakan format 62...)
  const waNumber = "6282154430644"; 
  
  const waConsultUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Bismillah, hallo MakLia. Saya ingin bertanya dan konsultasi mengenai sesi perencanaan keuangan syariah privat."
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo MakLia Official */}
        <div className="flex items-center space-x-4">
          <a href="#" className="relative h-10 w-32 sm:w-36 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo MakLia"
              width={150}
              height={45}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden sm:block h-7 w-[1px] bg-slate-300"></div>
          <span className="hidden sm:block text-xs text-emerald-800 font-bold leading-tight max-w-[200px]">
            Mentor Keuangan Syariah <br />
            <span className="text-slate-500 font-medium">Ex-Banker 15th</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a href="#about" className="hover:text-emerald-700 transition">Tentang MakLia</a>
          <a href="#services" className="hover:text-emerald-700 transition">Layanan</a>
          <a href="#events" className="hover:text-emerald-700 transition">Agenda Event</a>
          <a href="#co-event" className="hover:text-emerald-700 transition">Co-Seminar</a>
        </nav>

          {/* Tombol Direct WA */}
          <div className="hidden md:flex items-center">
            <a
              href={waConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition shadow-lg shadow-emerald-700/20 flex items-center gap-2.5 group hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* SVG Ikon Official WhatsApp */}
              <svg
                className="w-4 h-4 fill-current text-white transition-transform duration-300 group-hover:rotate-6"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Konsultasi via WA</span>
            </a>
          </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 text-sm font-semibold text-slate-700">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2">Tentang MakLia</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2">Layanan</a>
          <a href="#events" onClick={() => setIsOpen(false)} className="block py-2">Agenda Event</a>
          <a href="#co-event" onClick={() => setIsOpen(false)} className="block py-2">Co-Seminar</a>
         {/* Tombol Direct WA (Mobile) */}
          <a
            href={waConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-700 py-3 text-center text-sm font-bold text-white shadow-md shadow-emerald-700/20 transition-all hover:bg-emerald-800 active:scale-[0.98] mt-2"
          >
            <svg
              className="h-4 w-4 fill-current text-white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Konsultasi via WA</span>
          </a>
        </div>
      )}
    </header>
  );
}