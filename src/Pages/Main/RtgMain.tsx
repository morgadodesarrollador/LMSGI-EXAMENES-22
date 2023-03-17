import './RtgMain.css';
import {Outlet} from 'react-router-dom';

export const RtgMain = () => {
    return(
        <main>
            <Outlet/>
        </main>
    )
}