import { useState, useEffect } from 'react'
import React from 'react'
import './Schedule.css'

const Schedule = () => {
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };


    const years = [];
    for (let i = 2024; i <= new Date().getFullYear(); i++) {
        years.push(i);
    }

    const [message, setMessage] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search button clicked!');
        console.log(`Date: ${date}, Month: ${month}, Year: ${year}`);
        setMessage(`Thank you, We will contact you soon...`);

        setTimeout(() => {
            setMessage('')
        }, 10000)
    };

    return (
        <div className='ScheduleAll'>

            <div className='Schdule-Heading'>
                <h1>Schedule A Visit</h1>
            </div>

            <form id='schedule-search'>
                <div className="Dates">
                    <p>   Date:</p>
                    <div>

                        <select value={date} onChange={handleDateChange}>
                            {Array.from(Array(31), (_, i) => i + 1).map((day) => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="Dates">
                    <p>  Month:</p>
                    <div>

                        <select value={month} onChange={handleMonthChange}>
                            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                                <option key={index} value={index + 1}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="Dates">
                    <p>   Year:</p>
                    <div>

                        <select value={year} onChange={handleYearChange}>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button onClick={handleSearch}>Visit Now</button>
            </form>
            {message && <p className='contact-message'>{message}</p>}
        </div>
    )
}

export default Schedule;
