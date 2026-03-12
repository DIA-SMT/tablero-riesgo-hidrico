import { Shield, AlertTriangle, Siren, ChevronRight, Info } from 'lucide-react';
import { escenarios } from '../data/escenarios';

const iconMap: Record<string, typeof Shield> = {
  vigilancia: Shield,
  'respuesta-urbana': AlertTriangle,
  extremo: Siren,
};

function EscenarioCard({ esc }: { esc: typeof escenarios[0] }) {
  const Icon = iconMap[esc.id] || AlertTriangle;

  return (
    <div
      className="card overflow-hidden flex flex-col"
      style={{ borderColor: `${esc.color}30` }}
    >
      {/* Header */}
      <div
        className="px-6 py-5"
        style={{
          background: `linear-gradient(135deg, ${esc.color}12, transparent)`,
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl"
            style={{ backgroundColor: `${esc.color}18` }}
          >
            <Icon className="w-5 h-5" style={{ color: esc.color }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                style={{
                  color: esc.color,
                  backgroundColor: `${esc.color}15`,
                }}
              >
                Escenario {esc.nivel}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">{esc.titulo}</h3>
          </div>
        </div>
        <p className="text-xs text-gray-400">{esc.subtitulo}</p>
        <div
          className="inline-block mt-2 px-3 py-1 rounded-full text-sm font-bold"
          style={{
            color: esc.color,
            backgroundColor: `${esc.color}12`,
            border: `1px solid ${esc.color}30`,
          }}
        >
          {esc.caudal}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-5 flex-1 space-y-5">
        {/* Significado */}
        <div>
          <h4 className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold mb-2">
            Qué significa
          </h4>
          <p className="text-xs text-gray-300 leading-relaxed">{esc.significado}</p>
        </div>

        {/* Activadores */}
        <div>
          <h4 className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold mb-2">
            Qué activa este escenario
          </h4>
          <div className="space-y-1.5">
            {esc.activadores.map((act, i) => (
              <div key={i} className="flex items-start gap-2">
                <ChevronRight
                  className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                  style={{ color: esc.color }}
                />
                <p className="text-xs text-gray-400">{act}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zonas */}
        <div>
          <h4 className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold mb-2">
            Qué zonas mirar primero
          </h4>
          <div className="space-y-1.5">
            {esc.zonasPrioritarias.map((z, i) => (
              <div key={i} className="flex items-start gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                  style={{ backgroundColor: esc.color }}
                />
                <p className="text-xs text-gray-400">{z}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Respuesta */}
        <div>
          <h4 className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold mb-2">
            Respuesta sugerida
          </h4>
          <div className="space-y-1.5">
            {esc.respuesta.map((r, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-600 flex-shrink-0 mt-1.5" />
                <p className="text-xs text-gray-400">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Confianza */}
      <div
        className="px-6 py-3 border-t"
        style={{ borderTopColor: `${esc.color}15` }}
      >
        <div className="flex items-start gap-2">
          <Info className="w-3.5 h-3.5 text-gray-500 flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-500 leading-relaxed">
            <span className="font-semibold">Confianza:</span> {esc.confianza}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Escenarios() {
  return (
    <section id="escenarios" className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-orange-500" />
          <h2 className="section-title text-white">Escenarios</h2>
        </div>
        <p className="text-gray-400 text-sm mb-8 max-w-2xl">
          Tres escenarios de modelación exploratoria, basados en la geometría histórica del cauce,
          la ecuación de Manning para flujo uniforme y la cinemática de propagación de ondas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {escenarios.map((esc) => (
            <EscenarioCard key={esc.id} esc={esc} />
          ))}
        </div>

        {/* Nota de desmitificación */}
        <div className="card p-5 mt-6 border-surface-500/30">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-brand-celeste flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-brand-celeste mb-1">
                Nota sobre comportamiento no lineal
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Un incremento del caudal no genera una subida lineal del nivel del río.
                La relación es potencial y cambia abruptamente al desbordar sobre la planicie:
                una suba de 1 metro es absorbida por el cauce (75 m de ancho); una suba de 3
                metros derrama sobre terrazas ampliando el río a 400-600 m; una suba de 5 metros
                implica colapso tridimensional con la lámina alcanzando tableros de puentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
