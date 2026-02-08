import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function LogisticsSection() {
  const logistics = [
    {
      icon: Calendar,
      title: 'PERÍODO',
      value: '21/03 a 13/06 de 2026',
      subtitle: '12 semanas de transformação',
      color: 'from-primary to-accent',
    },
    {
      icon: Clock,
      title: 'HORÁRIO',
      value: 'Sábados, 14h às 17h',
      subtitle: '3 horas por encontro',
      color: 'from-accent to-primary',
    },
    {
      icon: MapPin,
      title: 'LOCAL',
      value: 'Igreja Seara de Deus',
      subtitle: 'Av. Mato Grosso, 694',
      color: 'from-primary to-accent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className='w-full py-20 md:py-32 bg-background'>
      <div className='container px-4 md:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <div className='inline-block px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-semibold mb-6'>
            INFORMAÇÕES PRÁTICAS
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6'>
            Tudo que você precisa{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
              saber
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'
        >
          {logistics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group text-center p-10 bg-card border-2 border-border rounded-3xl shadow-lg hover:shadow-2xl hover:border-primary transition-all duration-300`}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className='w-10 h-10 text-primary-foreground' />
                </div>
                <h3 className='text-sm font-bold text-muted-foreground mb-3 tracking-wider'>
                  {item.title}
                </h3>
                <p className='text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight'>
                  {item.value}
                </p>
                <p className='text-sm text-muted-foreground'>{item.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
