import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fasilitas = [
  {
    icon: '🚿',
    title: 'Locker Room & Shower',
    body: '20 locker digital untuk pria & wanita. Shower panas tersedia (Rp 10k/akses termasuk handuk).',
  },
  {
    icon: '🍽️',
    title: 'Kantin & Sport Bar',
    body: 'Nasi goreng, mie, sandwich, isotonic, jus, kopi. Harga affordable, buka selama venue buka.',
  },
  {
    icon: '🏪',
    title: 'Sport Shop',
    body: 'Shuttlecock, bola padel, grip tape, kaos kaki, dan perlengkapan olahraga. Brand: Yonex, Victor, Head, Wilson.',
  },
  {
    icon: '🅿️',
    title: 'Parkir Luas & Aman',
    body: '60 mobil + 100 motor. CCTV 24 jam. Gratis untuk member, Rp 5k/jam untuk non-member.',
  },
  {
    icon: '📶',
    title: 'WiFi di Area Lounge',
    body: 'Speed 50Mbps. Untuk yang menunggu giliran atau rehat setelah main.',
  },
  {
    icon: '💪',
    title: 'Mini Warm-Up Area',
    body: 'Stretching area dengan matras, resistance band, dan foam roller — gratis untuk semua pengunjung.',
  },
  {
    icon: '🧒',
    title: 'Kids Play Corner',
    body: 'Area bermain anak di dekat kantin. Si kecil tidak bosan menunggu kamu selesai main.',
  },
  {
    icon: '📷',
    title: 'Action Cam Rental',
    body: 'Sewa GoPro untuk rekam momen main. Rp 75k/2 jam termasuk mounting untuk net tiang.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function FasilitasUmum() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="fasilitas"
      ref={ref}
      className="section-padding"
      style={{ background: '#121212' }}
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
            SEMUA ADA.
            <br />
            <span style={{ color: '#b3b3b3' }}>TIDAK PERLU BINGUNG.</span>
          </h2>
          <p style={{ color: '#707072', fontFamily: 'var(--font-sans)' }}>
            Dari locker sampai kantin, dari WiFi sampai kids corner — semuanya ada.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {fasilitas.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl p-4 md:p-6 flex flex-col gap-2 md:gap-3 group cursor-default"
              style={{
                background: '#181818',
                border: '1px solid #2a2a2a',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#3a3a3a';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a2a';
              }}
            >
              <motion.span
                className="text-2xl md:text-3xl"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {f.icon}
              </motion.span>
              <h3
                className="font-bold text-sm text-white"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#b3b3b3' }}>
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
