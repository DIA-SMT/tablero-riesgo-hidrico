// ===================================================
// INDICADORES CLAVE DEL TABLERO
// Fuente: Informe Técnico Interdisciplinario + Deep Research
// Actualizar estos valores con datos operativos reales.
// ===================================================

export interface Indicador {
  id: string;
  label: string;
  valor: string;
  unidad: string;
  estado: 'normal' | 'alerta' | 'critico';
  descripcion: string;
  fuente: string;
}

export const indicadores: Indicador[] = [
  {
    id: 'cota-embalse',
    label: 'Cota Embalse El Cadillal',
    valor: '605,50',
    unidad: 'msnm',
    estado: 'alerta',
    descripcion: 'Cota de espera de crecientes. El embalse opera en modo de laminación activa.',
    fuente: 'Min. Obras Públicas, 11-12 Mar 2026',
  },
  {
    id: 'erogacion',
    label: 'Erogación actual',
    valor: '150',
    unidad: 'm³/s',
    estado: 'normal',
    descripcion: 'Caudal regulado por válvulas. Dentro de márgenes de seguridad del cauce (capacidad: 315 m³/s sin desborde).',
    fuente: 'Min. Obras Públicas, 11-12 Mar 2026',
  },
  {
    id: 'ingreso',
    label: 'Ingreso al embalse',
    valor: '~200',
    unidad: 'm³/s',
    estado: 'alerta',
    descripcion: 'El ingreso supera la erogación. El embalse almacena ~50 m³/s (4,32 hm³/día). Laminación activa.',
    fuente: 'Min. Obras Públicas, 11-12 Mar 2026',
  },
  {
    id: 'umbral-desborde',
    label: 'Umbral de desborde Río Salí',
    valor: '315',
    unidad: 'm³/s',
    estado: 'normal',
    descripcion: 'Superado este caudal, el nivel del agua interseca las cotas de planicies de inundación.',
    fuente: 'Estudios Fluvio-morfológicos UNSE/INA',
  },
];

export const nivelRiesgoGeneral = {
  nivel: 'MODERADO - VIGILANCIA REFORZADA' as const,
  color: '#F4DC00',
  descripcion: 'El riesgo operativo del dique está controlado, pero la combinación de precipitaciones extraordinarias, saturación del drenaje urbano y la posibilidad de incremento de erogación configura un escenario que requiere vigilancia territorial activa.',
};

export const ideaFuerza =
  'El riesgo principal no es solamente que el río desborde, sino que el Río Salí se transforme en un receptor hidráulicamente alto que bloquee o ralentice la descarga de canales urbanos (Canal Sur y Canal Norte), generando remanso y retroceso pluvial hacia el interior de la ciudad. La respuesta municipal debe concentrarse en corredores ribereños vulnerables, puntos urbanos críticos de anegamiento e infraestructura de control.';

export const atencionInmediata = [
  {
    titulo: 'Corredor ribereño directo',
    descripcion: 'Vigilancia reforzada en barrios ribereños: La Costanera, Costanera Norte, Alejandro Heredia, Autopista Sur, San Aníbal (margen derecha); Presidente Perón, Cancha Caro, Antena, Güemes (margen izquierda).',
    prioridad: 'critica' as const,
  },
  {
    titulo: 'Puntos urbanos de impacto compuesto',
    descripcion: 'Monitoreo y cortes preventivos en nodos donde la incapacidad de descarga del Canal Sur genera anegamiento agravado, incluso sin desborde fluvial del Río Salí.',
    prioridad: 'alta' as const,
  },
  {
    titulo: 'Descargas de canales al Río Salí',
    descripcion: 'Vigilar desembocaduras del Canal Sur y Canal Norte. Si el nivel del río sube, se produce bloqueo hidráulico y reflujo hacia el interior urbano.',
    prioridad: 'critica' as const,
  },
  {
    titulo: 'Puentes y secciones de control',
    descripcion: 'Inspección visual de estribos y pilas del Puente Lucas Córdoba, Oscar Barros y San Cayetano. Verificar acumulación de palizadas.',
    prioridad: 'alta' as const,
  },
];
