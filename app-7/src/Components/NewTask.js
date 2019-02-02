import React from 'react'

export default function NewTask(props) {

    return (
        <div>

            <button onClick={props.action}>{props.children}</button>

        </div>
    )
}