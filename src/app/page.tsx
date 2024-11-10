import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Prime Fit Gym 中野 | トップ',
  description: 'A website listing past projects and writings.',
  keywords: 'パーソナルトレーニング、中野、脱毛、トレーニング、',
  openGraph: {
    title: 'Prime Fit Gym 中野 | トップ',
    description: 'A website listing past projects and writings.',
    type: 'website',
    images: `/image/mainLogo.png`,
  },
};
export default function Home() {
  return <></>;
}
