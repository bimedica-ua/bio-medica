import React, { Fragment } from 'react';
import { MapLocation } from '@/constants';

function renderAddress(address: string) {
  return address.split('\\n').map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));
}

export function DataView({ location }: { location: MapLocation }) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="font-bold md:text-center">
        {renderAddress(location.address)}
      </p>
      <p>{location.phone}</p>
      <p>
        {location.schedule.weekdays}{' '}
        {location.schedule.saturday && <> {location.schedule.saturday} </>}
      </p>
    </div>
  );
}
