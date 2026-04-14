/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Layout, 
  Zap, 
  Link as LinkIcon, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  Bot,
  Database,
  Workflow,
  Smartphone
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-koi-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-koi-accent rounded-full"></div>
          <span className="font-display font-extrabold text-xl tracking-tighter uppercase">Koi Agency</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Servicios', 'Casos', 'Proceso'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-koi-green transition-colors">
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-koi-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            Hablar por WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-koi-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Servicios', 'Casos', 'Proceso'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://wa.me/" 
              className="bg-koi-green text-koi-dark p-4 rounded-xl text-center font-bold"
            >
              Hablar por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-koi-green blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-koi-orange blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-koi-glass border border-koi-border text-koi-accent text-xs font-bold uppercase tracking-widest mb-6">
            IA & Automatización
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tighter mb-8">
            Automatizamos procesos.<br />
            <span className="text-koi-accent">IA</span> Real.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-koi-text-dim mb-10 leading-relaxed">
            Desarrollamos sistemas, chatbots y flujos de trabajo inteligentes que reemplazan tareas operativas y escalan tu rentabilidad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#casos" 
              className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-koi-dark transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Ver casos <ArrowRight size={20} />
            </a>
            <a 
              href="https://wa.me/" 
              className="w-full sm:w-auto bg-koi-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BentoServices = () => {
  const services = [
    {
      title: "Chatbots con IA",
      description: "Asistentes inteligentes para WhatsApp e Instagram que venden y atienden 24/7.",
      icon: <MessageSquare className="text-koi-accent" size={32} />,
      size: "md:col-span-2",
      color: "bg-koi-accent/10"
    },
    {
      title: "Sistemas a medida",
      description: "Dashboards, CRMs y ERPs diseñados para tu flujo de trabajo.",
      icon: <Layout className="text-koi-accent" size={32} />,
      size: "md:col-span-1",
      color: "bg-koi-accent/10"
    },
    {
      title: "Automatizaciones",
      description: "Workflows inteligentes con n8n que conectan tus herramientas favoritas.",
      icon: <Workflow className="text-koi-accent" size={32} />,
      size: "md:col-span-1",
      color: "bg-koi-accent/10"
    },
    {
      title: "Integraciones",
      description: "Conectamos pagos, stock y APIs para que todo funcione en sincronía.",
      icon: <LinkIcon className="text-koi-accent" size={32} />,
      size: "md:col-span-2",
      color: "bg-koi-accent/10"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Qué hacemos</h2>
          <p className="text-white/60 text-lg max-w-xl">Soluciones técnicas concretas para problemas reales de negocio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.size} p-8 rounded-[20px] bg-koi-card border border-koi-border hover:border-white/20 transition-all group relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} blur-[60px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="mb-6 w-12 h-12 bg-koi-glass border border-koi-border rounded-lg flex items-center justify-center">{service.icon}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CaseStudyProps {
  data: any;
  index: number;
  key?: React.Key;
}

const CaseStudy = ({ data, index }: CaseStudyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 last:mb-0"
    >
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] uppercase tracking-[1px] text-koi-accent font-bold">
            Caso Destacado — {data.rubro}
          </span>
        </div>
        <h3 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">{data.nombre}</h3>
        
        <div className="space-y-8 mb-10">
          <div>
            <h4 className="text-koi-accent font-bold text-xs uppercase tracking-widest mb-2">Problema</h4>
            <p className="text-koi-text-dim text-lg leading-relaxed">{data.problema}</p>
          </div>
          <div>
            <h4 className="text-koi-accent font-bold text-xs uppercase tracking-widest mb-2">Solución</h4>
            <p className="text-koi-text-dim text-lg leading-relaxed">{data.solucion}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {data.features.map((f: string, i: number) => (
            <div key={i} className="inline-block px-3 py-1.5 bg-koi-glass border border-koi-border rounded-md text-koi-text-dim text-xs">
              {f}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a 
            href={data.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-koi-accent text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all"
          >
            Probar Demo <ExternalLink size={18} />
          </a>
          {data.web && (
            <a 
              href={data.web} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              Ver Web <LinkIcon size={18} />
            </a>
          )}
        </div>
      </div>

      <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
        <div className="aspect-[4/3] rounded-[20px] bg-koi-card border border-koi-border overflow-hidden group">
          {/* Placeholder Visuals */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full h-full rounded-xl bg-koi-glass border border-koi-border flex flex-col overflow-hidden">
              <div className="h-10 bg-white/5 border-b border-koi-border flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/30" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                <div className="w-2 h-2 rounded-full bg-green-500/30" />
              </div>
              <div className="flex-1 p-6 flex gap-6">
                {/* System Mockup */}
                <div className="flex-1 bg-white/5 rounded-xl border border-koi-border p-4 flex flex-col gap-3">
                  <div className="h-4 w-1/2 bg-white/10 rounded" />
                  <div className="h-20 w-full bg-white/5 rounded" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 bg-white/5 rounded" />
                    <div className="h-12 bg-white/5 rounded" />
                    <div className="h-12 bg-white/5 rounded" />
                  </div>
                </div>
                {/* Chat Mockup */}
                <div className="w-1/3 bg-white/5 rounded-xl border border-koi-border p-4 flex flex-col gap-3">
                  <div className="h-8 w-8 rounded-full bg-koi-accent/20 self-start" />
                  <div className="h-10 w-4/5 bg-koi-accent/10 rounded-lg rounded-tl-none self-start" />
                  <div className="h-10 w-4/5 bg-white/5 rounded-lg rounded-tr-none self-end" />
                  <div className="h-12 w-4/5 bg-koi-accent/10 rounded-lg rounded-tl-none self-start" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Overlay text */}
          <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-koi-dark/40 backdrop-blur-xl border border-koi-border opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-sm font-bold text-white/80 flex items-center gap-2">
              <Smartphone size={16} className="text-koi-accent" /> Vista del sistema + Chat IA
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-koi-accent/20 blur-3xl rounded-full -z-10" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-koi-accent/20 blur-3xl rounded-full -z-10" />
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      nombre: "Universidad San Pablo T",
      rubro: "Educación",
      problema: "Gran volumen de consultas de alumnos y potenciales ingresantes, gestión manual y lenta.",
      solucion: "Sistema + chatbot con IA para automatizar atención, categorización de consultas y seguimiento.",
      features: [
        "Chatbot con IA para WhatsApp",
        "Gestión de leads de alumnos",
        "Respuestas automáticas sobre carreras",
        "Recordatorios de pago de aranceles",
        "Automatización de consultas frecuentes"
      ],
      demo: "https://uspt-web.vercel.app/"
    },
    {
      nombre: "Corralones Giacosa",
      rubro: "Construcción",
      problema: "Cotizaciones manuales lentas y dificultad para interpretar pedidos poco claros.",
      solucion: "Vendedor digital con IA que interpreta texto, audios e imágenes y genera presupuestos.",
      features: [
        "Chatbot con IA conversacional",
        "Interpretación de audios e imágenes",
        "Búsqueda en catálogo de +2000 productos",
        "Generación automática de presupuestos",
        "Atención comercial automatizada"
      ],
      demo: "https://wa.me/5493813360315"
    },
    {
      nombre: "Zyro AI",
      rubro: "Automotor / stock",
      problema: "Desactualización de stock y desconexión entre sistema interno y web.",
      solucion: "IA conectada a sistema de stock en tiempo real con sincronización automática.",
      features: [
        "Chatbot con IA",
        "Consulta de stock en tiempo real",
        "Sistema de gestión a medida",
        "Sincronización automática con web"
      ],
      demo: "https://wa.me/5493813360142",
      web: "https://zyro-eta.vercel.app/"
    },
    {
      nombre: "Aido AI",
      rubro: "Salud",
      problema: "Saturación en la gestión de turnos y mala organización de agenda.",
      solucion: "Secretario digital con IA que agenda turnos automáticamente.",
      features: [
        "Chatbot para gestión de turnos",
        "Agenda centralizada",
        "Panel para médicos y secretarias",
        "Gestión manual + automática"
      ],
      demo: "https://wa.me/5493813360714",
      web: "https://aido-secretario-digital.vercel.app/"
    }
  ];

  return (
    <section id="casos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Casos reales</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Implementaciones que ya están transformando la operación de nuestros clientes.</p>
        </div>

        <div className="space-y-20">
          {cases.map((c, i) => (
            <CaseStudy key={i} data={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Entendemos el negocio",
      description: "Analizamos tus cuellos de botella y procesos manuales para identificar dónde la IA tiene más impacto.",
      icon: <Database size={24} />
    },
    {
      title: "Diseñamos la solución",
      description: "Creamos el flujo de automatización y entrenamos a la IA con el conocimiento específico de tu empresa.",
      icon: <Bot size={24} />
    },
    {
      title: "Implementamos",
      description: "Ponemos en marcha el sistema, conectamos las APIs y automatizamos tus procesos en pocos días.",
      icon: <Zap size={24} />
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Cómo trabajamos</h2>
          <p className="text-white/60 text-lg">Un proceso ágil enfocado en resultados rápidos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-koi-accent/50 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-koi-accent text-white font-black flex items-center justify-center mb-6">
                  {i + 1}
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-koi-text-dim leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-[3rem] bg-koi-card p-12 md:p-24 text-center border border-koi-border relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
            Podés seguir haciendo todo manual…<br />
            <span className="text-koi-accent">o automatizarlo.</span>
          </h2>
          <p className="text-koi-text-dim text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Te mostramos cómo aplicar IA en tu negocio en pocos días. No te quedes atrás en la carrera tecnológica.
          </p>
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-koi-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:opacity-90 transition-all hover:scale-105"
          >
            Hablar por WhatsApp <MessageSquare size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-koi-border bg-koi-card">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-koi-accent rounded-full"></div>
          <span className="font-display font-extrabold text-lg tracking-tighter uppercase">Koi Agency</span>
        </div>
        
        <div className="text-koi-text-dim text-sm">
          © {new Date().getFullYear()} KOI AGENCIA - Especialistas en Sistemas de IA
        </div>

        <div className="flex gap-6">
          <span className="text-koi-text-dim text-xs">Corralones Giacosa</span>
          <span className="text-koi-text-dim text-xs">Zyro AI</span>
          <span className="text-koi-text-dim text-xs">Aido Health</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-koi-green/30">
      <Navbar />
      <main>
        <Hero />
        <BentoServices />
        <CaseStudies />
        <Process />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
