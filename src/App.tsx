import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5521975322452?text=Ol%C3%A1%2C%20Marcelo.%20Vi%20a%20p%C3%A1gina%20da%20mentoria%20e%20queria%20conversar%20sobre%20o%20meu%20neg%C3%B3cio.';
const marceloPhoto = '/images/WhatsApp_Image_2026-09-07_at_17.10.44.jpeg';
const whatsappLabel = 'QUERO CONVERSAR NO WHATSAPP';

const navItems = [
  { label: 'A mentoria', href: '#mentoria' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre Marcelo', href: '#marcelo' },
  { label: 'Dúvidas', href: '#faq' },
];

const steps = [
  ['01', 'CONVERSA INICIAL', 'Entendemos seu negócio, seu contexto e o momento atual.'],
  ['02', 'DIAGNÓSTICO', 'Olho para suas estratégias, ofertas, comunicação e prioridades.'],
  ['03', 'DISCUSSÃO', 'Conversamos diretamente sobre suas decisões e possibilidades.'],
  ['04', 'DIREÇÃO', 'Você sai sabendo o que priorizar, ajustar e parar de fazer.'],
];

const topics = [
  { title: 'MARKETING', items: ['Prioridades', 'Posicionamento', 'Aquisição', 'Conteúdo', 'Canais'] },
  { title: 'OFERTAS', items: ['Proposta', 'Comunicação', 'Diferenciação', 'Percepção de valor'] },
  { title: 'NEGÓCIO', items: ['Decisões', 'Prioridades', 'Oportunidades', 'Gargalos'] },
  { title: 'EXECUÇÃO', items: ['O que fazer', 'O que não fazer', 'O que testar', 'Onde concentrar energia'] },
];

const faqs = [
  ['É uma mentoria em grupo?', 'Não. A proposta é uma conversa direta sobre o seu negócio.'],
  ['Preciso ter uma empresa já funcionando?', 'A mentoria foi pensada principalmente para quem já tem um negócio e precisa de mais clareza sobre marketing, ofertas e decisões.'],
  ['Vou receber aulas?', 'Não. Não existe uma biblioteca de aulas gravadas. O foco é conversar sobre o seu negócio e seus desafios reais.'],
  ['Você vai fazer o marketing da minha empresa?', 'Não. A proposta é te ajudar a enxergar melhor o cenário, tomar decisões e definir prioridades.'],
  ['Quanto custa?', 'Primeiro vamos conversar. Se eu entender que faz sentido para o seu momento e que consigo ajudar, explico como funciona a mentoria.'],
  ['Posso falar com você antes de contratar?', 'Sim. Esse é justamente o primeiro passo.'],
];

function WhatsAppLink({ className = '' }: { className?: string }) {
  return (
    <a className={className} href={WHATSAPP_URL} aria-label={whatsappLabel}>
      {whatsappLabel}
      <ArrowUpRight size={17} strokeWidth={2.4} />
    </a>
  );
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return <a href="#top" className={`logo ${inverse ? 'logo-inverse' : ''}`} aria-label="Foi o Marketing">foio<span>.</span></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Logo inverse />
        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <WhatsAppLink className="nav-cta" />
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Navbar />
      <div className="container hero-grid">
        <div className="hero-copy fade-up">
          <p className="eyebrow"><span /> Marcelo Fonseca <b>•</b> Analista de Marketing</p>
          <h1>Você não precisa de <em>mais um curso.</em></h1>
          <p className="hero-lead">Precisa de alguém do seu lado para olhar o seu negócio e <strong>te mostrar o que fazer.</strong></p>
          <p className="hero-description">Uma mentoria prática e sem enrolação para quem já tem um negócio, mas quer parar de decidir no achismo e começar a agir com direção.</p>
          <WhatsAppLink className="button button-yellow" />
          <p className="microcopy">Primeiro a gente conversa. Se eu puder te ajudar, eu explico como funciona.</p>
        </div>
        <div className="hero-visual fade-up delay-1">
          <div className="hero-yellow-shape" />
          <div className="hero-photo-frame"><img src={marceloPhoto} alt="Marcelo Fonseca, analista de marketing" /></div>
          <div className="hero-stamp"><span>MENTORIA</span><strong>1 MÊS</strong><span>DIRETO COM MARCELO</span></div>
          <div className="hero-index">01 <span>/</span> 04</div>
        </div>
      </div>
      <div className="container trust-bar">
        <span className="trust-label">Uma conversa diferente<br />sobre o seu negócio.</span>
        <div className="trust-item"><strong>10+</strong><span>anos de experiência</span></div>
        <div className="trust-item"><strong>01</strong><span>olhar estratégico</span></div>
        <div className="trust-item"><strong>100%</strong><span>marketing na prática</span></div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section section-black problem-section">
      <div className="container problem-grid">
        <div><p className="section-kicker yellow-text">01 — O ponto de partida</p><h2>Talvez o problema não seja falta de <span>informação.</span></h2></div>
        <div className="problem-content">
          <p className="lead-white">Você provavelmente já viu conteúdo suficiente sobre marketing.</p>
          <div className="problem-list">
            {['Já tentou produzir conteúdo.', 'Já pensou em anunciar.', 'Já testou estratégias.', 'Já comprou cursos.', 'Já salvou dezenas de posts.'].map((item) => <p key={item}>{item}</p>)}
          </div>
          <div className="problem-ending"><span>E mesmo assim continua sem saber</span><strong>o que deveria fazer primeiro.</strong></div>
          <p className="big-statement">O problema não é falta de informação.<br /><span>É falta de direção.</span></p>
        </div>
      </div>
    </section>
  );
}

function MentoriaSection() {
  const cards = [
    ['01', 'SEU NEGÓCIO', 'Entender o momento atual, contexto e principais desafios.'],
    ['02', 'SUAS DECISÕES', 'Questionar o que você está fazendo e por quê.'],
    ['03', 'SEU MARKETING', 'Identificar prioridades e oportunidades.'],
    ['04', 'PRÓXIMOS PASSOS', 'Transformar análise em ações práticas.'],
  ];
  return (
    <section className="section section-offwhite" id="mentoria">
      <div className="container">
        <div className="section-heading split-heading"><div><p className="section-kicker">02 — A mentoria</p><h2>Uma pessoa experiente olhando o seu negócio <span>de fora.</span></h2></div><p>Durante 1 mês, você conversa diretamente comigo para analisar o seu negócio, suas decisões de marketing, suas ofertas e aquilo que está travando seu crescimento.</p></div>
        <div className="mentoria-cards">{cards.map(([num, title, text]) => <article className="outline-card" key={num}><span className="card-number">{num}</span><h3>{title}</h3><p>{text}</p><ArrowDownRight className="card-arrow" size={21} /></article>)}</div>
        <div className="no-course"><span>Sem aula gravada.</span><span>Sem fórmula pronta.</span><strong>Sem marketês.</strong></div>
        <WhatsAppLink className="button button-dark" />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section section-yellow" id="como-funciona">
      <div className="container">
        <div className="section-heading how-heading"><div><p className="section-kicker dark-kicker">03 — O processo</p><h2>Como funciona <em>na prática?</em></h2></div><p>Um mês para tirar o ruído da frente, fazer as perguntas certas e transformar análise em próximos passos.</p></div>
        <div className="timeline">{steps.map(([num, title, text]) => <div className="timeline-step" key={num}><div className="timeline-marker">{num}</div><h3>{title}</h3><p>{text}</p></div>)}</div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="section section-offwhite audience-section">
      <div className="container audience-grid">
        <div><p className="section-kicker">04 — Para quem é</p><h2>Essa mentoria é para você <span>se...</span></h2><p className="audience-intro">Você não precisa estar começando. Precisa estar disposto a olhar para o que está fazendo com honestidade.</p></div>
        <div className="checklist">{['Você já tem um negócio, mas sente que está fazendo um monte de coisa sem saber exatamente o que deveria fazer primeiro.', 'Já tentou marketing, conteúdo, anúncios ou outras estratégias, mas ainda toma muita decisão no achismo.', 'Quer alguém para olhar de fora, questionar suas decisões e ajudar a colocar as coisas em ordem.', 'Quer discutir seu negócio com alguém que tenha experiência prática.', 'Não quer mais informação. Quer direção.'].map((item) => <div className="check-item" key={item}><Check size={18} /><p>{item}</p></div>)}<div className="audience-callout"><p>Se você está procurando mais um curso, essa provavelmente não é a solução.</p><strong>Se está procurando alguém para pensar junto com você, continue.</strong></div></div>
      </div>
    </section>
  );
}

function TopicsSection() {
  return (
    <section className="section section-black topics-section">
      <div className="container"><div className="section-heading topics-heading"><div><p className="section-kicker yellow-text">05 — A conversa</p><h2>Não existe pauta pronta. Existe o que o seu negócio precisa <span>resolver.</span></h2></div></div><div className="topics-grid">{topics.map((topic, index) => <article className="topic-card" key={topic.title}><span>0{index + 1}</span><h3>{topic.title}</h3><ul>{topic.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div>
    </section>
  );
}

function AboutMarcelo() {
  return (
    <section className="section section-offwhite about-section" id="marcelo">
      <div className="container about-grid"><div className="about-photo"><img src={marceloPhoto} alt="Retrato de Marcelo Fonseca" /><span>MARCELO<br />FONSECA</span></div><div className="about-copy"><p className="section-kicker">06 — Quem vai estar do outro lado?</p><h2>Quem vai estar<br />do outro lado?</h2><p className="about-name">Marcelo Fonseca <span>— Analista de Marketing</span></p><p>Há mais de 10 anos trabalhando na prática com marketing e negócios. Já estive à frente de agências, cuidei de empresas de diferentes tamanhos e mercados e trabalhei com negócios no Brasil e fora dele.</p><p className="about-emphasis">Mas talvez isso nem seja<br /><span>o mais importante.</span></p><p>Eu não entro numa conversa para te impressionar com palavras difíceis. Entro para entender seu negócio, fazer as perguntas certas e falar o que eu faria se estivesse no seu lugar.</p><p className="about-honesty">Se eu achar que consigo te ajudar, eu te explico como funciona.<br /><strong>Se não, eu também vou te falar.</strong></p></div></div>
    </section>
  );
}

function PositioningSection() {
  return <section className="section section-yellow positioning-section"><div className="container"><p className="section-kicker dark-kicker">07 — O jeito de fazer</p><h2>Menos teoria.<br />Mais conversa.<br /><span>Mais clareza.</span><br />Mais direção.</h2><div className="positioning-words"><span>Sem enrolação</span><span>Sem fórmula</span><span>Sem marketês</span><span>Sem aula gravada</span></div><p className="positioning-footer">Você traz o problema.<br /><strong>A gente pensa junto.</strong></p></div></section>;
}

function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  return <section className="section section-offwhite faq-section" id="faq"><div className="container faq-grid"><div><p className="section-kicker">08 — Dúvidas comuns</p><h2>Antes de<br /><span>conversar.</span></h2><p className="faq-side-text">Sem pressão, sem promessa exagerada. Só uma conversa para entender se existe um próximo passo.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${active === index ? 'faq-active' : ''}`} key={question}><button onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}><span>{question}</span><ChevronDown size={20} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="final-cta"><div className="container final-cta-inner"><p className="section-kicker dark-kicker">O próximo passo é simples</p><h2>Chega de decidir<br /><span>no achismo.</span></h2><p>Me conta o que está acontecendo no seu negócio. A gente conversa e vê se faz sentido eu te ajudar.</p><WhatsAppLink className="button button-dark" /><small>Sem compromisso. Primeiro a conversa.</small></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><div><Logo /><p>Foi o Marketing</p></div><div className="footer-right"><a href="#top">Voltar ao topo <ArrowUpRight size={16} /></a><a href="https://instagram.com" aria-label="Instagram da Foi o Marketing"><Instagram size={18} /></a></div></div><div className="container copyright"><span>Copyright © 2026 Foi o Marketing</span><span>Marketing com direção.</span></div></footer>;
}

function WhatsAppButton() {
  return <a className="floating-whatsapp" href={WHATSAPP_URL} aria-label="Conversar no WhatsApp"><MessageCircle size={22} /><span>Falar com Marcelo</span></a>;
}

function App() {
  return <div className="site-shell"><Hero /><ProblemSection /><MentoriaSection /><HowItWorks /><AudienceSection /><TopicsSection /><AboutMarcelo /><PositioningSection /><FAQ /><FinalCTA /><Footer /><WhatsAppButton /></div>;
}

export default App;

