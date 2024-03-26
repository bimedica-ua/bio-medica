import { CONSTANTS, MapLocation } from '@/constants';
import React from 'react';

export const Tabs = ({
  selectedLocation,
  markers,
  onTabClick,
}: {
  selectedLocation: MapLocation;
  markers: Record<string, MapLocation[]>;
  onTabClick: (location: MapLocation) => void;
}) => {
  const mapMarkers =
    Object.values(markers).length > 0 ? markers : CONSTANTS.map;

  return (
    <div className="space-y-2">
      {Object.keys(mapMarkers).map((cityName) => (
        <div key={cityName}>
          <div>{cityName}</div>
          {mapMarkers[cityName].map((location: MapLocation) => (
            <div
              key={location.address}
              className={`cursor-pointer transition-colors ml-5 p-2 rounded border-2 border-solid ${
                selectedLocation.address === location.address
                  ? 'border-orangeDark hover:bg-orangeLight'
                  : 'hover:bg-thirdColor border-secondColor'
              }`}
              onClick={() => onTabClick(location)}
            >
              {location.address.replace('\\n', ' ')}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
