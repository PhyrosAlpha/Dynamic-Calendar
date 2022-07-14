import './style.scss';
import Styles from '../EventTypeStyles';

const Board = (props) => {

    function showBoard(){
        if(props.show === true){
            return { opacity:0.9, visibility:"visible" }
        }
        if(props.show === false){
            return { opacity:0, visibility:"hidden" }
        }
    }

    function renderElementContent(content, index){
        return(
            <div style={{...Styles[content.eventType]}} 
                className='board-content' 
                key={index}>{content.content}
            </div>
        )
    }

    return (
        <div style={showBoard()} className="board">
            {props.content.map((element, index) => {
                return(
                    renderElementContent(element, index)
                )
            })}
        </div>
    )
}

export default Board;