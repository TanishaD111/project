import './App.css';
import React, {useState} from 'react';
import axios from 'axios'

export default function App() {

  const [values,setValues] = useState({
    name:'',
})


const handleInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/user", values)
            .then(res => {
                

            })
            .catch(err => console.log(err));
    }

return (
    <div >
        <div >
            <h2 >Log In</h2>
            <form action="" onSubmit={handleSubmit}>
                <div >
                    <label ><strong>Name</strong></label>
                    <input type="text" placeholder='Enter name' name='name' onChange={handleInput} />
                </div>

                <button type='submit' ><strong>Log in</strong></button>
            </form>
        </div>
    </div>
)
}