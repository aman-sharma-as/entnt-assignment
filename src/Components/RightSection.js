import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import data from '../data';
import './RightSection.css';


const RightSection = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  // let firstData = data[0].appointment.date;
  // firstData = new Date(firstData).toLocaleDateString(locale, options)
  // console.log(new Date(firstData).toLocaleDateString(locale, options));
  // console.log(date.toLocaleDateString('en-IN', options));

  const locale = 'en-US';

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

  const getUsersOnSelectedDate = () => {
    const formattedDate = selectedDate.toLocaleDateString(locale,options);
    return data.filter(user => user.appointment.some(dateArr=> dateArr.date === formattedDate));
  };

  return (
    <div className="w-[30%] bg-accent-light flex flex-col items-center">
        <Calendar className="bg-white m-2 mt-10 p-8 border-none rounded-lg flex flex-col items-center shadow-md" 
         onChange={setSelectedDate} value={selectedDate}/>
        <div className="w-[100%] flex flex-col items-center">
          <div className='flex justify-center'>
            <div>{selectedDate.toDateString().slice(4)}</div>
          </div>
          {/* <div className="w-[77%] m-2 p-8 bg-white rounded-lg shadow-xl"> */}
          {
            getUsersOnSelectedDate().length > 0 ?
            (getUsersOnSelectedDate().map(user => (
              <ul key={user.id} className='flex flex-col gap-2 w-[77%] m-2 p-8 bg-white rounded-lg shadow-xl'>
                <li className='font-bold text-hotpink-dark flex justify-between'>
                  <div>Name</div>
                  <div>Time</div>
                </li>
                <li key={user.id} className='flex justify-between'>
                  <div>{user.firstName}</div>
                  <div>{user.appointment.filter((appointment) => appointment.date === selectedDate.toLocaleDateString(locale,options)).map((appointment) => (
                    <li key={appointment.time}>{appointment.time}</li>))}</div>
                </li>
              </ul>
              )
            )):(<div className='w-[78%] text-hotpink-dark font-bold m-2 p-8 bg-white rounded-lg shadow-xl'>No Appointments</div>)
          }
          {/* </div> */}
        </div>
    </div>
  )
}

export default RightSection