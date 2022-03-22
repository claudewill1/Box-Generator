import React, {useState} from 'react'

const NewBox = (props) => {
    const [ color, setColor ] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSend(color);
        setColor("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Color</h1>
                <input type='text'
                    id='color'
                    placeholder='Any color'
                    value={color}
                    onChange={(e)=> setColor(e.target.value)}
                ></input>
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default NewBox;