import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconBallFootball,
  IconPingPong,
  IconBallTennis,
  IconCheck,
  IconClock,
} from '@tabler/icons-react';

type SportIcon = typeof IconBallFootball;

const WA_NUMBER = '6281234567890';

const sports: Array<{
  id: string; Icon: SportIcon; label: string; color: string; colorDark: string;
  tagline: string; image: string; specs: string[]; bestFor: string;
  capacity: string; hours: string; extra: string | null; ctaLabel: string; waMsg: string;
}> = [
  {
    id: 'futsal',
    Icon: IconBallFootball,
    label: 'Futsal',
    color: '#22c55e',
    colorDark: 'rgba(34,197,94,0.08)',
    tagline: '5 Lawan 5. Arena Kecil, Energi Besar.',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=900&q=80&auto=format&fit=crop',
    specs: [
      '3 lapangan futsal indoor',
      'Ukuran standar: 25m × 42m',
      'Rumput sintetis Mondo Italia (FIFA quality)',
      'Pencahayaan LED 1.500 lux',
      'Gawang standar + jaring',
    ],
    bestFor: 'Tim kantor, komunitas futsal, turnamen mini, latihan rutin',
    capacity: '10 pemain + cadangan',
    hours: '06.00 – 23.00 setiap hari',
    extra: null,
    ctaLabel: 'Book Lapangan Futsal',
    waMsg: 'Halo, saya ingin book lapangan Futsal di PlayField Sport Center.',
  },
  {
    id: 'badminton',
    Icon: IconPingPong,
    label: 'Badminton',
    color: '#3b82f6',
    colorDark: 'rgba(59,130,246,0.08)',
    tagline: 'Cepat. Presisi. Shuttlecock-nya Tidak Gampang Jebol.',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&q=80&auto=format&fit=crop',
    specs: [
      '6 lapangan badminton indoor',
      'Vinyl flooring Yonex/Li-Ning standard',
      'Net standar BWF',
      'Lampu LED 1.000 lux, zero shadow',
      'AC sentral, suhu 22–24°C',
    ],
    bestFor: 'Main casual, latihan rutin, sparring, family badminton',
    capacity: '4 pemain (doubles) / 2 pemain (singles)',
    hours: '06.00 – 23.00 setiap hari',
    extra: 'Shuttlecock tersedia di counter — Rp 50k/tube isi 12',
    ctaLabel: 'Book Lapangan Badminton',
    waMsg: 'Halo, saya ingin book lapangan Badminton di PlayField Sport Center.',
  },
  {
    id: 'padel',
    Icon: IconBallTennis,
    label: 'Padel',
    color: '#f97316',
    colorDark: 'rgba(249,115,22,0.08)',
    tagline: 'Olahraga Paling Hype 2025. Kami Sudah Siap Sejak Hari Pertama.',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=900&q=80&auto=format&fit=crop',
    specs: [
      '2 lapangan padel glass-enclosed',
      'Ukuran standar: 10m × 20m',
      'Rumput sintetis padel (FIP approved)',
      'Dinding kaca tempered 10mm',
      'Pencahayaan LED uniform 500 lux',
    ],
    bestFor: 'Pemula yang baru coba, komunitas padel, latihan doubles',
    capacity: '4 pemain (always doubles)',
    hours: '06.00 – 23.00 setiap hari',
    extra: 'Intro session gratis tiap Sabtu pagi! Raket & bola tersedia pinjam.',
    ctaLabel: 'Book Lapangan Padel',
    waMsg: 'Halo, saya ingin book lapangan Padel di PlayField Sport Center.',
  },
  {
    id: 'tenis',
    Icon: IconBallTennis,
    label: 'Tenis',
    color: '#a855f7',
    colorDark: 'rgba(168,85,247,0.08)',
    tagline: 'Klasik. Dan Tidak Pernah Tidak Keren.',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=900&q=80&auto=format&fit=crop',
    specs: [
      '1 lapangan tenis hard court (beratap)',
      'Ukuran standar ITF: 23.77m × 10.97m',
      'Surface: Plexi-cushion hard court',
      'Net standar ITF',
      'Lampu LED untuk malam hari',
    ],
    bestFor: 'Latihan rutin, sparring, family tennis, corporate outing',
    capacity: '2–4 pemain (singles/doubles)',
    hours: '06.00 – 22.00 (outdoor, cuaca dependent)',
    extra: 'Ball machine tersedia — Rp 100k/jam (booking terpisah)',
    ctaLabel: 'Book Lapangan Tenis',
    waMsg: 'Halo, saya ingin book lapangan Tenis di PlayField Sport Center.',
  },
];

const contentVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

export default function SportSelector() {
  const [active, setActive] = useState(0);
  const sport = sports[active]!;

  return (
    <section
      id="lapangan"
      className="section-padding"
      style={{ background: '#121212' }}
    >
      <div className="container-main">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="font-display text-4xl md:text-6xl text-white mb-3"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}
          >
            PILIH OLAHRAGA,
            <br />
            <span style={{ color: sport.color }}>LANGSUNG CEK LAPANGAN.</span>
          </h2>
          <p style={{ color: '#b3b3b3', fontFamily: 'var(--font-sans)' }}>
            4 cabang olahraga, satu venue, booking online 24 jam.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-2 md:gap-3 mb-10 justify-center flex-wrap"
          role="tablist"
        >
          {sports.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className="relative flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: 'var(--font-sans)',
                background: i === active ? s.color : '#181818',
                color: i === active ? (s.id === 'futsal' ? '#111' : '#fff') : '#b3b3b3',
                border: `1px solid ${i === active ? s.color : '#2a2a2a'}`,
              }}
            >
              {i === active && (
                <motion.span
                  layoutId="tab-active-indicator"
                  className="absolute inset-0 rounded-full"
                  style={{ background: s.color, zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <s.Icon size={16} stroke={2} />
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: '#181818', border: '1px solid #2a2a2a' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={sport.id}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid md:grid-cols-2 gap-0"
            >
              {/* Image side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={sport.image}
                  alt={`Lapangan ${sport.label} PlayField`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, transparent 60%)`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      background: sport.color,
                      color: sport.id === 'futsal' ? '#111' : '#fff',
                    }}
                  >
                    <sport.Icon size={14} stroke={2} /> {sport.label}
                  </span>
                </div>
              </div>

              {/* Info side */}
              <div className="p-8 md:p-10 flex flex-col gap-6">
                {/* Tagline */}
                <div>
                  <p
                    className="text-base italic mb-4"
                    style={{ color: sport.color, fontFamily: 'var(--font-sans)' }}
                  >
                    "{sport.tagline}"
                  </p>
                </div>

                {/* Specs */}
                <div>
                  <h3
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: '#707072' }}
                  >
                    Spesifikasi Lapangan
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {sport.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-sm" style={{ color: '#b3b3b3' }}>
                        <IconCheck size={14} stroke={2.5} style={{ color: sport.color, marginTop: '2px', flexShrink: 0 }} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-xl p-4"
                    style={{ background: sport.colorDark }}
                  >
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#707072' }}>Best For</p>
                    <p className="text-sm text-white" style={{ fontFamily: 'var(--font-sans)' }}>{sport.bestFor}</p>
                  </div>
                  <div
                    className="rounded-xl p-4"
                    style={{ background: sport.colorDark }}
                  >
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#707072' }}>Kapasitas</p>
                    <p className="text-sm text-white" style={{ fontFamily: 'var(--font-sans)' }}>{sport.capacity}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2">
                  <IconClock size={16} stroke={2} style={{ color: sport.color }} />
                  <span className="text-sm" style={{ color: '#b3b3b3' }}>{sport.hours}</span>
                </div>

                {/* Extra info */}
                {sport.extra && (
                  <p
                    className="text-xs px-4 py-3 rounded-xl"
                    style={{
                      background: sport.colorDark,
                      color: sport.color,
                      border: `1px solid rgba(${sport.color}, 0.2)`,
                    }}
                  >
                    💡 {sport.extra}
                  </p>
                )}

                {/* CTA */}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(sport.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-200 hover:scale-105 active:scale-95 mt-auto"
                  style={{
                    background: sport.color,
                    color: sport.id === 'futsal' ? '#111' : '#fff',
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {sport.ctaLabel} →
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
