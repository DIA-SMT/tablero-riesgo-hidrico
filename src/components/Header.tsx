import { Droplets, Radio } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'resumen', label: 'Resumen' },
  { id: 'mapa', label: 'Mapa' },
  { id: 'estudios', label: 'Estudios' },
  { id: 'zonas', label: 'Zonas' },
  { id: 'poblacion', label: 'Población' },
  { id: 'escenarios', label: 'Escenarios' },
  { id: 'decisiones', label: 'Decisiones' },
];

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-900/90 backdrop-blur-xl border-b border-surface-500/30">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue/20 border border-brand-blue/30">
              <Droplets className="w-5 h-5 text-brand-blue" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-white tracking-tight leading-tight">
                Tablero de Riesgo Hídrico
              </h1>
              <p className="text-[11px] text-gray-500 leading-tight">
                Área Metropolitana de San Miguel de Tucumán
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30">
              <Radio className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
              <span className="text-xs font-semibold text-brand-yellow">EN VIVO</span>
            </div>
            <span className="hidden lg:inline text-xs text-gray-500">
              12 Mar 2026
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
