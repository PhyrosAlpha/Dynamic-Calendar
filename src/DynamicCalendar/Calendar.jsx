import { useState } from 'react';
//import CustomInputs from './CustomInputs';
import PTMonths from './PTMonths';
import './style.scss';
import Week from './Week/Week';
import CalendarIcon from '../assets/images/calendar-icon.svg'

const Calendar = (props) => {

    //console.log("Primeiro Carregamento");

/*     useEffect(() => {
        console.log("Componente Calendar Iniciado")

    })

    useEffect(() => {
        console.log("Componente Calendar Iniciado - 2")

    })

    useEffect(() => {
        console.log("Componente Calendar Iniciado - Desmontou")

        return () => {
            console.log("Desmontou! o.o")
        };

    }) */
    const [selectedDate, setSelectedDate ] = useState(new Date());

    function generateCalendar(date){
        let actualDate = new Date(date);
        let calendar = [];
        actualDate.setDate(1)
        let dayInCurrentWeek = actualDate.getDay();
        actualDate.setDate(actualDate.getDate() - dayInCurrentWeek);

        for(let w = 0; w < 6;w++){
            let newWeek = []
            let weekDayCount = 0;
            while(weekDayCount < 7){
                let newObject = {}
                newObject['data'] = [];
                newObject['date'] = new Date(actualDate);

                loadDataWithinDays(newObject);

                newWeek.push(newObject);
                actualDate.setDate(actualDate.getDate() + 1);
                weekDayCount += 1;
            }
            calendar.push(newWeek);
        }
        return calendar;      
    }

/*     function actualMarkedDate(){

    } */

    function loadDataWithinDays(day){
        let dayDate = day.date;
        if(props.data !== undefined && props.data !== null){
            for(let obj of props.data){
                if(obj.date.getFullYear() === dayDate.getFullYear() &&
                   obj.date.getMonth() === dayDate.getMonth() &&
                   obj.date.getDate() === dayDate.getDate() ){
                    
                    day.data.push(obj);            
                }
            }
        }
    }

    function runExternalsFunctions(newMonth){
        if(props.onSelectMonthEvent === undefined || 
           props.onSelectMonthEvent === null){
            return;
        }

        let dateData = {
            initialDate: new Date(newMonth),
            endDate: new Date(newMonth)
        }

        props.onSelectMonthEvent(dateData);
    }

    function handleNextMonth(date){
        let newMonth = new Date(date);
        newMonth.setMonth(newMonth.getMonth() + 1)
        setSelectedDate(newMonth);
        runExternalsFunctions(newMonth);

    }

    function handlePreviousMonth(date){
        let newMonth = new Date(date);
        newMonth.setMonth(newMonth.getMonth() - 1)
        setSelectedDate(newMonth);
        runExternalsFunctions(newMonth);

    }

    return(
        <div className="calendar">
            <div className="calendar-date-display">
                {/* <img src={CalendarIcon} alt="Calendar Icon" /> */}
                <span onClick={() => {handlePreviousMonth(selectedDate)}}>Prev</span>
                    <h3>{PTMonths[selectedDate.getMonth()]}/{selectedDate.getFullYear()}</h3>
                <span onClick={() => {handleNextMonth(selectedDate)}}> Next </span>
            </div>

            <div className="calendar-area-days">
                <table>
                    <thead>
                        <tr>
                            <th>D</th>
                            <th>S</th>
                            <th>T</th>
                            <th>Q</th>
                            <th>Q</th>
                            <th>S</th>
                            <th>S</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateCalendar(selectedDate).map((object, index) => {
                            return(<Week key={index} week={object} />)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Calendar;