import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

export default function HeroSection() {
  const handleScrollToInvestment = () => {
    const element = document.getElementById('investimento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <section className='relative w-full min-h-screen bg-background flex items-center justify-center overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000'></div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgMTJ2Mmgydi0yaC0yem0wLTh2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wLTEydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className='relative z-10 container px-4 md:px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-8'
        >
          {/* Logo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-block mb-8'
          ></motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='inline-block'
          >
            <div className='px-6 py-3 bg-primary/20 border-2 border-primary/50 rounded-full text-primary text-sm font-semibold backdrop-blur-sm'>
              ✓ Escola de Líderes 2026
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight'
          >
            Lidere a{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
              Sua Vida
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto font-light'
          >
            Uma jornada de transformação, posicionamento e intencionalidade.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='pt-8'
          >
            <Button
              onClick={handleScrollToInvestment}
              size='lg'
              className='bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold text-lg h-14 px-12 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 cursor-pointer'
            >
              Quero me inscrever →
            </Button>
          </motion.div>

          {/* Date and schedule info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='flex justify-center gap-6 pt-12 text-sm flex-wrap'
          >
            <div className='flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full text-card-foreground backdrop-blur-sm'>
              <Calendar className='w-4 h-4 text-primary' />
              <span>21/03 a 13/06 de 2026</span>
            </div>
            <div className='flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full text-card-foreground backdrop-blur-sm'>
              <Clock className='w-4 h-4 text-primary' />
              <span>Sábados • 14h às 17h</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'
      >
        <div className='w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1.5 h-1.5 bg-primary rounded-full'
          />
        </div>
      </motion.div>
    </section>
  );
}
