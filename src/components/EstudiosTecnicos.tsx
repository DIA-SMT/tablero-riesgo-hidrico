import { useState } from 'react';
import {
  Layers,
  AlertTriangle,
  AlertCircle,
  Info,
  ChevronDown,
  ChevronUp,
  Maximize2,
  X,
  Activity,
  Droplets,
  Wind,
  MapPin,
  Clock,
  Gauge,
} from 'lucide-react';
import { estudios, type EstudioHidraulico, type Hallazgo } from '../data/estudios';

/* ── Lightbox for full-screen image viewing ── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-surface-800/80 text-white hover:bg-surface-700 transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ── Hallazgo badge ── */
function HallazgoBadge({ hallazgo }: { hallazgo: Hallazgo }) {
  const config = {
    critico: {
      icon: AlertTriangle,
      bg: 'bg-red-500/10',
      border: 'border-red-500/25',
      iconColor: 'text-red-400',
      textColor: 'text-red-300',
      label: 'CRÍTICO',
      labelBg: 'bg-red-500/20',
    },
    alerta: {
      icon: AlertCircle,
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/25',
      iconColor: 'text-amber-400',
      textColor: 'text-amber-300',
      label: 'ALERTA',
      labelBg: 'bg-amber-500/20',
    },
    info: {
      icon: Info,
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/25',
      iconColor: 'text-blue-400',
      textColor: 'text-blue-300',
      label: 'INFO',
      labelBg: 'bg-blue-500/20',
    },
  }[hallazgo.tipo];

  const Icon = config.icon;

  return (
    <div
      className={`flex gap-3 p-3 rounded-lg ${config.bg} border ${config.border}`}
    >
      <div className="flex-shrink-0 mt-0.5">
        <Icon className={`w-4 h-4 ${config.iconColor}`} />
      </div>
      <div className="flex-1">
        <p className={`text-xs ${config.textColor} leading-relaxed`}>
          {hallazgo.texto}
        </p>
      </div>
      <span
        className={`flex-shrink-0 text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded ${config.labelBg} ${config.iconColor} self-start`}
      >
        {config.label}
      </span>
    </div>
  );
}

/* ── Color scale visual for water depth ── */
function DepthScale({
  min,
  max,
  unit,
  colors,
  label,
}: {
  min: string;
  max: string;
  unit: string;
  colors: string[];
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-800/60 border border-surface-500/15">
      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium w-20 flex-shrink-0">
        {label}
      </span>
      <span className="text-[10px] text-gray-500">{min}</span>
      <div className="flex-1 h-3 rounded-full overflow-hidden flex">
        {colors.map((color, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>
      <span className="text-[10px] text-gray-500">
        {max} {unit}
      </span>
    </div>
  );
}

/* ── Study icon based on model ── */
function StudyIcon({ modelo, color }: { modelo: string; color: string }) {
  const isHEC = modelo.includes('HEC');
  const isField = modelo.includes('campo');
  const isFoto = modelo.includes('Foto');

  const Icon = isHEC ? Activity : isField ? MapPin : isFoto ? Layers : Gauge;

  return (
    <div
      className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
      style={{ backgroundColor: `${color}18` }}
    >
      <Icon className="w-6 h-6" style={{ color }} />
    </div>
  );
}

/* ── Single study card ── */
function EstudioCard({ estudio }: { estudio: EstudioHidraulico }) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const scaleConfig: Record<
    string,
    { min: string; max: string; unit: string; colors: string[]; label: string }
  > = {
    'tirante-sector-sur': {
      min: '0,0',
      max: '0,7',
      unit: 'm',
      colors: [
        '#0000FF',
        '#00BFFF',
        '#00FF80',
        '#FFFF00',
        '#FF8000',
        '#FF0000',
      ],
      label: 'Tirante',
    },
    'tirante-zona1': {
      min: '0,20',
      max: '>0,80',
      unit: 'm',
      colors: ['#FFE0B2', '#FFB74D', '#FF9800', '#F44336', '#B71C1C'],
      label: 'Tirante',
    },
    'dxv-zona1': {
      min: '0',
      max: '0,8',
      unit: 'm²/s',
      colors: ['#E3F2FD', '#90CAF9', '#42A5F5', '#1E88E5', '#FF7043', '#D32F2F'],
      label: 'DxV',
    },
  };

  const scale = scaleConfig[estudio.id];

  return (
    <>
      {lightbox && (
        <Lightbox
          src={estudio.imagen}
          alt={estudio.titulo}
          onClose={() => setLightbox(false)}
        />
      )}

      <div
        className="card overflow-hidden transition-all duration-300"
        style={{ borderColor: `${estudio.colorAccent}25` }}
      >
        {/* Image with overlay */}
        <div className="relative group">
          <div className="aspect-[16/10] overflow-hidden bg-surface-800">
            <img
              src={estudio.imagen}
              alt={estudio.titulo}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-900/95 via-surface-900/30 to-transparent" />

          {/* Expand button */}
          <button
            onClick={() => setLightbox(true)}
            className="absolute top-3 right-3 p-2 rounded-lg bg-surface-900/70 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-surface-800/90 transition-all opacity-0 group-hover:opacity-100"
            title="Ver en pantalla completa"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Model tag */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm"
              style={{
                backgroundColor: `${estudio.colorAccent}30`,
                color: estudio.colorAccent,
              }}
            >
              {estudio.modelo}
            </span>
          </div>

          {/* Title overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-bold text-white mb-1">
              {estudio.titulo}
            </h3>
            <p className="text-xs text-gray-400">{estudio.subtitulo}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Source & date */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">
              {estudio.fuente}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <Clock className="w-3 h-3" />
              {estudio.fecha}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {estudio.descripcion}
          </p>

          {/* Color scale if applicable */}
          {scale && (
            <div className="mb-4">
              <DepthScale {...scale} />
            </div>
          )}

          {/* Interpretation box */}
          <div
            className="p-4 rounded-lg mb-4 border"
            style={{
              backgroundColor: `${estudio.colorAccent}08`,
              borderColor: `${estudio.colorAccent}20`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <StudyIcon modelo={estudio.modelo} color={estudio.colorAccent} />
              <div>
                <h4
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: estudio.colorAccent }}
                >
                  Interpretación
                </h4>
                <p className="text-[10px] text-gray-500">
                  Lectura técnica del resultado
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mt-3">
              {estudio.interpretacion}
            </p>
          </div>

          {/* Hallazgos */}
          <div className="mb-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Hallazgos clave
            </h4>
            <div className="space-y-2">
              {estudio.hallazgos
                .slice(0, expanded ? undefined : 3)
                .map((h, i) => (
                  <HallazgoBadge key={i} hallazgo={h} />
                ))}
            </div>
            {estudio.hallazgos.length > 3 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 mt-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {expanded ? (
                  <>
                    <ChevronUp className="w-3 h-3" />
                    Ver menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3 h-3" />
                    Ver {estudio.hallazgos.length - 3} hallazgo
                    {estudio.hallazgos.length - 3 > 1 ? 's' : ''} más
                  </>
                )}
              </button>
            )}
          </div>

          {/* Technical parameters */}
          <div className="border-t border-surface-500/15 pt-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Parámetros técnicos
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {estudio.parametros.map((p, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-md bg-surface-800/60 border border-surface-500/10"
                >
                  <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">
                    {p.label}
                  </span>
                  <span className="text-xs text-gray-300 font-medium">
                    {p.valor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {estudio.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-surface-700/50 text-gray-500 border border-surface-500/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ── DxV Danger Table ── */
function DxVDangerTable() {
  const rows = [
    { range: '< 0,1', level: 'Bajo', desc: 'Sin riesgo significativo', color: '#4CAF50' },
    { range: '0,1 – 0,3', level: 'Moderado', desc: 'Riesgo para niños y ancianos', color: '#FFC107' },
    { range: '0,3 – 0,5', level: 'Alto', desc: 'Riesgo vehicular y peatonal', color: '#FF9800' },
    { range: '0,5 – 0,8', level: 'Muy alto', desc: 'Riesgo de arrastre de adultos', color: '#F44336' },
    { range: '> 0,8', level: 'Extremo', desc: 'Peligro letal, arrastre vehicular', color: '#B71C1C' },
  ];

  return (
    <div className="card p-5 border-purple-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/15">
          <Wind className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">
            Escala de Peligrosidad DxV
          </h4>
          <p className="text-[10px] text-gray-500">
            Profundidad × Velocidad (m²/s)
          </p>
        </div>
      </div>
      <div className="space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.range}
            className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-800/50 border border-surface-500/10"
          >
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: row.color }}
            />
            <span className="text-xs text-gray-300 font-mono w-20 flex-shrink-0">
              {row.range}
            </span>
            <span
              className="text-[10px] font-bold uppercase tracking-wider w-16 flex-shrink-0"
              style={{ color: row.color }}
            >
              {row.level}
            </span>
            <span className="text-xs text-gray-400 flex-1">{row.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Timeline for multitemporal ── */
function TimelineRioSali() {
  const periods = [
    {
      year: '1944',
      label: 'Mosaico aéreo',
      desc: 'Cauce amplio con múltiples brazos. Sin urbanización en planicie.',
      color: '#1565C0',
    },
    {
      year: '1968',
      label: 'Mosaico aéreo',
      desc: 'Primeros asentamientos en margen. Cauce aún con brazos secundarios.',
      color: '#1E88E5',
    },
    {
      year: '2000',
      label: 'Mosaico satelital',
      desc: 'Urbanización avanza sobre la planicie aluvial. Cauce comienza a confinarse.',
      color: '#42A5F5',
    },
    {
      year: '2013',
      label: 'Imagen satelital',
      desc: 'Barrio Las Piedritas consolidado. Río confinado en cauce único.',
      color: '#64B5F6',
    },
    {
      year: '2025',
      label: 'LIDAR',
      desc: 'Cauce estrecho, trama urbana densa hasta el borde. Máxima vulnerabilidad.',
      color: '#90CAF9',
    },
  ];

  return (
    <div className="card p-5 border-brand-blue/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/15">
          <Clock className="w-5 h-5 text-brand-blue" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">
            Evolución del Cauce (80 años)
          </h4>
          <p className="text-[10px] text-gray-500">
            Migración y confinamiento progresivo
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-800 via-blue-500 to-blue-200 rounded-full" />

        <div className="space-y-3">
          {periods.map((p) => (
            <div key={p.year} className="flex gap-4 relative">
              <div className="flex-shrink-0 w-14 flex items-center justify-center relative z-10">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-md"
                  style={{
                    backgroundColor: `${p.color}25`,
                    color: p.color,
                  }}
                >
                  {p.year}
                </span>
              </div>
              <div className="flex-1 p-3 rounded-lg bg-surface-800/40 border border-surface-500/10">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                  {p.label}
                </span>
                <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Infrastructure status for Alvarez Condarco ── */
function InfraStatus() {
  const items = [
    {
      label: 'Colector HºAº PROMEBA',
      status: 'Construido 2006',
      detail: '1.300 m — sección 2,5 × 1,2 m',
      color: '#FFC107',
      statusColor: '#FFC107',
    },
    {
      label: 'Espacios de laminación',
      status: 'NO construidos',
      detail: 'Previstos en PROMEBA 2004, nunca materializados',
      color: '#F44336',
      statusColor: '#F44336',
    },
    {
      label: 'Colector Norte Panamá',
      status: 'Propuesto',
      detail: 'Plan de Emergencia Hídrica MSMTuc 2025',
      color: '#F44336',
      statusColor: '#FF9800',
    },
    {
      label: 'Rejas de captación',
      status: 'Comprometidas',
      detail: 'Don Orione: obstruida | Av. Méjico: error de peralte',
      color: '#F44336',
      statusColor: '#F44336',
    },
    {
      label: 'Calidad del agua',
      status: 'Contaminada',
      detail: 'Aguas servidas drenan al canal pluvial',
      color: '#F44336',
      statusColor: '#F44336',
    },
  ];

  return (
    <div className="card p-5 border-green-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/15">
          <Droplets className="w-5 h-5 text-green-400" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">
            Estado de Infraestructura
          </h4>
          <p className="text-[10px] text-gray-500">
            Sistema Alvarez Condarco — Alberdi Norte
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="p-3 rounded-lg bg-surface-800/40 border border-surface-500/10"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-gray-300">
                {item.label}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                style={{
                  backgroundColor: `${item.statusColor}15`,
                  color: item.statusColor,
                }}
              >
                {item.status}
              </span>
            </div>
            <p className="text-[11px] text-gray-500">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Section Component ── */
export default function EstudiosTecnicos() {
  return (
    <section id="estudios" className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-brand-celeste" />
          <h2 className="section-title text-white">
            Modelación Hidráulica y Estudios Técnicos
          </h2>
        </div>
        <p className="text-gray-400 text-sm mb-3 max-w-3xl">
          Resultados de los modelos hidrológicos e hidráulicos (HEC-HMS / HEC-RAS)
          elaborados por el Comité de Emergencias Hídricas de la Ciudad de San Miguel
          de Tucumán, sobre relevamiento LIDAR 2025.
        </p>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-800/60 border border-surface-500/15">
            <div className="w-2 h-2 rounded-full bg-brand-celeste animate-pulse" />
            <span className="text-[11px] text-gray-400 font-medium">
              5 estudios técnicos oficiales
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-800/60 border border-surface-500/15">
            <Activity className="w-3 h-3 text-gray-500" />
            <span className="text-[11px] text-gray-400 font-medium">
              Lluvia de diseño: 177,6 mm/h — Recurrencia 25 años
            </span>
          </div>
        </div>

        {/* Key insight banner */}
        <div className="card p-5 mb-8 border-red-500/25 bg-red-500/5">
          <div className="flex gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/15 flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-red-400 mb-1">
                Hallazgo principal de la modelación
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Los modelos HEC-HMS y HEC-RAS sobre topografía LIDAR 2025 demuestran que
                una lluvia de 177,6 mm/h (recurrencia 25 años) genera tirantes de{' '}
                <strong className="text-white">0,5 a 0,8+ metros</strong> en amplias
                zonas del tejido urbano de SMT, con índices de sumergencia (DxV) que
                representan{' '}
                <strong className="text-white">
                  peligro de arrastre de personas
                </strong>
                . El Río Salí ha perdido el 80% de su planicie de inundación histórica
                por urbanización, y la infraestructura de drenaje existente está parcialmente
                obstruida, incompleta o con defectos constructivos.
              </p>
            </div>
          </div>
        </div>

        {/* Study 1: Multitemporal - full width with sidebar */}
        <div className="mb-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <div className="xl:col-span-2">
              <EstudioCard estudio={estudios[0]} />
            </div>
            <div className="space-y-5">
              <TimelineRioSali />
            </div>
          </div>
        </div>

        {/* Study 2: Sector Sur - full width */}
        <div className="mb-8">
          <EstudioCard estudio={estudios[1]} />
        </div>

        {/* Studies 3 & 4: Tirante + DxV side by side with shared DxV table */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 rounded-full bg-brand-yellow" />
            <h3 className="text-base font-bold text-white">
              Proyecto Colector Norte Panamá — Sector Oeste
            </h3>
          </div>
          <p className="text-xs text-gray-400 mb-5 max-w-2xl">
            Dos lecturas complementarias del mismo evento: el tirante muestra dónde se
            acumula el agua; el índice DxV muestra dónde el flujo es peligroso para personas
            y vehículos.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            <EstudioCard estudio={estudios[2]} />
            <EstudioCard estudio={estudios[3]} />
          </div>

          <DxVDangerTable />
        </div>

        {/* Study 5: Alvarez Condarco with infrastructure sidebar */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 rounded-full bg-green-400" />
            <h3 className="text-base font-bold text-white">
              Relevamiento de Campo — Sistema de Drenaje
            </h3>
          </div>
          <p className="text-xs text-gray-400 mb-5 max-w-2xl">
            Diagnóstico in situ de la infraestructura existente. Documenta fallas de
            mantenimiento, defectos constructivos y obras inconclusas que agravan el riesgo.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <div className="xl:col-span-2">
              <EstudioCard estudio={estudios[4]} />
            </div>
            <div className="space-y-5">
              <InfraStatus />

              {/* Photo evidence callout */}
              <div className="card p-5 border-amber-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/15">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Evidencia fotográfica
                    </h4>
                    <p className="text-[10px] text-gray-500">
                      Recorrida 13/11/2025
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-surface-800/40 border border-surface-500/10">
                    <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">
                      Foto 1 — Calle Don Orione
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Reja de captación completamente obstruida por residuos sólidos
                      urbanos. El agua no puede ingresar al colector.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-800/40 border border-surface-500/10">
                    <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">
                      Foto 2 — Av. Méjico
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Reja limpia pero ineficaz: error de peralte impide que el agua
                      escurra hacia la captación. Defecto constructivo.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-800/40 border border-surface-500/10">
                    <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">
                      Foto 3 — Calle San Miguel / Méjico
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Canal tapado con escurrimiento de aguas servidas. Canal desemboca
                      en Calle Venezuela hacia el predio de ATSA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
