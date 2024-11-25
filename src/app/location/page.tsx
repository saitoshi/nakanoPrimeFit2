import type { Metadata } from 'next';
import { LocationCard } from '../components/LocationCard/LocationCard';
export default function Location() {
  return (
    <div>
      <div className='pageContainer'>
        <h2>
          <p className='subHeader'>LOCATION</p>
          <p className='mainHeader'>店舗情報</p>
        </h2>
        <LocationCard />
      </div>
    </div>
  );
}
