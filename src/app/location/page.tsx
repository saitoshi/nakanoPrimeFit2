import type { Metadata } from 'next';
import { LocationCard } from '../components/LocationCard/LocationCard';
export default function Location() {
  return (
    <div>
      <div className='pageContainer'>
        <LocationCard />
      </div>
    </div>
  );
}
