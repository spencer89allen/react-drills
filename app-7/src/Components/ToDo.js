import React from 'react'

export default function ToDo(props) {

    return (
        <div>

            <input onChange={ (e) => props.onChange(e.target.value)}></input>

        </div>
    )
}