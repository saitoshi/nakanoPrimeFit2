import { Footer } from '../components/Footer/Footer';
export default function Contact() {
  return (
    <>
      <div className='pageContainer'>
        <h2>
          <p className='subHeader'>CONTACT</p>
          <p className='mainHeader'>お問い合わせ</p>
        </h2>
        <p>
          弊社へのお問い合わせはライン経由でお願いしております。
          <br />
          登録は以下のボタンでお願いいたします。
        </p>
      </div>
      <Footer />
    </>
  );
}
