import { Users, AlertTriangle, Baby, Shield } from 'lucide-react';
import {
  poblacionExpuesta,
  totalMetropolitano,
  alertaSanitaria,
  advertenciaMetodologica,
} from '../data/poblacion';

function JurisdiccionCard({ jur }: { jur: typeof poblacionExpuesta[0] }) {
  return (
    <div
      className="card p-6"
      style={{ borderColor: `${jur.color}30` }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-white">{jur.nombre}</h3>
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: jur.color }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">Familias</p>
          <p className="text-2xl font-extrabold" style={{ color: jur.color }}>
            {jur.familias}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">Personas</p>
          <p className="text-2xl font-extrabold" style={{ color: jur.color }}>
            {jur.personas}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed mb-4">
        {jur.descripcionVulnerabilidad}
      </p>

      <div>
        <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium mb-2">
          Barrios principales
        </p>
        <div className="space-y-1">
          {jur.barrios_principales.map((b, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-gray-600 mt-1.5 flex-shrink-0" />
              <p className="text-xs text-gray-400">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PoblacionVulnerable() {
  return (
    <section id="poblacion" className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-red-500" />
          <h2 className="section-title text-white">Población Vulnerable</h2>
        </div>
        <p className="text-gray-400 text-sm mb-8 max-w-2xl">
          Estimación preliminar de población expuesta, basada en cruce geoespacial de polígonos
          RENABAP (2022/2023) con radios censales INDEC (Censo 2022).
        </p>

        {/* Advertencia metodológica */}
        <div className="card p-5 mb-8 border-brand-yellow/30 bg-brand-yellow/5">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-brand-yellow mb-1">
                Advertencia Metodológica
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {advertenciaMetodologica}
              </p>
            </div>
          </div>
        </div>

        {/* Total metropolitano */}
        <div className="card p-6 mb-6 border-surface-500/40">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/15">
              <Users className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                Total Área Metropolitana (escenarios severos)
              </p>
              <p className="text-sm text-gray-400">
                Población evacuable potencial o damnificable bajo Escenario 2 y 3
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-4 rounded-lg bg-surface-800/60">
              <p className="text-4xl font-extrabold text-red-400">
                {totalMetropolitano.familias}
              </p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                Familias expuestas
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-surface-800/60">
              <p className="text-4xl font-extrabold text-red-400">
                {totalMetropolitano.personas}
              </p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                Personas estimadas
              </p>
            </div>
          </div>
        </div>

        {/* Jurisdicciones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {poblacionExpuesta.map((jur) => (
            <JurisdiccionCard key={jur.id} jur={jur} />
          ))}
        </div>

        {/* Alerta sanitaria */}
        <div className="card p-5 border-red-500/30 bg-red-500/5">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-red-400 mb-1 flex items-center gap-2">
                Alerta Sanitaria
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {alertaSanitaria}
              </p>
            </div>
          </div>
        </div>

        {/* Dato demográfico especial */}
        <div className="card p-4 mt-4 border-brand-celeste/20">
          <div className="flex gap-3 items-start">
            <Baby className="w-5 h-5 text-brand-celeste flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-brand-celeste mb-1">
                Atención: Población infantojuvenil
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                En Ampliación Cancha Caro (BRS), más del 40% de la población se encuentra en la
                franja de 0 a 14 años. Esto exige protocolos de evacuación pediátrica, abrigo y
                contención altamente especializados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
