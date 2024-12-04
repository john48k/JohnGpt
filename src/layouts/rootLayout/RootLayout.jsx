import { Outlet } from 'react-router-dom';
import './rootLayout.css';

const RootLayout = () => {
  return (
    <div className='rootLayout'>
      <header>
        <link to="/"></link>
        <img src="/logo.png" alt="" />
        <span>JohnGPT</span>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default RootLayout;