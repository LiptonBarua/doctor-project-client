
import chire from '../../../assets/images/chair.png'
import banner from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmentBanner = ({selectedDay, setSelectedDay}) => {

    return (
        <header>
            <div className="hero my-6" style={
                {
                    background: `url(${banner})`,
 
                }
            }>
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <img src={chire} className="md:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='md:mr-8'>
                      <DayPicker mode='single' selected={selectedDay} onSelect={setSelectedDay}>

                      </DayPicker>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;