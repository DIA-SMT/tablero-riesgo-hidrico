import { FileText, Database, AlertTriangle, ArrowRight } from 'lucide-react';

export default function NotaMetodologica() {
  return (
    <section id="nota-metodologica" className="py-16 border-t border-surface-500/20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-8 rounded-full bg-gray-600" />
          <h2 className="text-xl font-bold text-white">Nota Metodológica</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Lo que sabemos */}
          <div className="card p-5 border-green-500/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <h3 className="text-sm font-bold text-green-400 uppercase tracking-wider">
                Qué sabemos (Confirmado)
              </h3>
            </div>
            <div className="space-y-2 text-xs text-gray-400 leading-relaxed">
              <p>
                El embalse El Cadillal opera en cota de espera (605,50 msnm) con erogación
                controlada de 150 m³/s e ingreso de ~200 m³/s.
              </p>
              <p>
                La capacidad del cauce del Río Salí es de 250 m³/s (formativo) y 315 m³/s
                (máximo sin desborde).
              </p>
              <p>
                SMT padece déficit estructural crónico de macrodrenaje: Canal Sur colapsado,
                31 puntos de riesgo identificados en Plan de Contingencia 2025.
              </p>
              <p>
                Se reportó oficialmente que las compuertas del dique se mantuvieron abiertas y
                hubo paso de agua sobre RP 347.
              </p>
            </div>
          </div>

          {/* Lo que creemos */}
          <div className="card p-5 border-brand-yellow/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-brand-yellow" />
              <h3 className="text-sm font-bold text-brand-yellow uppercase tracking-wider">
                Qué creemos (Inferencia técnica)
              </h3>
            </div>
            <div className="space-y-2 text-xs text-gray-400 leading-relaxed">
              <p>
                Una erogación combinada que genere un pico superior a 315 m³/s rompería el
                confinamiento del cauce, desbordando hacia planicies y provocando reflujo urbano.
              </p>
              <p>
                Más de 12.000 familias se encuentran en altísima exposición geomorfológica y
                sanitaria en los márgenes de SMT, BRS y Alderetes.
              </p>
              <p>
                El aumento del nivel del Río Salí puede agravar anegamientos internos incluso
                sin desborde fluvial, por bloqueo hidráulico de descargas de canales.
              </p>
            </div>
          </div>

          {/* Lo que falta */}
          <div className="card p-5 border-red-500/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider">
                Qué falta verificar (Brechas críticas)
              </h3>
            </div>
            <div className="space-y-2 text-xs text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-300">Topografía fina:</strong> Falta un DEM LiDAR de
                resolución submétrica. Los modelos satelitales (SRTM, 30 m) tienen errores de 2-5 m,
                inadecuados cuando los tirantes urbanos son de 0,5-1,5 m.
              </p>
              <p>
                <strong className="text-gray-300">Batimetría:</strong> No hay secciones
                transversales actualizadas del cauce del Río Salí.
              </p>
              <p>
                <strong className="text-gray-300">Hidrometría:</strong> Vacancia de estaciones
                fluviométricas automatizadas en puentes críticos (Lucas Córdoba, San Cayetano).
              </p>
              <p>
                <strong className="text-gray-300">Modelo 2D calibrado:</strong> No existe modelo
                hidráulico que traduzca caudales del Cadillal a alturas y huellas inundables en el
                tramo urbano.
              </p>
            </div>
          </div>

          {/* Fuentes */}
          <div className="card p-5 border-surface-500/30">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-gray-500" />
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Fuentes principales
              </h3>
            </div>
            <div className="space-y-1.5 text-xs text-gray-500 leading-relaxed">
              <p>Min. de Obras Públicas de Tucumán (11-12 Mar 2026)</p>
              <p>ORSEP - Ficha de presa Dr. Celestino Gelsi</p>
              <p>Plan de Contingencia ante Inundaciones SMT (2025)</p>
              <p>Estudios Fluvio-morfológicos UNSE/INA (Corral & Farias)</p>
              <p>INDEC - Censo Nacional 2022, radios censales</p>
              <p>RENABAP - Registro Nacional de Barrios Populares (2022/2023)</p>
              <p>IDET - Infraestructura de Datos Espaciales de Tucumán</p>
              <p>INA - Sistema de Información y Alerta Hidrológico (DSIyAH)</p>
              <p>CFI - Informe Provincia de Tucumán (2021)</p>
            </div>
          </div>
        </div>

        {/* Disclaimer final */}
        <div className="mt-8 p-5 rounded-lg bg-surface-800/40 border border-surface-500/20">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-gray-500 leading-relaxed space-y-2">
              <p>
                <strong className="text-gray-400">Alcance del presente tablero:</strong> Este
                instrumento es una herramienta de apoyo para la toma de decisiones basada en la
                mejor información disponible a la fecha (marzo 2026). No constituye una predicción
                hidráulica exacta ni reemplaza un modelo calibrado.
              </p>
              <p>
                Las coordenadas geográficas del mapa son aproximadas y tienen fines
                exclusivamente orientativos. Para operación territorial real, reemplazar por
                georreferenciación oficial (IDET, WMS/WFS del nodo RIDES Tucumán).
              </p>
              <p>
                Las estimaciones poblacionales son rangos de exposición preliminar, no cifras
                de evacuación definitivas. Toda comunicación pública debe explicitar esta
                distinción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
