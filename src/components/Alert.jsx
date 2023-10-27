import React from 'react'

export default function Alert(props) {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            <div className={`alert alert-${props.customAlert.type} my-2`} role="alert">
                <strong>{`${capitalize(props.customAlert.type)}`}:
                </strong>{` ${props.customAlert.msg} `}
                {
                    props.customAlert.type === 'warning' ?
                        <u className='text-primary ' style={{ cursor: 'pointer' }} onClick={props.undo}>undo</u> :
                        null
                }
            </div >
        </>
    )
}
