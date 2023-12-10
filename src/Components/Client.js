import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';
import { FaUserEdit } from "react-icons/fa";
import { FaCirclePlus, FaCircleCheck } from "react-icons/fa6";
// import { TiDelete } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import './Client.css';

const Client = ({id, firstName, lastName, location, appointment}) => {
    // This will define either to edit value or not (toggle between true and false)
    const [isEditable, setIsEditable] = useState(false);
    
    // Use to change the value from props
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [newLocation, setNewLocation] = useState(location);

    const locale = 'en-US';

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    const [appointments, setAppointments] = useState(appointment);
    const [newDate, setNewDate] = useState(new Date());
    // const [selectedDate, setSelectedDate] = useState(new Date());


    //used to store date and time
        // let stringDate;
        // let stringTime;
        // appointments.map((appointment) =>{
        //     stringDate = appointment.date;
        //     stringTime = appointment.time;
        //     newDate.push(new Date(stringDate+' '+stringTime));
        // })

    // Toggling isEditable value
    function changeEditMode() {
        setIsEditable(!isEditable);
    }

    // Change the values from the user
    function newFirstNameValue(event){
        setNewFirstName(event.target.value);
    }
    function newLastNameValue(event){
        setNewLastName(event.target.value);
    }
    function newLocationValue(event){
        setNewLocation(event.target.value);
    }

    const handleDateChange = (date) => {
        console.log(date);
        setNewDate(date);
    };    

    const addAppointment = () => {
        let addDateString = {
            date: newDate.toLocaleDateString(locale,options),
            time: newDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit',hour12:false})
        }
        setAppointments([...appointments, addDateString]);
        console.log(...appointments, newDate);
        console.log(newDate);
    };

    const deleteAppointment = (index) => {
        const updatedAppointments = [...appointments];
        updatedAppointments.splice(index, 1);
        setAppointments(updatedAppointments);
    };
    
    
    return (
    <div className="flex justify-between bg-accent-light px-10 py-5 w-[100%] rounded-lg shadow-lg">
        <div className={`client-${id} flex flex-col gap-1`}>
            <div className="flex gap-x-2">
                <div className="w-[150px]">First Name</div>
                {
                    /* Check the value is editable or not and
                    accordingly toggle b/w form or value */
                    isEditable ? <input type='text' className="rounded-md pl-2 font-[500]" defaultValue={newFirstName} onChange={newFirstNameValue}></input>
                    : <div className="text-hotpink-dark pl-2 font-[500]">{newFirstName}</div>
                }
            </div>    
            <div className="flex gap-x-2">
                <div className="w-[150px]">Last Name</div>
                {
                    isEditable ? <input type='text' className="rounded-md pl-2 font-[500]" defaultValue={newLastName} onChange={newLastNameValue}></input>
                    : <div className="text-hotpink-dark pl-2 font-[500]">{newLastName}</div>
                }
            </div>    
            <div className="flex gap-x-2">
                <div className="w-[150px]">Location</div>
                {
                    isEditable ? <input type='text' className="rounded-md pl-2 font-[500]" defaultValue={newLocation} onChange={newLocationValue}></input>
                    : <div className="text-hotpink-dark pl-2 font-[500]">{newLocation}</div>
                }
            </div>
            <div className="allAppointments flex gap-x-2">
                <div className="w-[150px]">Appointments</div>
                {
                    isEditable ? 
                    <ul className='flex flex-col justify-evenly gap-1'>
                        {
                            appointments.map((appointment, index) => (
                                <li key={index} className='flex justify-center gap-2'>
                                    <DateTimePicker onChange={handleDateChange} value={appointment.date+' '+appointment.time} disableClock
                                    className="rounded-md flex w-[200px]" format='ddMMMy h:mm:ss a'/>
                                    <button onClick={() => deleteAppointment(index)}><MdDelete /></button>
                                </li>
                              ))                      
                        }
                    </ul>
                    : 
                    <ul className='pl-2 flex flex-col justify-evenly gap-1'>
                        {
                            appointments.map((appointment, index) => (
                            <li key={index} className='flex justify-center gap-2'>
                                <div className='text-purple-light font-[700]'>{appointment.date}</div>
                                <div className='text-purple-light font-[700]'>{appointment.time}</div>
                                <button onClick={() => deleteAppointment(index)}><MdDelete /></button>
                            </li>
                            ))                    
                        }
                    </ul>

                    // <div className='flex gap-x-2'><div className="pl-2 text-purple-light font-[700]">{newDate.toLocaleDateString(locale, options)}</div>
                    // <div className="pl-2 text-purple-light font-[700]">{newDate.toLocaleTimeString('en-US')}</div></div>
                }
            </div>
        </div>
        <div className="flex flex-col justify-start gap-2">
            <div className="flex flex-col cursor-pointer items-center gap-1 hover:text-purple-light transition-[0.8s]" onClick={addAppointment}>
                <button><FaCirclePlus  fontSize="1.2rem"/></button>
                <div className="text-[0.6rem]">Add Apointment</div>
            </div>
            <div className="flex flex-col cursor-pointer items-center gap-1 hover:text-purple-light transition-[0.8s]" onClick={changeEditMode}>
                {
                    isEditable ? <div><button><FaCircleCheck fontSize="1.5rem"/></button>
                    <div className="text-[0.6rem]">Done</div></div>
                    : <div><button><FaUserEdit fontSize="1.5rem"/></button>
                    <div className="text-[0.6rem]">Edit</div></div>
                }
            </div>
            {/* <div className="flex flex-col cursor-pointer items-center gap-1 hover:text-red-600 transition-[0.8s]" onClick={deleteAppointment}>
                <button><TiDelete fontSize="1.5rem"/></button>
                <div className="text-[0.6rem]">Delete</div>
            </div> */}
        </div>
    </div>
    )
}

export default Client