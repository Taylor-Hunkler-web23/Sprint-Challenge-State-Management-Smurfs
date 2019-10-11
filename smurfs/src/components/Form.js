import React, { useState } from 'react';

const Form = props => {
    const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' })
    //  console.log(newSmurf, 'new')



    const handleChange = event => {
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        // console.log(newSmurf, "new")
        event.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({

            name: "",
            age: "",
            height: "",
        })
    }

    return (
        <form>
            <input
                name='name'
                type='text'
                placeholder='Name'
                onChange={handleChange}

            />
            <input
                name='age'
                type='number'
                placeholder='Age'
                onChange={handleChange}

            />
            <input
                name='height'
                type='number'
                placeholder='Height'
                onChange={handleChange}

            />


            <button onClick={handleSubmit}>Add</button>

        </form>


    )
}


export default Form;