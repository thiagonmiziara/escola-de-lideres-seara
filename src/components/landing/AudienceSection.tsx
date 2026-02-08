import { motion } from 'framer-motion';
import { Target, Rocket, Zap, Sparkles } from 'lucide-react';

export default function AudienceSection() {
  const audiences = [
    {
      icon: Target,
      title: 'Busca mudança real',
      description:
        'Pessoas que desejam transformar sua vida de forma profunda e duradoura.',
      color: 'from-primary to-accent',
    },
    {
      icon: Rocket,
      title: 'Empreendedores',
      description:
        'Atuais e futuros empreendedores que querem desenvolver uma mentalidade de sucesso.',
      color: 'from-accent to-primary',
    },
    {
      icon: Zap,
      title: 'Quebrar crenças limitantes',
      description:
        'Quem quer identificar e superar padrões que impedem o crescimento.',
      color: 'from-primary to-accent',
    },
    {
      icon: Sparkles,
      title: 'Alinhar propósito e vida',
      description:
        'Pessoas que buscam integrar fé, propósito e objetivos práticos.',
      color: 'from-accent to-primary',
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
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className='text-center mb-16'
        >
          <motion.div
            variants={itemVariants}
            className='inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6'
          >
            PÚBLICO-ALVO
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6'
          >
            Para quem é a{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
              Escola?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-xl text-muted-foreground max-w-3xl mx-auto'
          >
            Se você se identifica com algum desses perfis, a Escola de Líderes
            foi feita para você.
          </motion.p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='group p-8 bg-card border-2 border-border rounded-2xl hover:border-primary hover:shadow-2xl transition-all duration-300'
              >
                <div
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className='w-8 h-8 text-primary-foreground' />
                </div>
                <h3 className='text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors'>
                  {item.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
