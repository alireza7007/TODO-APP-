import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo(props) {
 
  return (
    // 'completed' class for completed todos
    <div className={`todo ${props.completed?'completed':''}`} style={{ display: 'flex' }}>
        <li className="todo-item">{props.title}</li>

        <button className="check-btn" onClick={props.handelEdit}>
        <DoneIcon />
        </button>

        <button className="trash-btn" onClick={props.handelRemove}>
        <DeleteIcon />
        </button>
    </div>
  )
}
