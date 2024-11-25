import type { Metadata } from 'next';
import './style.css';
import { DashboardMenu } from '../components/Dashboard Related/DashboardTab';
export default function Dashboard() {
  const tabs = ['サービス', 'ブログ', 'ユーザー'];
  return (
    <div className='pageContainer'>
      <h2>
        <p className='subHeader'>DASHBOARD</p>
        <p className='mainHeader'>管理画面</p>
      </h2>
      <div style={{ display: 'block' }}>
        <DashboardMenu />
      </div>
    </div>
  );
}
