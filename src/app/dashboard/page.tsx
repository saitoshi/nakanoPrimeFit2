import type { Metadata } from 'next';
import './style.css';
import { DashboardTab } from '../components/Dashboard Related/DashboardTab';
export default function Dashboard() {
  const tabs = ['サービス', 'ブログ', 'ユーザー'];
  return (
    <div>
      <div id='dashboardContainer'>
        <h2>
          <p className='subHeader'>DASHBOARD</p>
          <p className='mainHeader'>管理画面</p>
        </h2>
        <DashboardTab tabs={tabs} />
      </div>
    </div>
  );
}
