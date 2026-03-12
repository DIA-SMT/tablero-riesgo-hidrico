import { useState, useMemo } from 'react';
import {
  MapContainer,
  TileLayer,
  Polyline,
  Polygon,
  CircleMarker,
  Popup,
  LayersControl,
  Tooltip,
} from 'react-leaflet';
import { Layers, Map as MapIcon } from 'lucide-react';
import {
  MAP_CENTER,
  MAP_ZOOM,
  rioSaliCoords,
  canalSurCoords,
  canalNorteCoords,
  barriosRiberenos,
  puntosUrbanos,
  infraestructura,
  zonaInundacionE2,
} from '../data/mapData';

function RiskBadge({ riesgo }: { riesgo: string }) {
  const cls =
    riesgo === 'critico'
      ? 'badge-critico'
      : riesgo === 'alto'
      ? 'badge-alto'
      : 'badge-medio';
  return <span className={cls}>{riesgo.toUpperCase()}</span>;
}

function PopupContent({ zona }: { zona: { nombre: string; tipo: string; riesgo: string; descripcion: string; familias?: number; margen?: string } }) {
  return (
    <div className="min-w-[220px] max-w-[280px]">
      <div className="flex items-center justify-between gap-2 mb-2">
        <h4 className="font-bold text-sm text-white">{zona.nombre}</h4>
        <RiskBadge riesgo={zona.riesgo} />
      </div>
      {zona.familias && (
        <p className="text-xs text-brand-yellow font-semibold mb-1">
          ~{zona.familias.toLocaleString()} familias expuestas
        </p>
      )}
      {zona.margen && (
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
          Margen {zona.margen}
        </p>
      )}
      <p className="text-xs text-gray-300 leading-relaxed">{zona.descripcion}</p>
    </div>
  );
}

export default function MapaPrincipal() {
  const [showLegend, setShowLegend] = useState(true);

  const riesgoColor = (riesgo: string) =>
    riesgo === 'critico' ? '#FF3B3B' : riesgo === 'alto' ? '#FF6B00' : '#F4DC00';

  const tipoRadius = (tipo: string) =>
    tipo === 'barrio_ribereño' ? 10 : tipo === 'punto_urbano' ? 7 : 8;

  const allZonas = useMemo(
    () => [...barriosRiberenos, ...puntosUrbanos, ...infraestructura],
    []
  );

  return (
    <section id="mapa" className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-brand-celeste" />
          <h2 className="section-title text-white">Mapa de Situación Territorial</h2>
        </div>
        <p className="text-gray-400 text-sm mb-6 max-w-2xl">
          Visualización de zonas prioritarias, barrios vulnerables, puntos urbanos críticos e
          infraestructura de control en el Área Metropolitana.
        </p>

        <div className="relative">
          {/* Map container */}
          <div className="card overflow-hidden" style={{ height: '620px' }}>
            <MapContainer
              center={MAP_CENTER}
              zoom={MAP_ZOOM}
              style={{ height: '100%', width: '100%' }}
              zoomControl={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://carto.com">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />

              <LayersControl position="topright">
                {/* Río Salí */}
                <LayersControl.Overlay checked name="Río Salí">
                  <Polyline
                    positions={rioSaliCoords}
                    pathOptions={{
                      color: '#2EB1FF',
                      weight: 5,
                      opacity: 0.8,
                    }}
                  >
                    <Tooltip sticky>Río Salí - Tramo Metropolitano</Tooltip>
                  </Polyline>
                </LayersControl.Overlay>

                {/* Canal Sur */}
                <LayersControl.Overlay checked name="Canal Sur">
                  <Polyline
                    positions={canalSurCoords}
                    pathOptions={{
                      color: '#F4DC00',
                      weight: 3,
                      opacity: 0.7,
                      dashArray: '8, 6',
                    }}
                  >
                    <Tooltip sticky>Canal Sur - Estado: deterioro avanzado</Tooltip>
                  </Polyline>
                </LayersControl.Overlay>

                {/* Canal Norte */}
                <LayersControl.Overlay checked name="Canal Norte">
                  <Polyline
                    positions={canalNorteCoords}
                    pathOptions={{
                      color: '#F4DC00',
                      weight: 3,
                      opacity: 0.7,
                      dashArray: '8, 6',
                    }}
                  >
                    <Tooltip sticky>Canal Norte - Capacidad frecuentemente superada</Tooltip>
                  </Polyline>
                </LayersControl.Overlay>

                {/* Zona de inundación Escenario 2 */}
                <LayersControl.Overlay checked name="Zona inundable (Esc. 2)">
                  <Polygon
                    positions={zonaInundacionE2}
                    pathOptions={{
                      color: '#FF3B3B',
                      fillColor: '#FF3B3B',
                      fillOpacity: 0.08,
                      weight: 1,
                      dashArray: '4, 4',
                    }}
                  >
                    <Tooltip>
                      Zona inundable estimada - Escenario 2 (315-500 m³/s)
                    </Tooltip>
                  </Polygon>
                </LayersControl.Overlay>

                {/* Barrios ribereños polígonos */}
                <LayersControl.Overlay checked name="Barrios ribereños">
                  <>
                    {barriosRiberenos.map(
                      (b) =>
                        b.polygon && (
                          <Polygon
                            key={b.id + '-poly'}
                            positions={b.polygon}
                            pathOptions={{
                              color: riesgoColor(b.riesgo),
                              fillColor: riesgoColor(b.riesgo),
                              fillOpacity: 0.15,
                              weight: 2,
                            }}
                          />
                        )
                    )}
                  </>
                </LayersControl.Overlay>

                {/* Barrios ribereños puntos */}
                <LayersControl.Overlay checked name="Barrios vulnerables">
                  <>
                    {barriosRiberenos.map((b) => (
                      <CircleMarker
                        key={b.id}
                        center={b.coords}
                        radius={tipoRadius(b.tipo)}
                        pathOptions={{
                          color: riesgoColor(b.riesgo),
                          fillColor: riesgoColor(b.riesgo),
                          fillOpacity: 0.7,
                          weight: 2,
                        }}
                      >
                        <Popup>
                          <PopupContent zona={b} />
                        </Popup>
                        <Tooltip>{b.nombre}</Tooltip>
                      </CircleMarker>
                    ))}
                  </>
                </LayersControl.Overlay>

                {/* Puntos urbanos */}
                <LayersControl.Overlay checked name="Puntos urbanos críticos">
                  <>
                    {puntosUrbanos.map((p) => (
                      <CircleMarker
                        key={p.id}
                        center={p.coords}
                        radius={tipoRadius(p.tipo)}
                        pathOptions={{
                          color: riesgoColor(p.riesgo),
                          fillColor: riesgoColor(p.riesgo),
                          fillOpacity: 0.7,
                          weight: 2,
                        }}
                      >
                        <Popup>
                          <PopupContent zona={p} />
                        </Popup>
                        <Tooltip>{p.nombre}</Tooltip>
                      </CircleMarker>
                    ))}
                  </>
                </LayersControl.Overlay>

                {/* Infraestructura */}
                <LayersControl.Overlay checked name="Infraestructura crítica">
                  <>
                    {infraestructura.map((inf) => (
                      <CircleMarker
                        key={inf.id}
                        center={inf.coords}
                        radius={tipoRadius(inf.tipo)}
                        pathOptions={{
                          color: '#FFFFFF',
                          fillColor: riesgoColor(inf.riesgo),
                          fillOpacity: 0.6,
                          weight: 2,
                        }}
                      >
                        <Popup>
                          <PopupContent zona={inf} />
                        </Popup>
                        <Tooltip>{inf.nombre}</Tooltip>
                      </CircleMarker>
                    ))}
                  </>
                </LayersControl.Overlay>
              </LayersControl>
            </MapContainer>
          </div>

          {/* Leyenda flotante */}
          {showLegend && (
            <div className="absolute bottom-4 left-4 z-[1000] card p-4 min-w-[200px]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Leyenda</h4>
                <button
                  onClick={() => setShowLegend(false)}
                  className="text-gray-500 hover:text-white text-xs"
                >
                  Ocultar
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 rounded bg-brand-celeste" />
                  <span className="text-[11px] text-gray-400">Río Salí</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 rounded bg-brand-yellow" style={{ borderBottom: '2px dashed #F4DC00' }} />
                  <span className="text-[11px] text-gray-400">Canales urbanos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="text-[11px] text-gray-400">Riesgo crítico</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500/70" />
                  <span className="text-[11px] text-gray-400">Riesgo alto</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="text-[11px] text-gray-400">Riesgo medio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 rounded border border-red-500/40 bg-red-500/10" />
                  <span className="text-[11px] text-gray-400">Zona inundable (Esc.2)</span>
                </div>
              </div>
            </div>
          )}

          {!showLegend && (
            <button
              onClick={() => setShowLegend(true)}
              className="absolute bottom-4 left-4 z-[1000] card p-2.5 hover:border-brand-celeste/40 transition-colors"
            >
              <Layers className="w-4 h-4 text-brand-celeste" />
            </button>
          )}
        </div>

        {/* Mini stats bajo el mapa */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <div className="card p-3 text-center">
            <p className="text-2xl font-extrabold text-red-400">{barriosRiberenos.length}</p>
            <p className="text-[11px] text-gray-500 uppercase tracking-wider">Barrios ribereños</p>
          </div>
          <div className="card p-3 text-center">
            <p className="text-2xl font-extrabold text-brand-yellow">{puntosUrbanos.length}</p>
            <p className="text-[11px] text-gray-500 uppercase tracking-wider">Puntos urbanos</p>
          </div>
          <div className="card p-3 text-center">
            <p className="text-2xl font-extrabold text-brand-celeste">{infraestructura.length}</p>
            <p className="text-[11px] text-gray-500 uppercase tracking-wider">Infra. crítica</p>
          </div>
          <div className="card p-3 text-center">
            <p className="text-2xl font-extrabold text-white">3</p>
            <p className="text-[11px] text-gray-500 uppercase tracking-wider">Anillos de atención</p>
          </div>
        </div>
      </div>
    </section>
  );
}
