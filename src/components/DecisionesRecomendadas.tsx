import { Zap, Clock, Target, ChevronRight } from 'lucide-react';
import { decisiones } from '../data/decisiones';

const iconMap: Record<string, typeof Zap> = {
  zap: Zap,
  clock: Clock,
  target: Target,
};

function DecisionBlock({ bloque }: { bloque: typeof decisiones[0] }) {
  const Icon = iconMap[bloque.icono] || Zap;

  return (
    <div
      className="card overflow-hidden"
      style={{ borderColor: `${bloque.color}30` }}
    >
      {/* Header */}
      <div
        className="px-6 py-5 border-b"
        style={{
          borderBottomColor: `${bloque.color}15`,
          background: `linear-gradient(135deg, ${bloque.color}10, transparent)`,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl"
            style={{ backgroundColor: `${bloque.color}18` }}
          >
            <Icon className="w-5 h-5" style={{ color: bloque.color }} />
          </div>
          <div>
            <span
              className="text-[11px] font-extrabold uppercase tracking-widest"
              style={{ color: bloque.color }}
            >
              {bloque.horizonte}
            </span>
            <h3 className="text-lg font-bold text-white">{bloque.titulo}</h3>
          </div>
        </div>
      </div>

      {/* Acciones */}
      <div className="px-6 py-4">
        <div className="space-y-3">
          {bloque.acciones.map((accion, i) => (
            <div
              key={i}
              className="flex gap-3 p-4 rounded-lg bg-surface-800/50 border border-surface-500/15 hover:border-surface-500/30 transition-colors"
            >
              <div className="flex-shrink-0 mt-0.5">
                <ChevronRight
                  className="w-4 h-4"
                  style={{ color: bloque.color }}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">
                  {accion.titulo}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-2">
                  {accion.descripcion}
                </p>
                <span className="inline-flex items-center text-[10px] text-gray-500 uppercase tracking-wider font-medium bg-surface-700/50 px-2 py-0.5 rounded">
                  {accion.responsable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DecisionesRecomendadas() {
  return (
    <section id="decisiones" className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-brand-blue" />
          <h2 className="section-title text-white">Decisiones Recomendadas</h2>
        </div>
        <p className="text-gray-400 text-sm mb-8 max-w-2xl">
          Acciones priorizadas por horizonte temporal, pensadas para conducción política.
          El municipio necesita actuar en doble lógica: respuesta inmediata y construcción de
          capacidad.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {decisiones.map((bloque) => (
            <DecisionBlock key={bloque.id} bloque={bloque} />
          ))}
        </div>

        {/* Resumen ejecutivo de cierre */}
        <div className="card p-6 mt-6 border-brand-blue/30 bg-brand-blue/5">
          <div className="flex gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/15 flex-shrink-0">
              <Target className="w-5 h-5 text-brand-blue" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-blue mb-2">
                Síntesis para conducción
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                La ciudad no enfrenta solo un riesgo de crecida fluvial, sino un riesgo compuesto
                por lluvia extraordinaria, sobrecarga del sistema de drenaje y eventual aumento del
                nivel del Río Salí. La respuesta municipal debe concentrarse en corredores ribereños
                vulnerables, puntos urbanos críticos de remanso y anegamiento, e infraestructura de
                control, con una lógica de monitoreo georreferenciado, ayuda anticipada y preparación
                de eventuales evacuaciones sectoriales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
