import Day from "../Day/Day";
import './style.scss';

const Week = (props) => {   
    
    return(
        <tr>
            {props.week.map((object, index) => {
                return(
                    <Day key={index} day={object} />
                )
            })}
        </tr>
    )

} 

export default Week;