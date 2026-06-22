import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  IconBallFootball,
  IconPingPong,
  IconBallTennis,
  type Icon as TablerIcon,
} from '@tabler/icons-react';

const WA_NUMBER = '6281234567890';

const events: Array<{
  id: string; Icon: TablerIcon; title: string; schedule: string;
  format: string; color: string; details: string[]; waMsg: string;
}> = [
  {
    id: 'futsal-cup',
    Icon: IconBallFootball,
    title: 'Futsal Cup Bulanan',
    schedule: 'Setiap akhir bulan',
    format: '8 tim, format knock-out',
    color: '#22c55e',
    details: [
      'Hadiah: voucher booking + trophy',
      'Daftar tim min. H-14',
      'Biaya: Rp 350k / tim',
    ],
    waMsg: 'Halo, saya ingin daftarkan tim untuk Futsal Cup Bulanan.',
  },
  {
    id: 'badminton-open',
    Icon: IconPingPong,
    title: 'Badminton Open',
    schedule: 'Per 2 bulan',
    format: 'Grup + knock-out',
    color: '#3b82f6',
    details: [
      'Kategori: Pria, Wanita, Campuran, Veteran (40+)',
      'Hadiah: set raket + voucher',
      'Biaya: Rp 100k / pasang',
    ],
    waMsg: 'Halo, saya ingin daftar Badminton Open.',
  },
  {
    id: 'padel-mixer',
    Icon: IconBallTennis,
    title: 'Padel Mixer Night',
    schedule: 'Tiap Jumat malam',
    format: 'Random mix partner',
    color: '#f97316',
    details: [
      'Format social: cari teman main baru',
      'Biaya: Rp 100k/orang (2 jam + minuman)',
      'Walk-in welcome, spot terbatas',
    ],
    waMsg: 'Halo, saya mau info/daftar Padel Mixer Night.',
  },
  {
    id: 'tennis-social',
    Icon: IconBallTennis,
    title: 'Monthly Tennis Social',
    schedule: 'Minggu ke-3, jam 07.00',
    format: 'Round-robin santai',
    color: '#a855f7',
    details: [
      'Semua level welcome',
      'Biaya: Rp 75k / orang',
      'Komunitas tennis yang supportif',
    ],
    waMsg: 'Halo, saya ingin daftar Monthly Tennis Social.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function TournamentEvents() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="tournament"
      ref={ref}
      className="section-padding"
      style={{ background: '#0d0d0d' }}
    >
      <div className="container-main">
        {/* Heading */}
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
            LEBIH DARI SEKADAR
            <br />
            <span style={{ color: '#f97316' }}>BOOKING LAPANGAN.</span>
          </h2>
          <p style={{ color: '#b3b3b3', fontFamily: 'var(--font-sans)' }}>
            Turnamen rutin & event komunitas — buat yang mau kompetisi atau sekadar cari lawan baru.
          </p>
        </motion.div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {events.map((e, i) => (
            <motion.div
              key={e.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: '#181818',
                border: '1px solid #2a2a2a',
              }}
            >
              {/* Header strip */}
              <div
                className="px-5 pt-5 pb-4"
                style={{ borderBottom: '1px solid #2a2a2a' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <motion.span
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ delay: i * 0.3 + 1, duration: 0.5 }}
                    style={{ color: e.color }}
                  >
                    <e.Icon size={28} stroke={1.5} />
                  </motion.span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: `rgba(${hexToRgb(e.color)}, 0.15)`, color: e.color }}
                  >
                    {e.schedule}
                  </span>
                </div>
                <h3
                  className="font-bold text-white text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {e.title}
                </h3>
                <p className="text-xs mt-1" style={{ color: e.color }}>
                  {e.format}
                </p>
              </div>

              {/* Details */}
              <div className="px-5 py-4 flex flex-col gap-2 flex-1">
                {e.details.map((d) => (
                  <p key={d} className="text-xs" style={{ color: '#b3b3b3' }}>
                    • {d}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(e.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-105"
                  style={{
                    background: 'transparent',
                    color: e.color,
                    border: `1px solid ${e.color}`,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Daftar Event →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom tournament CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="rounded-2xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(168,85,247,0.1))',
            border: '1px solid rgba(249,115,22,0.2)',
          }}
        >
          <h3
            className="font-display text-2xl md:text-3xl text-white mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            MINTA TURNAMEN CUSTOM?
          </h3>
          <p className="text-sm mb-6" style={{ color: '#b3b3b3' }}>
            Kami bisa handle turnamen internal komunitas atau kantor kamu dari A sampai Z.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya ingin request custom tournament di PlayField.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:scale-105"
            style={{
              background: '#ffffff',
              color: '#111111',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.05em',
            }}
          >
            Hubungi Kami untuk Custom Tournament
          </a>
        </motion.div>
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
