import Rive from '@rive-app/react-canvas';
import catRiv from '../../assets/cat.riv?url';

function Footer() {
    return (
        <div className='w-full h-96 mt-12'>
            <Rive
                src={catRiv}
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                stateMachines="State Machine 1"
            />
        </div>
    )
}

export default Footer
