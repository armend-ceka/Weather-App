import React from 'react';
import Day from './day.js';
import DayRow from './dayRow.js'
import './content.css';


function Content(props) {
    var weather = props.data;
    var days = weather.forecast.forecastday;
    return (
        <div className="body">
            <div className="box">
                <div>CURRENT WEATHER</div><hr />
                <div className="content">
                    <div className="cont-img">
                        <img src={weather.current.condition.icon} height="128" alt="" />
                        <span className="temp">{weather.current.temp_c}°C<br /><i className="desc">{weather.current.condition.text}</i>
                        </span>
                    </div>
                    <div className="data">
                        Wind: {weather.current.wind_kph} km/h <br />
                        Wind Gust: {weather.current.gust_kph} km/h <br />
                        Pressure: {weather.current.pressure_mb} hPa <br />
                        Visibility: {weather.current.vis_km} km <br />
                        Humidity: {weather.current.humidity} % <br />
                    </div>
                </div>
            </div>
            <div className="box">
                <div>DAILY FORECAST:</div><hr />
                <div className="content">
                    {days.map(day =>
                        <Day day={day} key={day.date} />
                    )}
                </div>
            </div>
            <div className="box">
                <div>HOURLY FORECAST:</div><hr />
                <div className="content">
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>00:00</th>
                                <th>01:00</th>
                                <th>02:00</th>
                                <th>03:00</th>
                                <th>04:00</th>
                                <th>05:00</th>
                                <th>06:00</th>
                                <th>07:00</th>
                                <th>08:00</th>
                                <th>09:00</th>
                                <th>10:00</th>
                                <th>11:00</th>
                                <th>12:00</th>
                                <th>13:00</th>
                                <th>14:00</th>
                                <th>15:00</th>
                                <th>16:00</th>
                                <th>17:00</th>
                                <th>18:00</th>
                                <th>19:00</th>
                                <th>20:00</th>
                                <th>21:00</th>
                                <th>22:00</th>
                                <th>23:00</th>
                            </tr>
                        </thead>
                        <tbody>
                        {days.map(day => <DayRow day={day} key={day.date}/> )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Content;