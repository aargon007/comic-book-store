import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;