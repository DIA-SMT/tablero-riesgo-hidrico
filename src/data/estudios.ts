export interface Hallazgo {
  texto: string;
  tipo: 'critico' | 'alerta' | 'info';
}

export interface ParametroTecnico {
  label: string;
  valor: string;
}

export interface EstudioHidraulico {
  id: string;
  titulo: string;
  subtitulo: string;
  fuente: string;
  fecha: string;
  imagen: string;
  modelo: string;
  colorAccent: string;
  descripcion: string;
  interpretacion: string;
  hallazgos: Hallazgo[];
  parametros: ParametroTecnico[];
  tags: string[];
}

export const estudios: EstudioHidraulico[] = [
  {
    id: 'multitemporal',
    titulo: 'Análisis Multitemporal del Río Salí',
    subtitulo: 'Trazado del cauce principal con referencia al B° Las Piedritas (1944–2025)',
    fuente: 'Comité de Emergencias Hídricas — Ciudad de San Miguel de Tucumán',
    fecha: 'Marzo 2026',
    imagen: '/estudios/multitemporal-rio-sali.jpg',
    modelo: 'Fotointerpretación multitemporal',
    colorAccent: '#0066FF',
    descripcion:
      'Comparación de cinco períodos (LIDAR 2025, Satelital 2013, Mosaico 2000, 1968 y 1944) que evidencia la migración progresiva del cauce del Río Salí y la ocupación urbana de la planicie de inundación histórica.',
    interpretacion:
      'El río se ha desplazado significativamente en 80 años. En 1944 el cauce discurría en un corredor mucho más amplio con brazos secundarios. Hacia 2025, la urbanización avanzó sobre la planicie aluvial, confinando al río en un cauce estrecho. El Barrio Las Piedritas (contorno rosado) se asienta directamente sobre zonas que el río ocupó históricamente, lo que explica su altísima vulnerabilidad ante crecidas. La Avenida Circunvalación cruza transversalmente el corredor fluvial en todos los períodos.',
    hallazgos: [
      {
        texto: 'El cauce migró cientos de metros entre 1944 y 2025, reduciendo su planicie de inundación por urbanización',
        tipo: 'critico',
      },
      {
        texto: 'Barrio Las Piedritas está asentado sobre la llanura aluvial histórica del río',
        tipo: 'critico',
      },
      {
        texto: 'La Av. Circunvalación funciona como barrera transversal al escurrimiento natural',
        tipo: 'alerta',
      },
      {
        texto: 'Los brazos secundarios visibles en 1944 y 1968 desaparecieron por completo bajo la trama urbana',
        tipo: 'alerta',
      },
      {
        texto: 'El relevamiento LIDAR 2025 permite la mayor precisión topográfica disponible hasta la fecha',
        tipo: 'info',
      },
    ],
    parametros: [
      { label: 'Períodos analizados', valor: '5 (1944, 1968, 2000, 2013, 2025)' },
      { label: 'Fuente topográfica', valor: 'LIDAR 2025 + mosaicos aéreos históricos' },
      { label: 'Zona de referencia', valor: 'B° Las Piedritas' },
      { label: 'Escala', valor: '1:12.000 (barra 0–600 m)' },
    ],
    tags: ['Geomorfología', 'Riesgo histórico', 'Planicie aluvial', 'LIDAR'],
  },
  {
    id: 'tirante-sector-sur',
    titulo: 'Tirante de Agua — Sector Sur SMT',
    subtitulo: 'Modelo HEC-HMS sobre relevamiento LIDAR 2025',
    fuente: 'Comité de Emergencias Hídricas — Ciudad de San Miguel de Tucumán',
    fecha: 'Marzo 2026',
    imagen: '/estudios/tirante-sector-sur.jpg',
    modelo: 'HEC-HMS',
    colorAccent: '#F44336',
    descripcion:
      'Imagen raster resultante del modelo hidrológico HEC-HMS que simula la profundidad de agua (tirante) en el Sector Sur de SMT, bajo una lluvia de diseño de 177,6 mm/h (medida en Yerba Buena el 12/02/21) con recurrencia de 25 años.',
    interpretacion:
      'El mapa muestra una extensa superficie urbana afectada por anegamiento, con tirantes de 0 a 0,7 m. Las zonas más críticas (rojo-naranja, >0,5 m) se concentran a lo largo de los ejes de escurrimiento natural que la trama urbana interrumpió. Se observan acumulaciones severas en el entorno de Av. Aconquija, las inmediaciones de Parque 9 de Julio, y los barrios hacia el sur-sureste, donde el sistema de macrodrenaje es deficiente. El Río Salí actúa como receptor final al sureste. Los tirantes de 0,3–0,5 m ya representan riesgo para viviendas precarias y tránsito vehicular.',
    hallazgos: [
      {
        texto: 'Tirantes de hasta 0,7 m en calles del Sector Sur bajo lluvia de 25 años de recurrencia',
        tipo: 'critico',
      },
      {
        texto: 'La mayor concentración de agua se produce en los ejes de escurrimiento natural interrumpidos por la urbanización',
        tipo: 'critico',
      },
      {
        texto: 'Anegamiento extendido en un radio de >3 km² del tejido urbano denso',
        tipo: 'alerta',
      },
      {
        texto: 'La cuenca sur carece de colectores pluviales con capacidad para este evento',
        tipo: 'alerta',
      },
      {
        texto: 'Modelo basado en topografía LIDAR submétrica (máxima resolución disponible)',
        tipo: 'info',
      },
    ],
    parametros: [
      { label: 'Modelo', valor: 'HEC-HMS' },
      { label: 'Topografía base', valor: 'LIDAR 2025' },
      { label: 'Lluvia de diseño', valor: '177,6 mm/h (Yerba Buena, 12/02/21)' },
      { label: 'Recurrencia', valor: '25 años' },
      { label: 'Tirante máximo', valor: '0,7 m' },
      { label: 'Escala', valor: '1:30.000 (barra 0–1.500 m)' },
    ],
    tags: ['HEC-HMS', 'LIDAR', 'Tirante', 'Sector Sur', 'Anegamiento urbano'],
  },
  {
    id: 'tirante-zona1',
    titulo: 'Tirante de Agua — Zona 1 (Colector Norte Panamá)',
    subtitulo: 'Modelo HEC-RAS — Sector Oeste, situación actual',
    fuente: 'Comité de Emergencias Hídricas — Ciudad de San Miguel de Tucumán',
    fecha: 'Marzo 2026',
    imagen: '/estudios/tirante-zona1-hecras.jpg',
    modelo: 'HEC-RAS (HEC-HMS)',
    colorAccent: '#FF9800',
    descripcion:
      'Modelación hidráulica del Sector Oeste de SMT en el marco del Proyecto Colector Norte Panamá. Muestra los niveles de tirante de agua (0,20 a >0,80 m) bajo la situación actual, es decir, sin las obras de infraestructura propuestas.',
    interpretacion:
      'El mapa revela inundación generalizada en el sector noroeste de la ciudad, especialmente entre Av. Francisco de Aguirre, el Canal Norte existente (Alvarez-Condarco) y las inmediaciones del espacio de laminación tentativo "Campo Norte". Los tirantes alcanzan 0,60–0,80+ m en las zonas más bajas, particularmente alrededor de las calles Don Orione, José Manuel Estrada y Méjico. Se distinguen los colectores existentes (Alvarez-Condarco) y los propuestos (Colector Norte Panamá y secundarios), además de las cuencas colectoras delimitadas. Los posibles espacios de laminación se señalan en verde.',
    hallazgos: [
      {
        texto: 'Tirantes de >0,80 m en el Sector Oeste sin infraestructura propuesta',
        tipo: 'critico',
      },
      {
        texto: 'El colector Alvarez-Condarco existente es insuficiente para el caudal que recibe',
        tipo: 'critico',
      },
      {
        texto: 'Campo Norte identificado como espacio de laminación tentativo clave para la mitigación',
        tipo: 'alerta',
      },
      {
        texto: 'El Proyecto Colector Norte Panamá propone colectores principales y secundarios para aliviar la zona',
        tipo: 'info',
      },
      {
        texto: 'Se identifican posibles espacios de laminación (verde) y laguna de retención (azul)',
        tipo: 'info',
      },
    ],
    parametros: [
      { label: 'Modelo', valor: 'HEC-RAS (con datos de HEC-HMS)' },
      { label: 'Topografía base', valor: 'LIDAR 2025' },
      { label: 'Lluvia de diseño', valor: '177,6 mm/h (pico)' },
      { label: 'Tirante mín–máx', valor: '0,20 – >0,80 m' },
      { label: 'Estado modelado', valor: 'Situación actual (sin obras)' },
      { label: 'Escala', valor: '1:10.000 (barra 0–500 m)' },
    ],
    tags: ['HEC-RAS', 'Colector Norte Panamá', 'Sector Oeste', 'Infraestructura'],
  },
  {
    id: 'dxv-zona1',
    titulo: 'Índice de Sumergencia (DxV) — Zona 1',
    subtitulo: 'Modelo HEC-RAS — Sector Oeste, situación actual',
    fuente: 'Comité de Emergencias Hídricas — Ciudad de San Miguel de Tucumán',
    fecha: 'Marzo 2026',
    imagen: '/estudios/dxv-zona1-hecras.jpg',
    modelo: 'HEC-RAS (HEC-HMS)',
    colorAccent: '#9C27B0',
    descripcion:
      'El índice de sumergencia (DxV = profundidad × velocidad, en m²/s) es un indicador de peligrosidad para personas y vehículos. Un DxV > 0,5 m²/s implica riesgo de arrastre para un adulto; > 0,8 m²/s es peligro extremo.',
    interpretacion:
      'Este mapa complementa al de tirante mostrando no solo dónde se acumula agua, sino dónde el flujo es peligroso por combinación de profundidad y velocidad. Las zonas con valores altos (tonos cálidos, 0,4–0,8 m²/s) se concentran en los cauces naturales del escurrimiento, los desagües pluviales saturados y las calles con pendiente que canalizan el flujo. Se observan concentraciones peligrosas en el entorno de la calle Delfín Gallo, Lucas A. Córdoba, y el eje del colector Alvarez-Condarco. El Campo Norte aparece con DxV significativo, validando su potencial como espacio de laminación.',
    hallazgos: [
      {
        texto: 'Valores de DxV hasta 0,8 m²/s: peligro extremo de arrastre de personas en calles urbanas',
        tipo: 'critico',
      },
      {
        texto: 'Las calles con pendiente funcionan como canales de alta velocidad durante eventos de lluvia',
        tipo: 'critico',
      },
      {
        texto: 'El eje Lucas A. Córdoba — 12 de Octubre concentra los flujos más peligrosos',
        tipo: 'alerta',
      },
      {
        texto: 'DxV > 0,5 m²/s implica riesgo de arrastre para un adulto promedio',
        tipo: 'alerta',
      },
      {
        texto: 'Este indicador es clave para definir zonas de evacuación y restricción vehicular',
        tipo: 'info',
      },
    ],
    parametros: [
      { label: 'Indicador', valor: 'DxV (Profundidad × Velocidad)' },
      { label: 'Unidad', valor: 'm²/s' },
      { label: 'Rango', valor: '0 – 0,8 m²/s' },
      { label: 'Umbral peligro persona', valor: '> 0,5 m²/s' },
      { label: 'Umbral peligro extremo', valor: '> 0,8 m²/s' },
      { label: 'Estado modelado', valor: 'Situación actual (sin obras)' },
    ],
    tags: ['HEC-RAS', 'Peligrosidad', 'DxV', 'Arrastre', 'Evacuación'],
  },
  {
    id: 'alvarez-condarco',
    titulo: 'Cuenca Superior Alvarez Condarco',
    subtitulo: 'Sistema Uruguay — Barrio Alberdi Norte',
    fuente: 'Comité de Emergencias Hídricas — Recorrida 13/11/2025',
    fecha: 'Noviembre 2025',
    imagen: '/estudios/cuenca-alvarez-condarco.jpg',
    modelo: 'Relevamiento de campo + planimetría',
    colorAccent: '#4CAF50',
    descripcion:
      'Relevamiento del sistema de drenaje Uruguay-Alvarez Condarco en la cuenca superior, abarcando Barrio Alberdi Norte. Documenta el colector existente construido por PROMEBA en 2006 (1.300 m de HºAº, sección 2,5 × 1,2 m), los colectores propuestos por el Plan de Emergencia Hídrica 2025, y la situación crítica de la red de conducción actual.',
    interpretacion:
      'El documento revela un sistema de drenaje parcialmente construido y con severas deficiencias. El colector de HºAº de Alberdi Norte (PROMEBA 2006) desemboca en la Calle 12 de Octubre con un caudal cercano a 10 m³/s, pero esa calle no tiene capacidad para conducirlo. Los espacios verdes de laminación previstos en el proyecto original (PROMEBA 2004) nunca se materializaron — el predio de ATSA ocupó uno de ellos. Las rejas de captación en Calle Don Orione están obstruidas por basura, mientras que en Av. Méjico el problema es de errores de peralte que impiden la captación. A lo largo del canal drenan aguas servidas de viviendas aledañas. El colector debe ser captado por el futuro Colector Norte o Colector Panamá.',
    hallazgos: [
      {
        texto: 'Rejas de captación en Calle Don Orione completamente obstruidas por residuos sólidos',
        tipo: 'critico',
      },
      {
        texto: 'Calle 12 de Octubre recibe ~10 m³/s sin capacidad de conducción, generando desbordes',
        tipo: 'critico',
      },
      {
        texto: 'Los espacios de laminación previstos por PROMEBA 2004 nunca fueron construidos',
        tipo: 'alerta',
      },
      {
        texto: 'Aguas servidas de viviendas drenan directamente al canal pluvial a lo largo de todo el recorrido',
        tipo: 'alerta',
      },
      {
        texto: 'Errores de peralte en Av. Méjico impiden que el agua ingrese al colector aun con rejas limpias',
        tipo: 'alerta',
      },
      {
        texto: 'El colector PROMEBA tiene 1.300 m de longitud con sección de 2,5 × 1,2 m',
        tipo: 'info',
      },
    ],
    parametros: [
      { label: 'Colector existente', valor: 'HºAº 2,5 × 1,2 m — 1.300 m (PROMEBA 2006)' },
      { label: 'Caudal descarga', valor: '~10 m³/s en Calle 12 de Octubre' },
      { label: 'Estado rejas Don Orione', valor: 'Obstruidas (basura)' },
      { label: 'Estado rejas Av. Méjico', valor: 'Limpias pero ineficaces (error de peralte)' },
      { label: 'Contaminación', valor: 'Aguas servidas en canal pluvial' },
      { label: 'Fecha relevamiento', valor: '13/11/2025' },
    ],
    tags: ['Relevamiento', 'Drenaje', 'PROMEBA', 'Mantenimiento', 'Infraestructura'],
  },
];
