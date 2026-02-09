import { Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='w-full py-16 md:py-20 bg-card text-foreground'>
      <div className='container px-4 md:px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Main footer content */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
            {/* Logo and description */}
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <img
                  src='/logo.png'
                  alt='Escola de Líderes'
                  className='w-12 h-12 object-contain'
                />
                <div>
                  <h3 className='text-xl font-bold text-primary'>
                    Escola de Líderes
                  </h3>
                  <p className='text-muted-foreground text-sm'>2026</p>
                </div>
              </div>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Lidere a sua vida com propósito e intencionalidade. Uma jornada
                de transformação para líderes extraordinários.
              </p>
            </div>

            {/* Contact info */}
            <div>
              <h4 className='font-bold text-primary mb-4 text-lg'>Contato</h4>
              <div className='space-y-3 text-muted-foreground'>
                <div className='flex items-start gap-3'>
                  <MapPin className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                  <div>
                    <p className='font-semibold text-foreground'>
                      Igreja Seara de Deus
                    </p>
                    <p className='text-sm'>Av. Mato Grosso, 694</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-primary flex-shrink-0' />
                  <a
                    href='tel:+5534991152805'
                    className='text-sm hover:text-primary transition-colors'
                  >
                    (34) 99115-2805
                  </a>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div>
              <h4 className='font-bold text-primary mb-4 text-lg'>
                Redes Sociais
              </h4>
              <p className='text-muted-foreground text-sm mb-4'>
                Acompanhe nossas novidades e conteúdos exclusivos
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://www.instagram.com/ap.erichgebhardt/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 hover:bg-primary/20 border border-border hover:border-primary rounded-full flex items-center justify-center transition-all duration-300 group'
                >
                  <Instagram className='w-5 h-5 text-primary group-hover:scale-110 transition-transform' />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='border-t border-border pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground'>
              <p>© 2026 Escola de Líderes. Todos os direitos reservados.</p>
              <p className='flex items-center gap-2'>
                Feito com <span className='text-primary'>❤</span> por Igreja
                Seara de Deus
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
