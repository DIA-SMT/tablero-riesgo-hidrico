import {
  Gauge,
  Droplets,
  ArrowDown,
  AlertTriangle,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { indicadores, nivelRiesgoGeneral, ideaFuerza, atencionInmediata } from '../data/indicadores';

function IndicadorCard({ ind }: { ind: typeof indicadores[0] }) {
  const borderColor =
    ind.estado === 'critico'
      ? 'border-red-500/40'
      : ind.estado === 'alerta'
      ? 'border-brand-yellow/40'
      : 'border-green-500/40';

  const valueColor =
    ind.estado === 'critico'
      ? 'text-red-400'
      : ind.estado === 'alerta'
      ? 'text-brand-yellow'
      : 'text-green-400';

  const icons: Record<string, typeof Gauge> = {
    'cota-embalse': Gauge,
    erogacion: ArrowDown,
    ingreso: Droplets,
    'umbral-desborde': ShieldAlert,
  };
  const Icon = icons[ind.id] || Gauge;

  return (
    <div className={`card p-5 ${borderColor}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-600/80">
          <Icon className={`w-5 h-5 ${valueColor}`} />
        </div>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            ind.estado === 'critico'
              ? 'bg-red-500/20 text-red-400'
              : ind.estado === 'alerta'
              ? 'bg-brand-yellow/20 text-brand-yellow'
              : 'bg-green-500/20 text-green-400'
          }`}
        >
          {ind.estado.toUpperCase()}
        </span>
      </div>
      <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">
        {ind.label}
      </p>
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className={`text-3xl font-extrabold tracking-tight ${valueColor}`}>
          {ind.valor}
        </span>
        <span className="text-sm text-gray-500 font-medium">{ind.unidad}</span>
      </div>
      <p className="text-xs text-gray-400 leading-relaxed">{ind.descripcion}</p>
      <p className="text-[10px] text-gray-600 mt-2">{ind.fuente}</p>
    </div>
  );
}

function PrioridadItem({
  item,
}: {
  item: typeof atencionInmediata[0];
}) {
  const colorMap = {
    critica: { dot: 'bg-red-400', text: 'text-red-400', border: 'border-red-500/20' },
    alta: { dot: 'bg-brand-yellow', text: 'text-brand-yellow', border: 'border-brand-yellow/20' },
    media: { dot: 'bg-brand-celeste', text: 'text-brand-celeste', border: 'border-brand-celeste/20' },
  };
  const c = colorMap[item.prioridad];

  return (
    <div className={`flex gap-3 p-4 rounded-lg bg-surface-800/60 border ${c.border}`}>
      <div className="flex-shrink-0 mt-1">
        <div className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
      </div>
      <div>
        <h4 className={`text-sm font-semibold ${c.text} mb-1`}>{item.titulo}</h4>
        <p className="text-xs text-gray-400 leading-relaxed">{item.descripcion}</p>
      </div>
    </div>
  );
}

export default function ResumenEjecutivo() {
  return (
    <section id="resumen" className="pt-24 pb-16">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Hero */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-8 rounded-full bg-brand-blue" />
            <h2 className="section-title text-white">Resumen Ejecutivo</h2>
          </div>
          <p className="text-gray-400 max-w-3xl text-sm leading-relaxed">
            Evaluación de riesgo hídrico para el Área Metropolitana de San Miguel de Tucumán ante
            escenarios de erogación del Dique El Cadillal, precipitaciones extraordinarias y
            saturación del sistema urbano de drenaje. Marzo 2026.
          </p>
          <p className="text-[11px] text-gray-600 mt-2">
            Desarrollado por la <span className="text-brand-celeste font-medium">Dirección de Inteligencia Artificial</span> — Municipalidad de San Miguel de Tucumán
          </p>
        </div>

        {/* Semáforo de riesgo */}
        <div
          className="card p-6 mb-8"
          style={{ borderColor: `${nivelRiesgoGeneral.color}40` }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-xl"
              style={{ backgroundColor: `${nivelRiesgoGeneral.color}15` }}
            >
              <AlertTriangle className="w-7 h-7" style={{ color: nivelRiesgoGeneral.color }} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                Nivel General de Riesgo
              </p>
              <h3
                className="text-xl font-extrabold tracking-tight"
                style={{ color: nivelRiesgoGeneral.color }}
              >
                {nivelRiesgoGeneral.nivel}
              </h3>
              <p className="text-sm text-gray-400 mt-1 leading-relaxed max-w-3xl">
                {nivelRiesgoGeneral.descripcion}
              </p>
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {indicadores.map((ind) => (
            <IndicadorCard key={ind.id} ind={ind} />
          ))}
        </div>

        {/* Idea fuerza */}
        <div className="card p-6 mb-8 border-brand-blue/30">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/15">
                <Info className="w-5 h-5 text-brand-blue" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-brand-celeste uppercase tracking-wide mb-2">
                Diagnóstico central
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">{ideaFuerza}</p>
            </div>
          </div>
        </div>

        {/* Qué requiere atención */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-brand-yellow" />
            Qué requiere atención ahora
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {atencionInmediata.map((item, i) => (
              <PrioridadItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
