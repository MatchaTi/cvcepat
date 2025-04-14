import { Icon } from '@iconify/react/dist/iconify.js';
import { useCVStore } from '../store/useCVStore';
import { exportPDF } from '../util/PDF';
import { Link, useLocation } from 'react-router';
import { useFirstTimeStore } from '../store/firstTimeStore';
import { driverObj } from '../util/tutorial';
import clsx from 'clsx';

export default function Navbar() {
  const { isDummyData, toggleDummy, setDummyData, clearData } = useCVStore();
  const { isNotFirstTime, setIsNotFirstTime } = useFirstTimeStore();
  const location = useLocation();

  if (!isNotFirstTime) {
    driverObj.drive();
    setIsNotFirstTime();
  }

  const setDummy = () => {
    toggleDummy();
    if (!isDummyData) {
      setDummyData();
    } else {
      clearData();
    }
  };

  return (
    <div className='sticky top-0 z-50 p-0 navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='p-0 mr-2 lg:hidden btn btn-ghost'>
            <Icon icon='mynaui:chart-bar-one-solid' className='text-xl rotate-90' />
          </div>
          <ul
            tabIndex={0}
            className='p-2 mt-3 space-y-2 w-52 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1'
          >
            <li>
              <Link to={'/form'}>Form</Link>
            </li>
            <li>
              <Link to={'/result'}>Hasil</Link>
            </li>
            <li>
              <Link to={'/panduan'}>Panduan</Link>
            </li>
            <li>
              <a href={'https://github.com/MatchaTi/cvcepat'} target='_blank'>
                Github
              </a>
            </li>
            <li>
              <button type='button' onClick={setDummy} className='btn'>
                <Icon icon={isDummyData ? 'charm:circle-tick' : 'material-symbols:circle-outline'} />
                <span>Contoh</span>
              </button>
            </li>
            <li>
              <button type='button' onClick={exportPDF} className='btn'>
                <Icon icon='material-symbols:download' />
                <span>Ekspor ke PDF</span>
              </button>
            </li>
          </ul>
        </div>
        <Link id='home' to={'/'} className='flex gap-1 items-center'>
          <Icon icon='mynaui:lightning-solid' className='text-dark-blue' />
          <span className='text-2xl font-bold'>CVCEPAT</span>
        </Link>
      </div>
      <div className='hidden lg:flex navbar-center'>
        <ul className='menu menu-horizontal'>
          <li id='form' className={clsx('opacity-50', location.pathname === '/form' && 'opacity-100')}>
            <Link to={'/form'}>Form</Link>
          </li>
          <li id='hasil' className={clsx('opacity-50', location.pathname === '/result' && 'opacity-100')}>
            <Link to={'/result'}>Hasil</Link>
          </li>
          <li id='panduan' className={clsx('opacity-50', location.pathname === '/panduan' && 'opacity-100')}>
            <Link to={'/panduan'}>Panduan</Link>
          </li>
          <li id='github' className='opacity-50'>
            <a href={'https://github.com/MatchaTi/cvcepat'} target='_blank'>
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className='hidden md:flex navbar-end'>
        <div className='flex gap-3 items-center'>
          <button id='dummy' type='button' onClick={setDummy} className='btn'>
            <Icon icon={isDummyData ? 'charm:circle-tick' : 'material-symbols:circle-outline'} />
            <span>Contoh</span>
          </button>
          <button id='pdf' type='button' onClick={exportPDF} className='btn'>
            <Icon icon='material-symbols:download' />
            <span>Ekspor ke PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
