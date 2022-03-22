import React from 'react'

const DisplayBox = (props) => {
    return (
        <div style={{display:'inline-flex'}}>
            {props.color.map(value => <div style={{backgroundColor:value,
                width:'150px',
                height:'150px',
                margin:'20px'}}>
                {value}</div>
                )
                }
        </div>
    )
}

export default  DisplayBox
