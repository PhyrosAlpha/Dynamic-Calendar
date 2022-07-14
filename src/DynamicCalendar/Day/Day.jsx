import { useState } from 'react'
import Board from '../Board/Board'
import './style.scss'

const Day = (props) => {

    const [ showBoard, setShowBoard ] = useState(false);

    return(
        <td onMouseEnter={() => {setShowBoard(true)}} 
            onMouseLeave={() => {setShowBoard(false)}}>
                
            {props.day.date.getDate()}
            <Board content={props.day.data} show={showBoard} />
        </td>
    )
}

export default Day;