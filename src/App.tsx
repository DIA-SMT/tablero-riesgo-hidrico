import { useState, useEffect } from 'react';
import Header from './components/Header';
import ResumenEjecutivo from './components/ResumenEjecutivo';
import MapaPrincipal from './components/MapaPrincipal';
import ZonasPrioritarias from './components/ZonasPrioritarias';
import PoblacionVulnerable from './components/PoblacionVulnerable';
import Escenarios from './components/Escenarios';
import DecisionesRecomendadas from './components/DecisionesRecomendadas';
import NotaMetodologica from './components/NotaMetodologica';

const SECTIONS = ['resumen', 'mapa', 'zonas', 'poblacion', 'escenarios', 'decisiones'];

export default function App() {
  const [activeSection, setActiveSection] = useState('resumen');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface-900">
      <Header activeSection={activeSection} />

      <main>
        <ResumenEjecutivo />

        {/* Divider */}
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-surface-500/40 to-transparent" />
        </div>

        <MapaPrincipal />

        <div className="max-w-[1440px] mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-surface-500/40 to-transparent" />
        </div>

        <ZonasPrioritarias />

        <div className="max-w-[1440px] mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-surface-500/40 to-transparent" />
        </div>

        <PoblacionVulnerable />

        <div className="max-w-[1440px] mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-surface-500/40 to-transparent" />
        </div>

        <Escenarios />

        <div className="max-w-[1440px] mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-surface-500/40 to-transparent" />
        </div>

        <DecisionesRecomendadas />

        <NotaMetodologica />
      </main>

      {/* Footer */}
      <footer className="border-t border-surface-500/20 py-6">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600">
              Tablero de Riesgo Hídrico | Área Metropolitana de San Miguel de Tucumán | Marzo 2026
            </p>
            <p className="text-xs text-gray-600">
              Herramienta de apoyo a la toma de decisiones. No constituye predicción hidráulica.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
