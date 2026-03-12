// ===================================================
// ESCENARIOS DE MODELACIÓN EXPLORATORIA
// Fuente: Informe Técnico Interdisciplinario
// ===================================================

export interface Escenario {
  id: string;
  nivel: number;
  titulo: string;
  subtitulo: string;
  caudal: string;
  color: string;
  colorBg: string;
  significado: string;
  activadores: string[];
  zonasPrioritarias: string[];
  respuesta: string[];
  confianza: string;
}

export const escenarios: Escenario[] = [
  {
    id: 'vigilancia',
    nivel: 1,
    titulo: 'Vigilancia Reforzada',
    subtitulo: 'Aumento moderado de erogación',
    caudal: 'Hasta 250 m³/s',
    color: '#F4DC00',
    colorBg: 'rgba(244, 220, 0, 0.1)',
    significado: 'El flujo se mantiene confinado dentro de la trinchera del cauce principal (75-90 m de ancho). No se proyectan desbordes sobre la traza urbana consolidada. Sin embargo, se produce erosión marginal intensa que afecta asentamientos sobre terrazas bajas.',
    activadores: [
      'El dique iguala erogación al ingreso (de 150 a 200-250 m³/s)',
      'Pérdida inminente de cota de espera por persistencia de tormentas',
      'Lluvias locales en SMT cesan o son moderadas',
    ],
    zonasPrioritarias: [
      'Costanera Norte: peligro de desmoronamiento de barrancas',
      'Estribos del Puente Lucas Córdoba',
      'Asentamientos sobre terrazas bajas e inestables del cauce activo',
    ],
    respuesta: [
      'Monitoreo continuo de niveles en el Río Salí',
      'Vigilancia visual de barrancas y estribos',
      'Predespliegue de equipos en barrios ribereños críticos',
      'Alerta temprana a población de Costanera y Costanera Norte',
    ],
    confianza: 'Alto. Respaldado en parámetros de diseño de la canalización del Río Salí.',
  },
  {
    id: 'respuesta-urbana',
    nivel: 2,
    titulo: 'Respuesta Urbana',
    subtitulo: 'Activación de planicies y reflujo',
    caudal: '315 - 500 m³/s',
    color: '#FF6B00',
    colorBg: 'rgba(255, 107, 0, 0.1)',
    significado: 'Se supera el umbral de desborde (315 m³/s). El exceso de agua abandona el cauce y se expande sobre las planicies de inundación. El nivel del Río Salí bloquea hidráulicamente las descargas del Canal Sur y Canal Norte, provocando reflujo de aguas pluviales mixtas hacia el interior de la trama urbana.',
    activadores: [
      'Erogación de emergencia duplica o triplica la salida actual',
      'Precipitación convectiva intensa simultánea (> 80 mm/h)',
      'Suma de erogación + aportes de cuencas intermedias > 315 m³/s',
    ],
    zonasPrioritarias: [
      'Zona Sur y Sureste de SMT: déficit de pendiente para descarga del Canal Sur',
      'Puntos urbanos críticos: Av. Roca y Lincoln, Av. Colón y Canal Sur, Diagonal Sur',
      'Barrios ribereños de Capital: Costanera, A. Heredia, Autopista Sur, San Aníbal',
      'Margen izquierda: Presidente Perón, Ampliación Cancha Caro',
    ],
    respuesta: [
      'Activación plena del COEM y PMA',
      'Evacuación preventiva sectorial de barrios ribereños críticos',
      'Cortes preventivos de tránsito en nodos de anegamiento',
      'Refuerzo sanitario: prevención de contacto con agua contaminada',
      'Despliegue de maquinaria pesada y bombeo en puntos de acumulación',
    ],
    confianza: 'Medio-Alto para detección de áreas vulnerables. Bajo para cota batimétrica exacta de la lámina de agua (falta DEM LiDAR).',
  },
  {
    id: 'extremo',
    nivel: 3,
    titulo: 'Escenario Extremo de Planificación',
    subtitulo: 'Caudales superiores a 1.000 m³/s',
    caudal: '> 1.000 - 1.500 m³/s',
    color: '#FF3B3B',
    colorBg: 'rgba(255, 59, 59, 0.1)',
    significado: 'Colapso tridimensional del sistema. El río pasa de 75 m a 400-600 m de ancho. La lámina de agua alcanza el tablero de los puentes principales, que pasan a actuar como presas no diseñadas, acumulando empalizadas y generando remanso brutal. Se desconecta el Área Metropolitana en dos mitades aisladas.',
    activadores: [
      'Precipitación Máxima Probable (PMP) sostenida sobre la cuenca',
      'Apertura total de válvulas + rebalse por vertedero del Cadillal',
      'Caudales próximos a recurrencia estadística de 100 años (1.500 m³/s)',
    ],
    zonasPrioritarias: [
      'Todo el corredor ribereño: inundación masiva de ambas márgenes',
      'Casco Histórico de Banda del Río Salí por remanso de puentes',
      'Red completa de macro y microdrenaje urbano: colapso total',
      'CAPS Eva Perón y equipamientos sanitarios ribereños',
    ],
    respuesta: [
      'Plan de evacuación máxima: ~12.500-13.500 familias potencialmente afectadas',
      'Rutas de escape hacia zonas topográficamente elevadas',
      'Relocalización preventiva de equipamientos de salud ribereños',
      'Emergencia sanitaria: colapso masivo de pozos ciegos por nivel freático',
      'Aislamiento vial: planes de abastecimiento por sectores',
    ],
    confianza: 'Escenario exploratorio / Límite de estrés para diseño de planes de evacuación. No es una predicción.',
  },
];
