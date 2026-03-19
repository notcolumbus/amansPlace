import Rive from '@rive-app/react-canvas';
import catRiv from '../../assets/cat.riv?url';
import SlotCounter from 'react-slot-counter';
import { useEffect, useState } from 'react';


function Footer() {
    const [views, setViews] = useState(0);
    useEffect(() => {
        const controller = new AbortController();

        const loadViews = async () => {
            try {
                const response = await fetch('https://abacus.jasoncameron.dev/hit/amananwar/key', {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    return;
                }

                const data: { value?: number } = await response.json();
                if (typeof data.value === 'number') {
                    setViews(data.value - 200);
                }
            } catch (error) {
                if ((error as DOMException).name !== 'AbortError') {
                    return;
                }
            }
        };

        void loadViews();
        return () => controller.abort();
    }, []);
    return (
        <div className='w-full mt-12 mb-12 flex flex-col items-center'>
            <div className='w-64 h-64 sm:w-80 sm:h-80'>
                <Rive
                    src={catRiv}
                    style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                    stateMachines="State Machine 1"
                />
            </div>
            <div className='text-5xl sm:text-6xl rammetto-one-regular offwhite font-bold -mt-8 sm:-mt-12'>
                <SlotCounter value={views} />
            </div>
            <h3 className='text-center text-lg rammetto-one-regular offwhite'>views</h3>

        </div>
    )
}

export default Footer
