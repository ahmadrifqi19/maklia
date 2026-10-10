// Ganti dengan nomor WhatsApp Admin MakLia (Format 62...)
const waNumber = "6281234567890";

export const eventsData = [
  {
    id: 1,
    title: "Webinar Hijrah Finansial: Bebas Riba, Keuangan Berkah",
    date: "Sabtu, 24 Oktober 2026",
    time: "09:00 - 11:30 WIB",
    type: "Online via Zoom",
    price: 150000,
    category: "Edukasi Publik",
    poster: "/posters/event-1.jpg",
    waRegisterUrl: `https://wa.me/${waNumber}?text=${encodeURIComponent(
      "Bismillah, hallo Admin MakLia. Saya ingin mendaftar dan membeli tiket untuk event: 'Webinar Hijrah Finansial: Bebas Riba, Keuangan Berkah'. Mohon info petunjuk pendaftaran & rekening pembayarannya."
    )}`
  },
  {
    id: 2,
    title: "Workshop Fikih Muamalah untuk Pengusaha & UMKM",
    date: "Minggu, 15 November 2026",
    time: "08:30 - 15:00 WIB",
    type: "Hybrid / Offline",
    price: 350000,
    category: "Workshop Sertifikasi",
    poster: "/posters/event-2.jpg",
    waRegisterUrl: `https://wa.me/${waNumber}?text=${encodeURIComponent(
      "Bismillah, hallo Admin MakLia. Saya ingin mendaftar untuk event: 'Workshop Fikih Muamalah untuk Pengusaha & UMKM'. Mohon info petunjuk pendaftaran & rekening pembayarannya."
    )}`
  }
];