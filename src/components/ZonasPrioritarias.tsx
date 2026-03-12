import { Waves, AlertTriangle, Landmark } from 'lucide-react';
import { anillosAtencion } from '../data/zonas';

const iconMap: Record<string, typeof Waves> = {
  waves: Waves,
  'alert-triangle': AlertTriangle,
  landmark: Landmark,
};

function RiskDot({ riesgo }: { riesgo: string }) {
  const color =
    riesgo === 'critico' ? 'bg-red-400' : riesgo === 'alto' ? 'bg-orange-400' : 'bg-yellow-400';
  return <div className={`w-2 h-2 rounded-full flex-shrink-0 ${color}`} />;
}

function RiskLabel({ riesgo }: { riesgo: string }) {
  const cls =
    riesgo === 'critico'
      ? 'badge-critico'
      : riesgo === 'alto'
      ? 'badge-alto'
      : 'badge-medio';
  return <span className={cls}>{riesgo.toUpperCase()}</span>;
}

export default function ZonasPrioritarias() {
  return (
    <section id="zonas" className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-brand-yellow" />
          <h2 className="section-title text-white">Zonas Prioritarias</h2>
        </div>
        <p className="text-gray-400 text-sm mb-8 max-w-2xl">
          Tres anillos de atención territorial, priorizados por tipo de riesgo y proximidad al
          sistema hídrico.
        </p>

        <div className="space-y-6">
          {anillosAtencion.map((anillo) => {
            const Icon = iconMap[anillo.icono] || AlertTriangle;
            return (
              <div
                key={anillo.id}
                className="card overflow-hidden"
                style={{ borderColor: `${anillo.color}30` }}
              >
                {/* Header del anillo */}
                <div
                  className="px-6 py-5 border-b"
                  style={{
                    borderBottomColor: `${anillo.color}20`,
                    background: `linear-gradient(135deg, ${anillo.color}08, transparent)`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: `${anillo.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: anillo.color }} />
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-[11px] uppercase tracking-wider font-semibold mb-1"
                        style={{ color: anillo.color }}
                      >
                        {anillo.subtitulo}
                      </p>
                      <h3 className="text-lg font-bold text-white">{anillo.titulo}</h3>
                      <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                        {anillo.descripcion}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lugares */}
                <div className="px-6 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {anillo.lugares.map((lugar, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-surface-800/60 border border-surface-500/20 hover:border-surface-500/40 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <RiskDot riesgo={lugar.riesgo} />
                            <h4 className="text-sm font-semibold text-white">{lugar.nombre}</h4>
                          </div>
                          <RiskLabel riesgo={lugar.riesgo} />
                        </div>
                        <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1.5">
                          {lugar.jurisdiccion}
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">{lugar.razon}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
