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
  Smartphone,
  ArrowDownRight,
  Sparkle,
  Bot,
  Database,
  Workflow
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full border border-white/5 bg-koi-dark/50 backdrop-blur-2xl py-2 px-8 flex justify-between items-center shadow-2xl`}>
      <div className="flex items-center gap-2 group cursor-pointer">
        <img src="/images/logo 1 naranja.png" alt="Koi Agency" className="h-10 w-auto group-hover:scale-105 transition-transform" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {['Nosotros', 'Mision', 'Proyectos', 'Servicios', 'Contacto'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold text-white/50 hover:text-white transition-all uppercase tracking-[0.2em]">
            {item}
          </a>
        ))}
      </div>

      <a
        href="https://wa.me/3815709287"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-[10px] font-bold hover:bg-white/10 transition-all active:scale-95"
      >
        Asesoria Gratis
        <ArrowDownRight size={12} className="rotate-[-90deg]" />
      </a>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-koi-dark/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden md:hidden mt-2 rounded-3xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {['Nosotros', 'Mision', 'Proyectos', 'Servicios', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-white/70 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="nosotros" className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[800px] bg-dots opacity-40" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-koi-accent/5 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative flex-1 flex flex-col items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible, quedan 3 lugares
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-[80px] font-extrabold leading-[1] tracking-tighter mb-8 max-w-6xl mx-auto flex flex-col gap-2">
            <span className="text-white">Automatizamos procesos.</span>
            <span className="text-koi-accent">Implementamos inteligencia artificial.</span>
            <span className="text-white">Escalamos negocios</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-white/50 mb-10 leading-relaxed">
            Diseñamos y desarrollamos soluciones digitales a medida que transforman tus ideas en productos tecnológicos escalables
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://wa.me/3815709287"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-koi-dark/50 border border-white/10 text-white px-8 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-all active:scale-95 shadow-2xl"
            >
              Auditoria Gratis
              <ArrowDownRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Company Marquee - Positioned at the bottom of the section */}
      <div className="w-full overflow-hidden flex flex-col items-center pb-8 opacity-[0.05]">
        <div className="relative w-full">
          <motion.div
            className="flex whitespace-nowrap gap-24 items-center"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-24 items-center font-display font-black text-4xl italic uppercase tracking-tighter">
                <span>Universidad San Pablo T</span>
                <span>Gentile Autos</span>
                <span>M3 Security</span>
                <span>Giacosa Materiales</span>
                <span>Vincenzo Salon</span>
                <span>La Pionera Yerba</span>
              </div>
            ))}
          </motion.div>
        </div>
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
            className="btn-orange px-6 py-3 rounded-xl"
          >
            Probar Demo <ArrowDownRight size={18} />
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
          {data.imagen ? (
            <img src={data.imagen} alt={data.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          ) : (
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
          )}

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
      imagen: "/images/universidad-san-pablo.webp",
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
      imagen: "/images/giacosa.png",
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
      imagen: "/images/zyro.webp",
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
      imagen: "/images/aido.webp",
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
    <section id="proyectos" className="py-24">
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
    <section id="mision" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Cómo trabajamos</h2>
          <p className="text-white/60 text-lg">Un proceso ágil enfocado en resultados rápidos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < 2 && (
                <div className="hidden md:block absolute top-6 left-12 w-full h-[1px] bg-gradient-to-r from-koi-accent/50 to-transparent z-0" />
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
    <section id="contacto" className="py-24 px-6">
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
            href="https://wa.me/3815709287"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex btn-orange px-10 py-5 text-xl rounded-2xl"
          >
            Hablar por WhatsApp <ArrowDownRight size={24} />
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
          <img src="/images/logo 1 naranja.png" alt="Koi Agency" className="h-6 w-auto" />
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
