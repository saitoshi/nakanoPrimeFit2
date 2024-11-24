import { FaqCard } from '../components/CardComponents/FaqCard';

export default function Faq() {
  return (
    <div id='faqPage'>
      <div className='pageContainer'>
        <h2>
          <p className='subHeader'>FAQ</p>
          <p className='mainHeader'>よくある質問</p>
        </h2>
        <FaqCard />
      </div>
    </div>
  );
}
