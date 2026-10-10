import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Konsultan Keuangan Syariah | Ex-Banker 15+ Tahun Pengalaman',
  description: 'Layanan edukasi, konsultasi perencanaan keuangan syariah, dan penyelenggaraan seminar bebas riba.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakarta.className} bg-slate-50 text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}