import type { Metadata } from 'next';
import { IService } from '../constants/type';
import { mockService } from '../utils/models/mockModels';
import { ServiceCard } from '../components/CardComponents/ServiceCard';
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Prime Fit Gym 中野 | サービス',
  keywords: 'パーソナルトレーニング、中野、脱毛、トレーニング、',
  openGraph: {
    title: 'Prime Fit Gym 中野 | サービス',
    type: 'website',
    images: `/image/mainLogo.png`,
  },
};

export default function Service() {
  return (
    <div>
      <div className='pageContainer'>
        <h2>
          <p className='subHeader'>SERVICE</p>
          <p className='mainHeader'>提供サービス</p>
          <p className='pageDescription'>
            現在、Prime Fitでは以下のサービスを提供しております。
          </p>
        </h2>
        <ul className='cardList'>
          {mockService.map((service: IService) => {
            return <ServiceCard key={service._id} service={service} />;
          })}
        </ul>
      </div>
    </div>
  );
}
