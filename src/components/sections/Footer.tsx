import Rive from '@rive-app/react-canvas';
import catRiv from '../../assets/cat.riv?url';

function Footer() {
    return (
        <div className='w-full mt-12 mb-12 flex flex-col items-center'>
            <div className='w-full h-96'>
                <Rive
                    src={catRiv}
                    style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                    stateMachines="State Machine 1"
                />
            </div>
            <h3 className='text-white/80 text-center text-xl footer-text'></h3>
        </div>
    )
}

export default Footer
