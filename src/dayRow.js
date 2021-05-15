import React from 'react'

function DayRow(props) {
    var hours = props.day.hour;
    function getDay(day) {
        switch (day) {
            case 0: return "Sun"; 
            case 1: return "Mon";
            case 2: return "Tue";
            case 3: return "Wed";
            case 4: return "Thur";
            case 5: return "Fri";
            case 6: return "Sat";
            default: return
        }
    }
    return (
        <tr>
            <td><b>{getDay(new Date(Date.parse(props.day.date)).getDay())}</b></td>
            {hours.map(hour =>
                <td key={hour.time_epoch}>
                    <img src={hour.condition.icon} alt="" height="32"/>
                    {hour.temp_c}°C
                </td>)}
        </tr>
    );
}

export default DayRow;