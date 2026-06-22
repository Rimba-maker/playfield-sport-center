import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  IconStar,
  IconBallFootball,
  IconPingPong,
  IconBallTennis,
  IconUsers,
  type Icon as TablerIcon,
} from '@tabler/icons-react';

const reviews: Array<{
  id: number; text: string; author: string; meta: string;
  sport: string; color: string; Avatar: TablerIcon;
}> = [
  {
    id: 1,
    text: 'Tim futsal kami sudah langganan setiap Selasa dan Kamis selama 8 bulan. Lapangan selalu bersih, AC dingin, dan staff ramah. Tidak pernah ada masalah.',
    author: 'Komunitas Futsal Garuda FC',
    meta: '12 orang · Futsal member',
    sport: 'futsal',
    color: '#22c55e',
    Avatar: IconBallFootball,
  },
  {
    id: 2,
    text: 'Padel di PlayField is the best decision we made this year. Courtnya bagus, kacanya bersih, lighting-nya sempurna. Dan intro session sabtu pagi bantu banget buat yang baru mulai.',
    author: '@padel.jakarta.crew',
    meta: 'Komunitas padel · 8 orang',
    sport: 'padel',
    color: '#f97316',
    Avatar: IconBallTennis,
  },
  {
    id: 3,
    text: 'Kami booking lapangan tenis tiap Sunday morning. Fasilitas locker room dan shower-nya yang bikin betah — bisa langsung ke kantor tanpa pulang dulu.',
    author: 'Pak Hendra',
    meta: 'Tennis enthusiast · Pro member',
    sport: 'tenis',
    color: '#a855f7',
    Avatar: IconBallTennis,
  },
  {
    id: 4,
    text: 'Company outing kami gunakan PlayField — mix futsal, badminton, dan padel. Tim jadi lebih solid, dan yang biasanya pendiam jadi paling semangat. Recommended!',
    author: 'Bu Linda',
    meta: 'HR PT Maju Bersama · 40 peserta',
    sport: 'futsal',
    color: '#22c55e',
    Avatar: IconUsers,
  },
  {
    id: 5,
    text: 'Badminton court-nya paling enak di kota ini. Vinyl floor-nya empuk di kaki, nggak pegal walau main 2 jam penuh. Sudah coba beberapa venue lain — PlayField tetap yang terbaik soal kualitas court dan kebersihan.',
    author: 'Pak Doni',
    meta: 'Badminton 4x seminggu · Pro member',
    sport: 'badminton',
    color: '#3b82f6',
    Avatar: IconPingPong,
  },
  {
    id: 6,
    text: 'Awalnya ragu coba padel karena takut susah, tapi ikut intro session Sabtu pagi langsung ketagihan. Coach-nya sabar banget ngajarin dari nol. Sekarang sudah main 3x seminggu sama keluarga.',
    author: 'Ibu Sari',
    meta: 'Elite member · Padel & Tenis',
    sport: 'padel',
    color: '#a855f7',
    Avatar: IconBallTennis,
  },
];

function ReviewCard({ r }: { r: typeof reviews[number] }) {
  return (
    <div
      className="w-72 md:w-80 flex-shrink-0 rounded-2xl p-6 flex flex-col gap-4"
      style={{ background: '#181818', border: '1px solid #2a2a2a' }}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, s) => (
          <IconStar key={s} size={14} fill={r.color} stroke={r.color} strokeWidth={1} />
        ))}
      </div>
      <p className="text-sm leading-relaxed flex-1" style={{ color: '#e5e5e5', fontFamily: 'var(--font-sans)' }}>
        "{r.text}"
      </p>
      <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid #2a2a2a' }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: `rgba(${hexToRgb(r.color)}, 0.15)`, color: r.color }}
        >
          <r.Avatar size={18} stroke={1.5} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-sans)' }}>
            {r.author}
          </p>
          <p className="text-xs" style={{ color: '#707072' }}>{r.meta}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="testimoni"
      ref={ref}
      className="section-padding overflow-hidden"
      style={{ background: '#121212' }}
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-display text-4xl md:text-6xl text-white mb-3"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}
          >
            DARI BERBAGAI
            <br />
            <span style={{ color: '#b3b3b3' }}>KOMUNITAS.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee — full-bleed, outside container-main */}
      <div
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="marquee-track flex gap-4" style={{ width: 'max-content' }}>
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}
