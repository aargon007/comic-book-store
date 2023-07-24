import BottonNav from '../pages/Shared/BottonNav';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='md:px-[500px]'>
            <Header/>
            <Outlet></Outlet>
            {/* <BottonNav></BottonNav> */}
            <div className='fixed bottom-0 w-full bg-white z-10 md:left-1 md:px-[500px]'>
                <BottonNav/>
            </div>
        </div>
    );
};

export default Main;