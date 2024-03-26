import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { ChangeView } from './ChangeView';
import { CONSTANTS, MapLocation } from '../../../constants';

const customIcon = new Icon({
  iconUrl: '/map-marker.webp',
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

export default function Map({
  selectedLocation,
  markers,
}: {
  selectedLocation: MapLocation;
  markers: Record<string, MapLocation[]>;
}) {
  const mapMarkers: MapLocation[] = Object.values(
    Object.values(markers).length > 0 ? markers : CONSTANTS.map
  ).reduce((acc, value) => [...acc, ...value], []);

  return (
    <MapContainer
      center={selectedLocation.coordinates}
      zoom={100}
      scrollWheelZoom={false}
      style={{ height: '100%', minHeight: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView center={selectedLocation.coordinates} />
      {mapMarkers.map((marker) => (
        <Marker
          position={marker.coordinates}
          icon={customIcon}
          key={marker.address + 'marker'}
        >
          <Popup>
            {marker.address}
            <br /> {marker.phone}
            <br /> {marker.schedule.weekdays}{' '}
            {marker.schedule.saturday && (
              <>
                <br /> {marker.schedule.saturday}
              </>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
