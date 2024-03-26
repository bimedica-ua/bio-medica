'use client';
import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { CONSTANTS, MapLocation } from '../../constants';
import { Tabs } from './tabs/Tabs';
import { DataView } from './dataView/DataView';
import { getFromApi, transformMapLocation } from '@/apiGetter';

const MapSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation>(
    CONSTANTS.map['м. Запоріжжя'][0] as MapLocation
  );
  const [markers, setMarkers] = useState<Record<string, MapLocation[]>>({});

  useEffect(() => {
    getFromApi(CONSTANTS.MapApi, setMarkers, transformMapLocation);
  }, []);

  const Map = useMemo(
    () =>
      dynamic(() => import('./map/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="flex flex-col lg:flex-row pb-20 pl-6 pr-6 gap-5 lg:gap-0">
      <div className="w-full lg:w-1/4 sm:px-4 md:py-8 lg:px-4 lg:py-4 order-1 lg:order-0">
        <h2 className="text-xl font-semibold mb-4">Адреса відділень</h2>
        <Tabs
          markers={markers}
          onTabClick={setSelectedLocation}
          selectedLocation={selectedLocation}
        ></Tabs>
      </div>
      <div className="h-[450px] w-full lg:h-[600px] lg:w-3/4 sm:p-4 relative lg:order-1">
        <h2 className="text-xl font-semibold mb-4">Карта відділень</h2>
        <Map markers={markers} selectedLocation={selectedLocation} />
        <div className="absolute left-10 top-[45%] mx-auto z-[400] hidden md:block">
          <DataView location={selectedLocation} />
        </div>
      </div>
      <div className="block md:hidden sm:px-4">
        <h2 className="text-xl font-semibold pt-8">Відділення: </h2>
        <DataView location={selectedLocation} />
      </div>
    </div>
  );
};

export default MapSection;
