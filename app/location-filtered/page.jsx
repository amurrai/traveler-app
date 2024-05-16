import React from 'react';
import LocationList from '@/components/LocationList';

const FilteredLocationsPage = ({ userId }) => {
  return (
    <div>
      <LocationList userId={userId} />
    </div>
  );
};

export default FilteredLocationsPage;
