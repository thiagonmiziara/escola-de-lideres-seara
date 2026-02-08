import { motion } from 'framer-motion';
import { Heart, BookOpen, Users, Sparkles } from 'lucide-react';

export default function PurposeSection() {
  const purposes = [
    {
      icon: Heart,
      title: 'Viver com Propósito',
      description: 'Descubra o chamado de Deus para sua vida e aprenda a viver com intencionalidade em cada área.'
    },
    {
      icon: BookOpen,
      title: 'Fundamento Bíblico',
      description: 'Ensinamentos sólidos baseados na Palavra de Deus para aplicação prática no dia a dia.'
    },
    {
      icon: Users,
      title: 'Comunidade Forte',
      description: 'Conecte-se com líderes que compartilham os mesmos valores e objetivos de crescimento.'
    },
    {
      icon: Sparkles,
      title: 'Transformação Real',
      description: 'Experimente mudanças duradouras através de princípios e ferramentas comprovadas.'
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-semibold mb-6">
            NOSSO PROPÓSITO
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Por Que Participar da<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Escola de Líderes?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Escola de Líderes não é apenas mais um curso. É um <strong>movimento de transformação</strong> que 
            capacita pessoas comuns a viverem vidas extraordinárias, alinhadas ao propósito de Deus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {purposes.map((purpose, index) => {
            const Icon = purpose.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {purpose.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {purpose.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-card rounded-3xl p-12 md:p-16 text-center text-foreground border border-border"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
            "Portanto, quer vocês comam, bebam ou façam qualquer outra coisa, façam tudo para a glória de Deus."
          </blockquote>
          <cite className="text-primary text-lg font-semibold">
            — 1 Coríntios 10:31
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
