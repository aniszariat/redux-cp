import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editToDo, editCheck } from '../redux/reduxSlicer';
import { selectTodoList } from '../redux/reduxSlicer';
import "./ListTask.css"

function ListTask({ item, done, id }) {

  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);
  const checkState = () => todoList.findIndex(el => el.id === id);

  const handleChange = () => {


    dispatch(
      editCheck(
        checkState(),

      )
    )
  }
  const breakThrough = (style) => done ?
    style = { textDecoration: 'line-through' } :
    style = { backgroundColor: 'none' };

  const handleDelete = () => {
    dispatch(
      deleteToDo(
        [
          todoList.findIndex(el => el.id === id), 1
        ]
      )
    )
  }

  const [content, setContent] = React.useState(false)
  const allowEdit = (e) => {

    switch (content) {
      case false: setContent(!content); break;
      case true: {
        setContent(!content);
        dispatch(
          editToDo(
            {
              newInput: e.target.
              previousSibling.previousSibling.innerHTML,
              index: todoList.findIndex(el => el.id === id)
            }
          )
        );

      }; break; 
      default : 


    }
  }


  return <div className="listTask__styling">
    <Checkbox
      checked={done}
      onChange={handleChange}
      name="checkedB"
      color="primary"
    />
    <p
      contentEditable={`${content}`}
      suppressContentEditableWarning={true}
      style={breakThrough()} >
      {item}
    </p>

    <button className="listTask-btn__styling" onClick={handleDelete}>delete task</button>
    <button className="listTask-btn__styling" onClick={allowEdit}> {!content ? 'edit' : 'save edit'}</button>
  </div>

}

export default ListTask;
