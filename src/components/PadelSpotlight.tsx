import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const WA_NUMBER = '6281234567890';
const WA_INTRO = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya mau daftar intro session padel gratis hari Sabtu.')}`;
const WA_COMMUNITY = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya punya komunitas padel dan ingin tahu info kerjasama.')}`;

const reasons = [
  {
    icon: '🤝',
    title: 'Selalu Main Berdua (Doubles)',
    body: 'Padel selalu dimainkan 4 orang — tidak ada yang main sendiri. Ini yang bikin padel jadi olahraga paling sosial sekarang.',
  },
  {
    icon: '🔰',
    title: 'Mudah Dipelajari, Susah Dikuasai',
    body: 'Berbeda dari tenis yang tekniknya sulit dari awal, padel bisa dinikmati pemula dalam hitungan menit.',
  },
  {
    icon: '🏟️',
    title: 'Court Kecil = Banyak Rally',
    body: 'Court lebih kecil dari tenis — bola lebih sering balik, rally lebih panjang, olahraga lebih intens per menit.',
  },
  {
    icon: '📱',
    title: 'Instagrammable',
    body: 'Lapangan kaca + outfit kece + action shot = konten gold. Padel jadi olahraga sosial media favorit.',
  },
];

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => `${Math.round(v).toLocaleString('id')}${suffix}`);

  useEffect(() => {
    if (isInView) motionVal.set(to);
  }, [isInView, motionVal, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PadelSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section
      id="padel"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* Accent background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #f97316, transparent)' }}
      />

      <div className="container-main relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: 'rgba(249,115,22,0.15)',
              color: '#f97316',
              border: '1px solid rgba(249,115,22,0.3)',
            }}
          >
            🔥 Trending Sport 2025
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-4"
        >
          <h2
            className="font-display text-4xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}
          >
            PADEL. BARU DENGAR?
            <br />
            <span style={{ color: '#f97316' }}>SUDAH WAKTUNYA COBA.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg" style={{ color: '#b3b3b3' }}>
            Olahraga dengan pertumbuhan tercepat di Indonesia 2025. Naik{' '}
            <strong style={{ color: '#f97316' }}>
              <Counter to={1684} suffix="%" />
            </strong>{' '}
            dalam setahun. Bukan sekadar tren — ini olahraga yang akan bertahan lama.
          </p>
        </motion.div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 mt-12">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: '#181818',
                border: '1px solid #2a2a2a',
              }}
            >
              <span className="text-3xl">{r.icon}</span>
              <h3
                className="font-bold text-base text-white"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#b3b3b3' }}>
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom two-col */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Intro Session */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))',
              border: '1px solid rgba(249,115,22,0.3)',
            }}
          >
            <div
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold animate-pulse"
              style={{ background: '#f97316', color: '#fff' }}
            >
              GRATIS
            </div>
            <h3
              className="font-display text-2xl text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              INTRO SESSION
            </h3>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                '📅 Tiap Sabtu jam 08.00–09.30',
                '👨‍🏫 Dipandu coach padel bersertifikat',
                '🎾 Include pinjam raket + bola',
                '👥 Max 8 orang per sesi',
              ].map((item) => (
                <li key={item} className="text-sm" style={{ color: '#b3b3b3' }}>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WA_INTRO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
              style={{ background: '#f97316', color: '#fff', fontFamily: 'var(--font-sans)' }}
            >
              Daftar via WA — Slot Terbatas
            </a>
          </motion.div>

          {/* Community Partnership */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl p-8"
            style={{ background: '#181818', border: '1px solid #2a2a2a' }}
          >
            <h3
              className="font-display text-2xl text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              PUNYA KOMUNITAS PADEL?
            </h3>
            <p className="text-sm mb-6" style={{ color: '#b3b3b3' }}>
              Partner dengan kami dan dapatkan keuntungan eksklusif untuk komunitas kamu.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                { icon: '💰', text: 'Booking regular dengan harga khusus' },
                { icon: '📅', text: 'Slot prioritas akhir pekan' },
                { icon: '🏆', text: 'Bisa host turnamen internal' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm" style={{ color: '#b3b3b3' }}>
                  <span>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <a
              href={WA_COMMUNITY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
              style={{
                background: 'transparent',
                color: '#f97316',
                border: '1px solid #f97316',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Hubungi Kami untuk Detail
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
