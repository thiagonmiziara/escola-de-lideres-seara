# Escola de Líderes 2026

Uma landing page moderna e responsiva para a Escola de Líderes 2026, desenvolvida com as últimas tecnologias web.

## 📋 Sobre o Projeto

A Escola de Líderes é um programa de transformação pessoal e desenvolvimento de liderança com duração de 12 semanas. Esta landing page apresenta:

- **Propósito**: Transformação através de mentoria com o Apóstolo Erich Gebhardt
- **Duração**: 21/03 a 13/06 de 2026
- **Formato**: Aulas aos sábados, das 14h às 17h
- **Investimento**: R$ 250,00 (com opções de pagamento em 6x ou PIX com desconto de 5%)

## 🛠️ Tecnologias

- **React** 18.3.1 - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** 5.8.3 - Tipagem estática para JavaScript
- **Vite** 5.4.21 - Build tool rápido e moderno
- **Tailwind CSS** 3.4.17 - Framework CSS utilitário
- **Framer Motion** 12.33.0 - Biblioteca de animações
- **Lucide React** 0.462.0 - Ícones modernos
- **shadcn/ui** - Componentes React reutilizáveis
- **SWC** - Compilador Rust rápido

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                          # Componentes shadcn/ui (49 componentes)
│   └── landing/
│       ├── HeroSection.tsx           # Seção inicial com CTA principal
│       ├── AudienceSection.tsx       # Público alvo (4 perfis)
│       ├── MentorSection.tsx         # Apresentação do mentor
│       ├── PurposeSection.tsx        # 4 pilares e missão
│       ├── ProgramSection.tsx        # 12 módulos de aprendizado
│       ├── LogisticsSection.tsx      # Informações de data, horário e local
│       ├── InvestmentSection.tsx     # Investimento e opções de pagamento
│       └── Footer.tsx                # Rodapé com contatos
├── assets/                           # Imagens (mentor1-3.jpeg)
├── App.tsx                           # Componente principal
├── main.tsx                          # Ponto de entrada
├── index.css                         # Variáveis CSS e estilos globais
└── App.css                           # Estilos da aplicação

public/
└── logo.png                          # Logo do projeto (favicon + header)
```

## 🎨 Design System

### Paleta de Cores

- **Background**: #1A1A1A (Cinza muito escuro)
- **Foreground**: #FFFFFF (Branco)
- **Primary**: #9AEC4C (Verde claro)
- **Accent**: #6BBC50 (Verde médio)
- **Card**: #454545 (Cinza escuro)
- **Muted**: #4D4D4D (Cinza neutro)

### Componentes CSS

As cores estão definidas como variáveis CSS em `src/index.css` e podem ser facilmente customizadas.

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+
- PNPM (recomendado) ou NPM

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Gere o build otimizado
pnpm build

# Visualize o build localmente
pnpm preview
```

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:

- **Mobile** (< 640px)
- **Tablet** (640px - 1024px)
- **Desktop** (> 1024px)

## ✨ Funcionalidades

- ✅ Landing page de alta performance
- ✅ Animações suaves com Framer Motion
- ✅ Design moderno com tema escuro
- ✅ Scroll suave até seção de investimento
- ✅ Integração com pagamento (Getnet)
- ✅ Links de contato (WhatsApp e Instagram)
- ✅ Totalmente responsivo
- ✅ Otimizado para SEO

## 🔗 Links Importantes

- **Pagamento**: https://pag.getnet.com.br/zb8xbEjIs/resume
- **Instagram**: https://www.instagram.com/ap.erichgebhardt/
- **Telefone**: 34 99115-2805

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview

# Lint
pnpm lint

# Type check
pnpm type-check
```

## 🎯 Próximas Melhorias

- [ ] Adicionar formulário de cadastro
- [ ] Integrar sistema de emails
- [ ] Dashboard administrativo
- [ ] Sistema de pagamento recorrente
- [ ] Área de alunos com acesso ao conteúdo
- [ ] Blog com artigos sobre liderança

## 📄 Licença

Este projeto é privado e propriedade da Escola de Líderes.

## 👤 Contato

Para dúvidas sobre o projeto, entre em contato através do:

- 📞 Telefone: 34 99115-2805
- 📱 Instagram: @searadedeus
- 📧 Email: (a adicionar)

---

Desenvolvido com ❤️ para transformar vidas através da liderança
