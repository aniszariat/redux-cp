import React from "react";
import { useDispatch } from 'react-redux';
import { saveToDo } from '../redux/reduxSlicer';
import "./Navbar.css";
import Button from '@material-ui/core/Button';





function NavBar() {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();
    const addTodo = () => {

        dispatch(saveToDo({
            item: input,
            done: false,
            id: Math.random()
        }));

    }



    return (
        <div>
            <form className="form__styling" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="input__styling"
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                   className="submit-btn__styling"
                    onClick={(e) => { 
                        addTodo();
                        setInput("");

                        console.log(e.target.previousSibling.innerHTML)

                    }
                    }
                >
                    Submit
                </button>
            </form>

        </div>
    );

}

export default NavBar;

