// ===================================================
// ZONAS PRIORITARIAS
// Estructuradas en tres anillos de atención territorial
// Fuente: Informe Técnico + Deep Research
// ===================================================

export interface LugarPrioritario {
  nombre: string;
  jurisdiccion: string;
  razon: string;
  riesgo: 'critico' | 'alto' | 'medio';
}

export interface AnilloAtencion {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  color: string;
  icono: string;
  lugares: LugarPrioritario[];
}

export const anillosAtencion: AnilloAtencion[] = [
  {
    id: 'corredor-ribereno',
    titulo: 'Corredor ribereño directo',
    subtitulo: 'Anillo 1 - Impacto fluvial primario',
    descripcion: 'Sectores donde una subida brusca o sostenida del nivel del Río Salí genera afectación directa. Combinan cercanía al sistema hídrico con fragilidad sociohabitacional extrema.',
    color: '#FF3B3B',
    icono: 'waves',
    lugares: [
      {
        nombre: 'La Costanera',
        jurisdiccion: 'SMT - Margen derecha',
        razon: 'Ubicación directa sobre línea de ribera. Insalubridad y falta de consolidación vial. ~600 familias.',
        riesgo: 'critico',
      },
      {
        nombre: 'Costanera Norte',
        jurisdiccion: 'SMT - Margen derecha',
        razon: 'Peligro inminente de desmoronamiento de barrancas en sectores no consolidados. ~600 familias sobre terrazas bajas inestables.',
        riesgo: 'critico',
      },
      {
        nombre: 'Alejandro Heredia',
        jurisdiccion: 'SMT - Margen derecha',
        razon: 'Mayor exponente de riesgo. 470.000 m² de ocupación sobre planicie de inundación. ~2.500 familias (hasta +10.000 personas).',
        riesgo: 'critico',
      },
      {
        nombre: 'Autopista Sur',
        jurisdiccion: 'SMT - Margen derecha',
        razon: 'Macro-asentamiento que se adentra en cotas de riesgo de la planicie aluvial. ~800 familias.',
        riesgo: 'critico',
      },
      {
        nombre: 'San Aníbal',
        jurisdiccion: 'SMT - Margen derecha',
        razon: 'Expansión sobre cotas de riesgo de la planicie aluvial. ~1.500 familias expuestas.',
        riesgo: 'critico',
      },
      {
        nombre: 'Presidente Perón',
        jurisdiccion: 'Banda del Río Salí - Margen izquierda',
        razon: 'Núcleo de alta vulnerabilidad. Identificado para relocalización en planes directores. Planicie de escasa pendiente.',
        riesgo: 'critico',
      },
      {
        nombre: 'Ampliación Cancha Caro',
        jurisdiccion: 'Banda del Río Salí - Margen izquierda',
        razon: '+40% de población infantojuvenil (0-14 años). Requiere protocolos de evacuación pediátrica. ~80 familias.',
        riesgo: 'critico',
      },
      {
        nombre: 'Barrio Antena',
        jurisdiccion: 'Alderetes - Margen izquierda',
        razon: 'Históricamente impactado por erosión y desbordes recurrentes. Sin terraplenes de defensa consolidados.',
        riesgo: 'alto',
      },
      {
        nombre: 'Ampliación Güemes',
        jurisdiccion: 'Alderetes - Margen izquierda',
        razon: 'Carencia de terraplenes de defensa longitudinales. Afectación recurrente que requiere asistencia estatal.',
        riesgo: 'alto',
      },
    ],
  },
  {
    id: 'puntos-urbanos',
    titulo: 'Puntos urbanos de impacto compuesto',
    subtitulo: 'Anillo 2 - Anegamiento por remanso y retroceso pluvial',
    descripcion: 'Sectores de la trama urbana afectados no por desborde fluvial directo, sino por incapacidad de descarga, acumulación, desborde de canales y retroceso pluvial. El aumento del nivel del Río Salí bloquea la salida de los canales urbanos.',
    color: '#F4DC00',
    icono: 'alert-triangle',
    lugares: [
      {
        nombre: 'Av. Roca y Lincoln',
        jurisdiccion: 'SMT',
        razon: 'Punto de colapso identificado en Plan de Contingencia 2025. Se agrava por retroceso pluvial del Canal Sur.',
        riesgo: 'alto',
      },
      {
        nombre: 'Av. Colón y Canal Sur',
        jurisdiccion: 'SMT',
        razon: 'Intersección crítica del sistema de drenaje. Máxima vulnerabilidad al remanso del Río Salí sobre el Canal Sur.',
        riesgo: 'critico',
      },
      {
        nombre: 'Diagonal Sur (Olleros - Canal Sur)',
        jurisdiccion: 'SMT',
        razon: 'Tramo de anegamiento recurrente. Agravado por incapacidad de descarga del Canal Sur hacia el Río Salí.',
        riesgo: 'alto',
      },
      {
        nombre: 'Pedro M. Aráoz y Peirano',
        jurisdiccion: 'SMT',
        razon: 'Nodo de monitoreo para cortes preventivos y desvíos de tránsito.',
        riesgo: 'alto',
      },
      {
        nombre: 'Av. Tarulli',
        jurisdiccion: 'SMT',
        razon: 'Sector bajo con déficit de pendiente para descarga pluvial. Agravado por saturación del Canal Sur.',
        riesgo: 'alto',
      },
      {
        nombre: '24 de Septiembre y B. Aráoz',
        jurisdiccion: 'SMT',
        razon: 'Punto de colapso por antecedentes de anegamiento documentados en Plan de Contingencia municipal.',
        riesgo: 'medio',
      },
    ],
  },
  {
    id: 'infraestructura-critica',
    titulo: 'Infraestructura crítica y puntos de control',
    subtitulo: 'Anillo 3 - Vigilancia estructural e hidráulica',
    descripcion: 'Puentes, estribos, cruces metropolitanos, desembocaduras de canales y secciones de estrechamiento que pueden transformarse rápidamente en nodos críticos de tránsito, control y respuesta.',
    color: '#2EB1FF',
    icono: 'landmark',
    lugares: [
      {
        nombre: 'Puente Lucas Córdoba',
        jurisdiccion: 'SMT / BRS',
        razon: 'Punto de control hidráulico principal. En escenario extremo, la lámina alcanzaría el tablero generando efecto presa con palizadas.',
        riesgo: 'critico',
      },
      {
        nombre: 'Puente Oscar Barros',
        jurisdiccion: 'SMT / BRS',
        razon: 'Sección de estrangulamiento. Riesgo de socavación local y erosión retrocedente en estribos no protegidos.',
        riesgo: 'alto',
      },
      {
        nombre: 'Puente San Cayetano',
        jurisdiccion: 'SMT / BRS',
        razon: 'Estrechamiento que altera la celeridad de la onda de crecida. Riesgo de pérdida funcional como cruce.',
        riesgo: 'alto',
      },
      {
        nombre: 'Descarga Canal Sur al Río Salí',
        jurisdiccion: 'SMT',
        razon: 'Punto clave de bloqueo hidráulico. Si el Salí sube, se produce reflujo hacia toda la red de drenaje interno.',
        riesgo: 'critico',
      },
      {
        nombre: 'Descarga Canal Norte al Río Salí',
        jurisdiccion: 'SMT',
        razon: 'Capacidad ya superada endógenamente. El remanso del Salí agravaría el colapso de la red norte.',
        riesgo: 'alto',
      },
      {
        nombre: 'CAPS Eva Perón (La Cerámica, BRS)',
        jurisdiccion: 'Banda del Río Salí',
        razon: 'Equipamiento sanitario en zona de influencia ribereña. Requiere plan de evacuación y relocalización preventiva.',
        riesgo: 'alto',
      },
    ],
  },
];
