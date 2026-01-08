import Rive from '@rive-app/react-canvas';
import catRiv from '../../assets/cat.riv?url';
import SlotCounter from 'react-slot-counter';
import { useEffect, useState } from 'react';


function Footer() {
    const [views, setViews] = useState(0);
    useEffect(()=>{
        const viewsObj = async () => { 
            const response = await fetch('https://abacus.jasoncameron.dev/hit/amananwar/key');
            const data = await response.json();
            const views = data.value;
            setViews(views);
         }
         viewsObj();
    },[])
    return (
        <div className='w-full mt-12 mb-12 flex flex-col items-center'>
            <div className='w-64 h-64 sm:w-80 sm:h-80'>
                <Rive
                    src={catRiv}
                    style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                    stateMachines="State Machine 1"
                />
            </div>
            <div className='text-5xl sm:text-6xl rammetto-one-regular font-bold -mt-8 sm:-mt-12'>
                <SlotCounter value={views}/>
            </div>
            <h3 className='text-white/80 text-center text-lg rammetto-one-regular'>views</h3>

        </div>
    )
}

export default Footer
