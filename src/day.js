import React from 'react';
import './day.css'

function Day(props) {
    function getDay(day) {
        switch (day) {
            case 0: return "Sunday";
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
            default: return
        }
    }
    return (
        <div className="dayCard">
            <div className="day">
                {getDay(new Date(Date.parse(props.day.date)).getDay())}
            </div>
            <div className="icon">
                <img height="70" alt="" src={props.day.day.condition.icon} /><br />
                {props.day.day.condition.text}
            </div>
            <div className="temperature">
                <span>Min:</span>&nbsp;&nbsp;<span>Max:</span><br />
                <span className="min">{props.day.day.mintemp_c}°C</span>&nbsp;&nbsp;<span className="max">{props.day.day.maxtemp_c}°C</span>
            </div>
        </div>
    )
}

export default Day;