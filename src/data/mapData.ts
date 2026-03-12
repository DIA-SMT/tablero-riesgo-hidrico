import type { LatLngExpression } from 'leaflet';

// ===================================================
// DATOS MOCK GEOGRÁFICOS
// Para reemplazar por datos reales, modificar las coordenadas
// y polígonos en este archivo. Las capas se renderizan
// automáticamente en el componente MapaPrincipal.
// ===================================================

export const MAP_CENTER: LatLngExpression = [-26.825, -65.195];
export const MAP_ZOOM = 13;

// Trazado aproximado del Río Salí en el tramo metropolitano
export const rioSaliCoords: LatLngExpression[] = [
  [-26.760, -65.180],
  [-26.770, -65.182],
  [-26.780, -65.184],
  [-26.790, -65.185],
  [-26.800, -65.183],
  [-26.810, -65.180],
  [-26.815, -65.178],
  [-26.820, -65.176],
  [-26.825, -65.175],
  [-26.830, -65.174],
  [-26.835, -65.173],
  [-26.840, -65.172],
  [-26.845, -65.171],
  [-26.850, -65.170],
  [-26.860, -65.168],
  [-26.870, -65.167],
  [-26.880, -65.166],
  [-26.890, -65.165],
];

// Trazado aproximado del Canal Sur
export const canalSurCoords: LatLngExpression[] = [
  [-26.845, -65.230],
  [-26.843, -65.220],
  [-26.841, -65.210],
  [-26.840, -65.200],
  [-26.839, -65.190],
  [-26.840, -65.180],
  [-26.842, -65.175],
  [-26.844, -65.172],
];

// Trazado aproximado del Canal Norte
export const canalNorteCoords: LatLngExpression[] = [
  [-26.800, -65.230],
  [-26.802, -65.220],
  [-26.803, -65.210],
  [-26.804, -65.200],
  [-26.805, -65.190],
  [-26.807, -65.183],
];

// Barrios ribereños vulnerables - Margen Derecha (Capital)
export interface ZonaMapa {
  id: string;
  nombre: string;
  tipo: 'barrio_ribereño' | 'punto_urbano' | 'infraestructura' | 'equipamiento';
  coords: LatLngExpression;
  polygon?: LatLngExpression[];
  riesgo: 'critico' | 'alto' | 'medio';
  familias?: number;
  descripcion: string;
  margen?: 'derecha' | 'izquierda';
}

export const barriosRiberenos: ZonaMapa[] = [
  {
    id: 'costanera',
    nombre: 'La Costanera',
    tipo: 'barrio_ribereño',
    coords: [-26.822, -65.178],
    polygon: [
      [-26.819, -65.181], [-26.819, -65.176],
      [-26.825, -65.175], [-26.825, -65.180],
    ],
    riesgo: 'critico',
    familias: 600,
    descripcion: 'Altamente vulnerable por insalubridad, falta de consolidación vial y ubicación directa sobre la línea de ribera.',
    margen: 'derecha',
  },
  {
    id: 'costanera-norte',
    nombre: 'Costanera Norte',
    tipo: 'barrio_ribereño',
    coords: [-26.808, -65.181],
    polygon: [
      [-26.805, -65.184], [-26.805, -65.179],
      [-26.811, -65.178], [-26.811, -65.183],
    ],
    riesgo: 'critico',
    familias: 600,
    descripcion: 'Peligro inminente por desmoronamiento de barrancas. Sin consolidación, sobre terrazas bajas e inestables del cauce activo.',
    margen: 'derecha',
  },
  {
    id: 'alejandro-heredia',
    nombre: 'Alejandro Heredia',
    tipo: 'barrio_ribereño',
    coords: [-26.830, -65.179],
    polygon: [
      [-26.826, -65.184], [-26.826, -65.176],
      [-26.835, -65.175], [-26.835, -65.183],
    ],
    riesgo: 'critico',
    familias: 2500,
    descripcion: 'Mayor exponente de riesgo en Capital. Ocupación de 470.000 m² sobre planicies de inundación. Estimado censal de 2.788 a +10.000 personas.',
    margen: 'derecha',
  },
  {
    id: 'autopista-sur',
    nombre: 'Autopista Sur',
    tipo: 'barrio_ribereño',
    coords: [-26.842, -65.178],
    polygon: [
      [-26.839, -65.182], [-26.839, -65.175],
      [-26.845, -65.174], [-26.845, -65.181],
    ],
    riesgo: 'critico',
    familias: 800,
    descripcion: 'Macro-asentamiento que se adentra en las cotas de riesgo de la planicie aluvial del Río Salí.',
    margen: 'derecha',
  },
  {
    id: 'san-anibal',
    nombre: 'San Aníbal',
    tipo: 'barrio_ribereño',
    coords: [-26.836, -65.182],
    polygon: [
      [-26.833, -65.185], [-26.833, -65.179],
      [-26.839, -65.178], [-26.839, -65.184],
    ],
    riesgo: 'critico',
    familias: 1500,
    descripcion: 'Aproximadamente 1.500 familias en zona de expansión sobre cotas de riesgo de la planicie aluvial.',
    margen: 'derecha',
  },
  {
    id: 'presidente-peron',
    nombre: 'Presidente Perón',
    tipo: 'barrio_ribereño',
    coords: [-26.826, -65.170],
    polygon: [
      [-26.823, -65.173], [-26.823, -65.167],
      [-26.829, -65.166], [-26.829, -65.172],
    ],
    riesgo: 'critico',
    familias: 350,
    descripcion: 'Núcleo de alta vulnerabilidad en BRS. Identificado en planes directores para relocalización y dotación de infraestructura hídrica.',
    margen: 'izquierda',
  },
  {
    id: 'ampliacion-cancha-caro',
    nombre: 'Ampliación Cancha Caro',
    tipo: 'barrio_ribereño',
    coords: [-26.832, -65.168],
    polygon: [
      [-26.830, -65.171], [-26.830, -65.166],
      [-26.835, -65.165], [-26.835, -65.170],
    ],
    riesgo: 'critico',
    familias: 80,
    descripcion: 'Polígono de 21.414 m². Más del 40% de la población es infantojuvenil (0-14 años). Requiere protocolos de evacuación pediátrica especializados.',
    margen: 'izquierda',
  },
  {
    id: 'antena',
    nombre: 'Barrio Antena',
    tipo: 'barrio_ribereño',
    coords: [-26.815, -65.170],
    polygon: [
      [-26.812, -65.173], [-26.812, -65.168],
      [-26.818, -65.167], [-26.818, -65.172],
    ],
    riesgo: 'alto',
    familias: 200,
    descripcion: 'Polígono históricamente impactado por erosión y desbordes recurrentes en Alderetes.',
    margen: 'izquierda',
  },
  {
    id: 'ampliacion-guemes',
    nombre: 'Ampliación Güemes',
    tipo: 'barrio_ribereño',
    coords: [-26.820, -65.168],
    polygon: [
      [-26.817, -65.171], [-26.817, -65.166],
      [-26.823, -65.165], [-26.823, -65.170],
    ],
    riesgo: 'alto',
    familias: 200,
    descripcion: 'Zona de desbordes recurrentes en Alderetes. Sin terraplenes de defensa longitudinales consolidados.',
    margen: 'izquierda',
  },
];

// Puntos urbanos críticos por retroceso pluvial
export const puntosUrbanos: ZonaMapa[] = [
  {
    id: 'roca-lincoln',
    nombre: 'Av. Roca y Lincoln',
    tipo: 'punto_urbano',
    coords: [-26.830, -65.210],
    riesgo: 'alto',
    descripcion: 'Punto de colapso identificado en Plan de Contingencia 2025. Agravamiento por retroceso pluvial del Canal Sur.',
  },
  {
    id: 'colon-canal-sur',
    nombre: 'Av. Colón y Canal Sur',
    tipo: 'punto_urbano',
    coords: [-26.838, -65.205],
    riesgo: 'critico',
    descripcion: 'Intersección crítica del sistema de drenaje. Punto de máxima vulnerabilidad al remanso del Río Salí sobre el Canal Sur.',
  },
  {
    id: 'diagonal-sur',
    nombre: 'Diagonal Sur (Olleros - Canal Sur)',
    tipo: 'punto_urbano',
    coords: [-26.841, -65.200],
    riesgo: 'alto',
    descripcion: 'Tramo de anegamiento recurrente agravado por incapacidad de descarga del Canal Sur hacia el Río Salí.',
  },
  {
    id: 'araoz-peirano',
    nombre: 'Pedro M. Aráoz y Peirano',
    tipo: 'punto_urbano',
    coords: [-26.835, -65.215],
    riesgo: 'alto',
    descripcion: 'Nodo de monitoreo y decisión para cortes preventivos y desvíos de tránsito.',
  },
  {
    id: 'tarulli',
    nombre: 'Av. Tarulli',
    tipo: 'punto_urbano',
    coords: [-26.843, -65.208],
    riesgo: 'alto',
    descripcion: 'Sector bajo afectado por déficit de pendiente para descarga pluvial.',
  },
  {
    id: '24sept-araoz',
    nombre: '24 de Septiembre y B. Aráoz',
    tipo: 'punto_urbano',
    coords: [-26.825, -65.207],
    riesgo: 'medio',
    descripcion: 'Punto de colapso identificado por antecedentes de anegamiento en el Plan de Contingencia municipal.',
  },
];

// Infraestructura crítica
export const infraestructura: ZonaMapa[] = [
  {
    id: 'puente-lucas-cordoba',
    nombre: 'Puente Lucas Córdoba',
    tipo: 'infraestructura',
    coords: [-26.820, -65.179],
    riesgo: 'critico',
    descripcion: 'Punto de control hidráulico principal. Sección de estrangulamiento que eleva localmente la superficie libre del agua. En escenario extremo, la lámina alcanzaría el tablero, generando efecto presa.',
  },
  {
    id: 'puente-oscar-barros',
    nombre: 'Puente Oscar Barros',
    tipo: 'infraestructura',
    coords: [-26.835, -65.176],
    riesgo: 'alto',
    descripcion: 'Sección de control con constricción artificial del cauce. Riesgo de socavación local y erosión retrocedente en estribos.',
  },
  {
    id: 'puente-san-cayetano',
    nombre: 'Puente San Cayetano',
    tipo: 'infraestructura',
    coords: [-26.845, -65.173],
    riesgo: 'alto',
    descripcion: 'Estrechamiento que altera la celeridad de la onda de crecida. En escenario extremo dejaría de funcionar como vía de cruce.',
  },
  {
    id: 'puente-ferroviario',
    nombre: 'Puente Ferroviario',
    tipo: 'infraestructura',
    coords: [-26.828, -65.177],
    riesgo: 'medio',
    descripcion: 'Estructura histórica que actúa como vertedero de pared gruesa alterando la celeridad de onda de crecida.',
  },
  {
    id: 'descarga-canal-sur',
    nombre: 'Descarga Canal Sur al Río Salí',
    tipo: 'infraestructura',
    coords: [-26.843, -65.173],
    riesgo: 'critico',
    descripcion: 'Punto donde el Canal Sur vuelca al Río Salí. Si el nivel del río sube, se produce bloqueo hidráulico y reflujo hacia el interior urbano.',
  },
  {
    id: 'descarga-canal-norte',
    nombre: 'Descarga Canal Norte al Río Salí',
    tipo: 'infraestructura',
    coords: [-26.805, -65.182],
    riesgo: 'alto',
    descripcion: 'Descarga del Canal Norte. Su capacidad ya es superada endógenamente. El remanso del Salí agravaría su colapso.',
  },
  {
    id: 'caps-eva-peron',
    nombre: 'CAPS Eva Perón (La Cerámica, BRS)',
    tipo: 'equipamiento',
    coords: [-26.838, -65.165],
    riesgo: 'alto',
    descripcion: 'Centro de Atención Primaria de Salud en zona de influencia ribereña. Debe evaluarse evacuación y relocalización preventiva en escenario extremo.',
  },
];

// Zona de inundación mock (buffer del río para escenario 2)
export const zonaInundacionE2: LatLngExpression[] = [
  [-26.795, -65.190], [-26.795, -65.170],
  [-26.800, -65.168], [-26.810, -65.166],
  [-26.820, -65.164], [-26.830, -65.162],
  [-26.840, -65.160], [-26.850, -65.158],
  [-26.860, -65.157], [-26.870, -65.156],
  [-26.870, -65.178], [-26.860, -65.179],
  [-26.850, -65.182], [-26.840, -65.184],
  [-26.830, -65.186], [-26.820, -65.188],
  [-26.810, -65.192], [-26.800, -65.195],
  [-26.795, -65.190],
];
