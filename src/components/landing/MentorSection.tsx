import { motion } from 'framer-motion';
import mentor1 from '@/assets/mentor1.jpeg';
import mentor2 from '@/assets/mentor2.jpeg';
import mentor3 from '@/assets/mentor3.jpeg';

export default function MentorSection() {
  return (
    <section className='w-full py-20 md:py-32 bg-card text-white relative overflow-hidden'>
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl'></div>
      </div>

      <div className='container px-4 md:px-6 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-semibold backdrop-blur-sm'>
              SEU MENTOR
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
              Apóstolo Erich{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                Gebhardt
              </span>
            </h2>

            <div className='space-y-4 text-lg text-muted-foreground leading-relaxed'>
              <p>
                Com uma trajetória marcada pela transformação de vidas, o
                Apóstolo Erich Gebhardt é o fundador e líder espiritual da
                Igreja Seara de Deus. Sua visão é capacitar pessoas a viveram de
                forma extraordinária, unindo princípios bíblicos com ferramentas
                práticas de desenvolvimento pessoal.
              </p>

              <p>
                Ao longo dos anos, já impactou milhares de pessoas através de
                suas mentorias, pregações e ensinamentos sobre liderança,
                propósito e intencionalidade.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='grid grid-cols-2 gap-4'
          >
            <div className='col-span-2 aspect-video bg-gradient-to-br from-muted to-card rounded-2xl shadow-2xl overflow-hidden'>
              <img
                src={mentor2}
                alt='Apóstolo Erich Gebhardt'
                className='w-full h-full object-cover'
              />
            </div>

            <div className='aspect-square bg-gradient-to-br from-card to-muted rounded-2xl shadow-xl overflow-hidden'>
              <img
                src={mentor3}
                alt='Mentoria Escola de Líderes'
                className='w-full h-full object-cover'
              />
            </div>

            <div className='aspect-square bg-gradient-to-br from-muted to-card rounded-2xl shadow-xl overflow-hidden'>
              <img
                src={mentor1}
                alt='Liderança e Desenvolvimento'
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
