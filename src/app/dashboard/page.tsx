import type { Metadata } from 'next';
import './style.css';
import SideMenu from '../components/SideMenu/SideMenu';
export default function Dashboard() {
  return (
    <div>
      <SideMenu />
      <div id='dashboardBody'>
        <div id='dashboardContainer'>
          <h2>
            <p className='subHeader'>DASHBOARD</p>
            <p className='mainHeader'>管理画面</p>
          </h2>
        </div>
      </div>
    </div>
  );
}
