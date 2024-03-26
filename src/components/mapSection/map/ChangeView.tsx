import { LatLngTuple } from 'leaflet';
import { useMap } from 'react-leaflet';

export function ChangeView({ center }: { center: LatLngTuple }) {
  const map = useMap();
  map.closePopup();
  map.setView(center, 100);
  return null;
}
