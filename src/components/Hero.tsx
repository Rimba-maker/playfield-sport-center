import { motion } from 'framer-motion';
import {
  IconBallFootball,
  IconPingPong,
  IconBallTennis,
  IconChevronDown,
} from '@tabler/icons-react';

const WA_NUMBER = '6281234567890';
const WA_BOOK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya ingin book lapangan di PlayField Sport Center.')}`;
const WA_JADWAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, boleh info jadwal slot yang tersedia?')}`;

const sports = [
  { Icon: IconBallFootball, label: 'Futsal', color: '#22c55e', href: '#lapangan' },
  { Icon: IconPingPong, label: 'Badminton', color: '#3b82f6', href: '#lapangan' },
  { Icon: IconBallTennis, label: 'Padel', color: '#f97316', href: '#padel' },
  { Icon: IconBallTennis, label: 'Tenis', color: '#a855f7', href: '#lapangan' },
];

const stats = [
  { value: '12', label: 'Lapangan' },
  { value: '06–23', label: 'Buka Setiap Hari' },
  { value: '24 Jam', label: 'Booking Online' },
  { value: 'Luas', label: 'Area Parkir' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const revealVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 15 },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '64px' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: '#121212' }} />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(249,115,22,0.25) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.03) 60px, rgba(255,255,255,0.03) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.03) 60px, rgba(255,255,255,0.03) 61px)',
        }}
      />

      <div className="container-main relative z-10 flex flex-col items-center text-center py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 w-full"
        >
          {/* Badge */}
          <motion.div variants={revealVariants}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'rgba(249,115,22,0.15)',
                color: '#f97316',
                border: '1px solid rgba(249,115,22,0.3)',
              }}
            >
              🔥 Padel Tumbuh 1.684% di 2025
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={revealVariants}
            className="font-display text-white leading-none"
            style={{
              fontSize: 'clamp(56px, 10vw, 112px)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.02em',
            }}
          >
            MAU MAIN
            <br />
            <span style={{ color: '#f97316' }}>APA</span> HARI INI?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={revealVariants}
            className="max-w-xl text-base md:text-lg"
            style={{
              color: '#b3b3b3',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.6,
            }}
          >
            PlayField hadir dengan 4 jenis lapangan: futsal, badminton, padel,
            dan tenis. Semua dalam satu venue, booking online, langsung main.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={revealVariants}
            className="flex flex-col sm:flex-row items-center gap-3 mt-2"
          >
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: '#ffffff',
                color: '#111111',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.06em',
              }}
            >
              Book Sekarang
            </a>
            <a
              href={WA_JADWAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.3)',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.06em',
              }}
            >
              Lihat Jadwal
            </a>
          </motion.div>

          {/* Sport Pills */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-3 mt-2"
          >
            {sports.map((sport) => (
              <motion.a
                key={sport.label}
                href={sport.href}
                variants={pillVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: `rgba(${hexToRgb(sport.color)}, 0.12)`,
                  color: sport.color,
                  border: `1px solid rgba(${hexToRgb(sport.color)}, 0.3)`,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <sport.Icon size={16} stroke={2} />
                {sport.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={revealVariants}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-6 pt-6 w-full max-w-2xl"
            style={{ borderTop: '1px solid #2a2a2a' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-0.5">
                <span
                  className="font-display text-2xl"
                  style={{ color: '#fff', fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: '#707072' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <IconChevronDown size={20} color="#707072" />
      </motion.div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}
