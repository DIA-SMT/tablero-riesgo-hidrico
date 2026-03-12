// ===================================================
// ESTIMACIÓN PRELIMINAR DE POBLACIÓN EXPUESTA
// Fuente: Cruce RENABAP (2022/2023) + INDEC Censo 2022
// ADVERTENCIA: Estimaciones bajo escenarios severos,
// NO conteos definitivos de evacuación.
// ===================================================

export interface JurisdiccionPoblacion {
  id: string;
  nombre: string;
  familias: string;
  personas: string;
  color: string;
  descripcionVulnerabilidad: string;
  barrios_principales: string[];
}

export const poblacionExpuesta: JurisdiccionPoblacion[] = [
  {
    id: 'smt',
    nombre: 'San Miguel de Tucumán',
    familias: '> 11.500',
    personas: '> 50.000',
    color: '#FF3B3B',
    descripcionVulnerabilidad: 'Mayor densidad poblacional dentro del valle de inundación. Viviendas con materiales no adecuados (CALMAT IV). Más de 40 asentamientos interactúan hidro-topográficamente con el sistema Salí-Canales.',
    barrios_principales: [
      'Alejandro Heredia (~2.500 familias)',
      'San Aníbal (~1.500 familias)',
      'El Salvador + Amp. A. Heredia (~2.040 familias)',
      'Autopista Sur (~800 familias)',
      'ATE (~650 familias)',
      'Las Palmeras (~641 familias)',
      'Costanera Norte (~600 familias)',
      'San Miguel (~600 familias)',
      'Néstor Kirchner (~600 familias)',
      'Las Piedritas (~550 familias)',
      'Francisco 1 (~500 familias)',
    ],
  },
  {
    id: 'brs',
    nombre: 'Banda del Río Salí',
    familias: '600 - 800',
    personas: '3.000 - 4.000',
    color: '#F4DC00',
    descripcionVulnerabilidad: 'Topografía de planicie con escasa pendiente que ralentiza el escurrimiento y favorece retención prolongada. Carencia de terraplenes de defensa consolidados.',
    barrios_principales: [
      'Presidente Perón (alta vulnerabilidad)',
      'Ampliación Cancha Caro (~80 familias, +40% infantojuvenil)',
    ],
  },
  {
    id: 'alderetes',
    nombre: 'Alderetes',
    familias: '~400',
    personas: '~1.800',
    color: '#2EB1FF',
    descripcionVulnerabilidad: 'Franja de exposición inmediata con historial de erosión y desbordes recurrentes.',
    barrios_principales: [
      'Barrio 130 Viviendas (~33 familias)',
      'Barrio Antena',
      'Ampliación Güemes',
    ],
  },
];

export const totalMetropolitano = {
  familias: '12.500 - 13.500',
  personas: '~55.000 - 60.000',
};

export const alertaSanitaria = 'Más del 90% de estas poblaciones carece de conexión a redes cloacales formales. La elevación del nivel del río provoca colapso de pozos ciegos y letrinas, configurando emergencia sanitaria de primer orden: riesgo de leptospirosis, enfermedades entéricas y afecciones dérmicas.';

export const advertenciaMetodologica = 'Estas cifras son estimaciones de población vulnerable bajo escenarios severos (Escenario 2 y 3), basadas en cruce geoespacial de polígonos RENABAP con radios censales INDEC (2022). No constituyen conteos definitivos de evacuación inminente. Para cuantificar exposición con precisión adecuada se requiere un polígono de inundación calibrado por escenario, actualmente inexistente.';
