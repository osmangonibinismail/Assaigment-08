
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Listed from './Listed/Listed';
import Footer from './Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
             
            <Footer></Footer>
        </div>
    );
};

export default Root;