import type { Metadata } from 'next';
import { CSSProperties } from 'react';
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
  const introImgContainer: CSSProperties = {
    display: 'flex',
    margin: '0 10px 96px 10px',
  };
  return (
    <div>
      <div id='introSection'>
        <div className='rowSplit'>
          <div className='smlRightCol'>
            <div className='mobileIntroImgContainer'>
              <img src='/image/landingImage.jpeg' alt='landing' />
            </div>
            <p className='introMessage'>
              ここで<span>健康的</span>な
              <br />
              <span>イメチェン</span>をしませんか？
            </p>
            <div className='introFeature'>
              <span className='introFeaturePoint'>
                初心者
                <br />
                大歓迎
              </span>
              <span className='introFeaturePoint'>
                ４つの
                <br />
                サービス{' '}
              </span>
              <span className='introFeaturePoint'>
                ワンツー
                <br />
                ワン{' '}
              </span>
            </div>
            <div className='lineContact'>
              <span className='lineButton'>
                初回カウンセリング予約はLINEで！
              </span>
            </div>
          </div>
          <div className='bigLeftCol'>
            <div className='introImgContainer' style={introImgContainer}>
              <img src='/image/landingImage.jpeg' alt='landing' />
            </div>
          </div>
        </div>
      </div>
      <div id='serviceSection'>
        <div id='serviceSectionContainer'>
          <h2>
            <p className='subHeader'>SERVICE</p>
            <p className='mainHeader'>提供サービス</p>
          </h2>
        </div>
      </div>
      <div id='ownerSection'>
        <div id='ownerSectionContainer'>
          <h2>
            <p className='subHeader'>PROFILE</p>
            <p className='mainHeader'>代表プロフィール</p>
          </h2>
          <div className='rowSplit'>
            <div className='halfSplit'>
              <img
                style={{ borderRadius: '10px', margin: '10px 0' }}
                src='/image/ownerProfile.jpg'
                alt='owner image'
              />
            </div>
            <div className='halfSplit'>
              <h3>渡辺 開人</h3>
              <p>
                1998年生まれ　都内の大手パーソナルジムで店舗責任者として多くの人のカラダ作りに関わる
                2021年7月PrimeFitを設立　お客様１人１人のニーズに合わせた健康的なボディメイクの指導を行っている。
              </p>
              <h3>オーナーから一言</h3>
              <p>
                もともとガリガリだった私が、高トレと出会ったのは高校時代のラグビー
                身体が変わるにつれ、次気に自分に自信を持てるようになり、前向きになることができました
                自身の経験、ボデイメイクの素晴らしさをもっとたくさんの人に伝えたい　PrimeFitはそんな思い出スタートしました!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='locationSection'>
        <div id='locationSectionContainer'>
          <h2>
            <p className='subHeader'>LOCATION</p>
            <p className='mainHeader'>店舗情報</p>
          </h2>
          <div
            className='locationDetailContainer'
            style={{ margin: '60px 0 0 0', display: 'flex' }}>
            <div className='rowSplit'>
              <div className='halfSplit'>
                <h3>Prime Fit 中野</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
