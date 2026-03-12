// ===================================================
// DECISIONES RECOMENDADAS
// Fuente: Informe Técnico + Deep Research
// Pensadas para conducción política.
// ===================================================

export interface Accion {
  titulo: string;
  descripcion: string;
  responsable: string;
}

export interface BloqueDecision {
  id: string;
  horizonte: string;
  titulo: string;
  color: string;
  icono: string;
  acciones: Accion[];
}

export const decisiones: BloqueDecision[] = [
  {
    id: 'ahora',
    horizonte: 'AHORA',
    titulo: 'Acciones inmediatas',
    color: '#FF3B3B',
    icono: 'zap',
    acciones: [
      {
        titulo: 'Montar vigilancia georreferenciada reforzada',
        descripcion: 'Activar vigilancia sobre los tres anillos: ribera vulnerable, nodos urbanos de anegamiento agravable e infraestructura de control.',
        responsable: 'Defensa Civil / Operaciones',
      },
      {
        titulo: 'Relevar visualmente puntos frágiles',
        descripcion: 'Enviar cuadrillas a verificar estado de barrancas en Costanera Norte, estribos de puentes y desembocaduras de canales.',
        responsable: 'Obras Públicas / Defensa Civil',
      },
      {
        titulo: 'Presencia anticipada en sectores definidos',
        descripcion: 'Desplegar presencia de Salud, Desarrollo Social, Tránsito y Defensa Civil en barrios ribereños priorizados.',
        responsable: 'COEM / Municipio',
      },
      {
        titulo: 'Consolidar datos diarios de erogación y niveles',
        descripcion: 'Centralizar información de Obras Públicas, DPA e INA en un tablero único de seguimiento para conducción.',
        responsable: 'Gabinete de Crisis',
      },
      {
        titulo: 'Comunicación preventiva a población ribereña',
        descripcion: 'Informar a vecinos de barrios ribereños sobre situación, puntos de evacuación y canales de comunicación oficial.',
        responsable: 'Comunicación / Desarrollo Social',
      },
    ],
  },
  {
    id: '24h',
    horizonte: 'EN 24 HORAS',
    titulo: 'Preparación operativa',
    color: '#F4DC00',
    icono: 'clock',
    acciones: [
      {
        titulo: 'Mapa único de prioridad operativa',
        descripcion: 'Producir un mapa ejecutivo con barrios ribereños vulnerables, nodos críticos urbanos, canales, puentes, equipamientos sensibles y centros de apoyo.',
        responsable: 'IDET / Planificación',
      },
      {
        titulo: 'Matriz de ayuda territorial',
        descripcion: 'Definir respuestas no por "si el río desborda" sino por tipo de afectación: evacuación, anegamiento interno, aislamiento vial, afectación sanitaria, erosión, falla de drenaje.',
        responsable: 'COEM / Defensa Civil',
      },
      {
        titulo: 'Protocolo de escalamiento',
        descripcion: 'Definir umbrales claros de cuándo se pasa de vigilancia a predespliegue, y de predespliegue a evacuación preventiva sectorial.',
        responsable: 'Gabinete de Crisis',
      },
      {
        titulo: 'Preposicionar recursos logísticos',
        descripcion: 'Ubicar maquinaria pesada, bombas, generadores y colchones en puntos estratégicos cercanos a zonas priorizadas.',
        responsable: 'Logística / Obras Públicas',
      },
      {
        titulo: 'Articular con provincia y nación',
        descripcion: 'Coordinar con DPA datos de erogación proyectada, y con Nación recursos de Defensa Civil y Salud si el escenario escala.',
        responsable: 'Intendencia / Gobernación',
      },
    ],
  },
  {
    id: 'corto-plazo',
    horizonte: 'CORTO PLAZO',
    titulo: 'Construcción de capacidad',
    color: '#2EB1FF',
    icono: 'target',
    acciones: [
      {
        titulo: 'Institucionalizar tablero hidrológico metropolitano',
        descripcion: 'Transformar esta emergencia en una política pública de inteligencia territorial. Un tablero GIS con capas de alerta, gatillos por umbral y protocolo georreferenciado.',
        responsable: 'Planificación / IDET',
      },
      {
        titulo: 'Iniciar adquisición de datos topográficos finos',
        descripcion: 'Gestionar vuelos LiDAR sobre el Área Metropolitana para generar MDT de resolución submétrica. Requisito indispensable para simulación seria.',
        responsable: 'Obras Públicas / Universidad',
      },
      {
        titulo: 'Ampliar red de monitoreo hidrométrico',
        descripcion: 'Instalar estaciones automatizadas en Puente Lucas Córdoba, San Cayetano y descargas de Canal Sur y Norte. Hoy hay vacancia grave.',
        responsable: 'DPA / INA / Municipio',
      },
      {
        titulo: 'Desarrollar modelo hidráulico 2D calibrado',
        descripcion: 'Construir modelo HEC-RAS/Iber del tramo urbano del Salí alimentado por hidrogramas del Cadillal y canales. Pasar de diagnóstico a simulación predictiva.',
        responsable: 'Universidad / Organismos Técnicos',
      },
      {
        titulo: 'Inventario georreferenciado de infraestructura crítica',
        descripcion: 'Generar capa interoperable de equipamientos sensibles, centros de evacuación, rutas de escape y puntos de reunión.',
        responsable: 'COEM / IDET / Municipios',
      },
    ],
  },
];
