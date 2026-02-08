import { motion } from 'framer-motion';
import { Target, Brain, Users, TrendingUp, Lightbulb, Shield, Heart, Calendar, MessageCircle, Handshake, Award, Zap } from 'lucide-react';

export default function ProgramSection() {
  const topics = [
    {
      icon: Target,
      title: 'Descoberta de Propósito',
      description: 'Identifique sua missão única e como Deus te criou para fazer diferença.'
    },
    {
      icon: Brain,
      title: 'Mentalidade de Líder',
      description: 'Desenvolva pensamento estratégico e capacidade de tomar decisões sábias.'
    },
    {
      icon: Users,
      title: 'Liderança de Pessoas',
      description: 'Aprenda a inspirar, motivar e desenvolver outros ao seu redor.'
    },
    {
      icon: TrendingUp,
      title: 'Gestão e Resultados',
      description: 'Técnicas práticas para alcançar metas e gerenciar projetos efetivamente.'
    },
    {
      icon: Lightbulb,
      title: 'Inteligência Emocional',
      description: 'Domine suas emoções e desenvolva empatia e autoconhecimento profundo.'
    },
    {
      icon: Shield,
      title: 'Caráter e Integridade',
      description: 'Construa uma base sólida de valores e princípios éticos inabaláveis.'
    },
    {
      icon: Heart,
      title: 'Vida Relacional',
      description: 'Aprimore seus relacionamentos pessoais, familiares e profissionais.'
    },
    {
      icon: Calendar,
      title: 'Gestão de Tempo',
      description: 'Aprenda a priorizar o que realmente importa e eliminar desperdiçadores.'
    },
    {
      icon: MessageCircle,
      title: 'Comunicação Eficaz',
      description: 'Desenvolva habilidades de oratória, persuasão e comunicação assertiva.'
    },
    {
      icon: Handshake,
      title: 'Trabalho em Equipe',
      description: 'Construa times de alta performance e cultive ambiente colaborativo.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Cultive mentalidade de melhoria contínua e busca pela excelência.'
    },
    {
      icon: Zap,
      title: 'Ação e Implementação',
      description: 'Transforme conhecimento em resultados práticos e mensuráveis.'
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
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
            PROGRAMA COMPLETO
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            O Que Você Vai <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Aprender</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um programa completo e estruturado que aborda todas as dimensões da liderança eficaz e transformadora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-xl hover:scale-105 hover:border-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {topic.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card border border-border rounded-3xl p-12 md:p-16 text-center text-foreground"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Metodologia Testada e Aprovada
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Nossa metodologia combina <strong>ensinamento bíblico</strong>, <strong>ferramentas práticas</strong> e <strong>aplicação real</strong>. 
            Cada módulo é cuidadosamente estruturado para garantir transformação duradoura.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-lg font-semibold">Módulos Completos</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">24h+</div>
              <div className="text-lg font-semibold">de Conteúdo</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg font-semibold">Aplicável</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
