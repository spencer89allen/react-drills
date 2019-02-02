import React from 'react'

export default function List(props) {

    let list = props.array.map((element, index) => {
        return <h2 key={index}>{element}</h2>
    })

    return (

        <div>

            <h1>To Do:</h1>

            {list}
            
        </div>
    )
}