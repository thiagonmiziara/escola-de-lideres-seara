import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check, CreditCard, Smartphone } from 'lucide-react';

export default function InvestmentSection() {
  const benefits = [
    '12 semanas de conteúdo transformador',
    'Mentoria com o Apóstolo Erich Gebhardt',
    'Material de apoio exclusivo',
    'Certificado de conclusão',
    'Acesso à comunidade de líderes',
    'Aula de investimentos com profissional',
  ];

  return (
    <section
      id='investimento'
      className='w-full py-20 md:py-32 bg-card text-foreground relative overflow-hidden scroll-mt-[40vh]'
    >
      {/* Background decoration */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl'></div>
      </div>

      <div className='container px-4 md:px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <div className='inline-block px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-semibold mb-6 backdrop-blur-sm'>
            INVESTIMENTO
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
            Invista no seu{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
              Futuro
            </span>
          </h2>
          <p className='text-xl text-muted-foreground'>
            Um investimento que transforma todas as áreas da sua vida
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='max-w-5xl mx-auto'
        >
          <div className='bg-background/50 backdrop-blur-md rounded-3xl p-4 md:p-8 lg:p-12 border-2 border-border shadow-2xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
              {/* Left side - Benefits */}
              <div className='space-y-4 md:space-y-6'>
                <h3 className='text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-primary'>
                  O que está incluso:
                </h3>
                <div className='space-y-3 md:space-y-4'>
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      className='flex items-start gap-3 md:gap-4'
                    >
                      <div className='w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1'>
                        <Check className='w-3 h-3 md:w-4 md:h-4 text-primary-foreground font-bold' />
                      </div>
                      <span className='text-foreground text-sm md:text-lg'>
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right side - Pricing */}
              <div className='bg-card border-2 border-border rounded-2xl p-6 md:p-8 flex flex-col justify-center shadow-2xl'>
                <div className='text-center space-y-4 md:space-y-6'>
                  <div className='text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest'>
                    Valor Total
                  </div>

                  <div>
                    <div className='text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2'>
                      R$ 250<span className='text-2xl md:text-3xl'>,00</span>
                    </div>
                  </div>

                  {/* Payment options */}
                  <div className='space-y-2 md:space-y-3'>
                    <div className='flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 bg-muted/30 rounded-xl border border-border'>
                      <CreditCard className='w-4 h-4 md:w-5 md:h-5 text-muted-foreground flex-shrink-0' />
                      <span className='text-foreground font-semibold text-xs md:text-base'>
                        6x de R$ 41,67 no cartão
                      </span>
                    </div>

                    <div className='p-3 md:p-4 bg-primary/10 rounded-xl border-2 border-primary/30 shadow-lg'>
                      <div className='flex items-center justify-center gap-2 md:gap-3 mb-2'>
                        <Smartphone className='w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0' />
                        <span className='text-foreground font-bold text-sm md:text-base'>
                          R$ 237,50 no PIX
                        </span>
                      </div>
                      <span className='inline-block px-3 py-1 bg-primary/20 text-primary font-bold text-xs md:text-sm rounded-full border border-primary/40'>
                        Economia de 5%
                      </span>
                    </div>
                  </div>

                  <a
                    href='https://pag.getnet.com.br/zb8xbEjIs/resume'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block'
                  >
                    <Button
                      size='lg'
                      className='w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold text-base md:text-lg h-12 md:h-14 rounded-xl shadow-xl hover:scale-105 transition-all duration-300'
                    >
                      Garantir minha vaga →
                    </Button>
                  </a>

                  <p className='text-muted-foreground text-xs md:text-sm font-medium'>
                    🔥 Vagas limitadas. Garanta já a sua!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
