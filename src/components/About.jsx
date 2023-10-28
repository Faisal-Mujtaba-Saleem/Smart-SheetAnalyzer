import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="container">
                <h1 className='text-center ' style={{ margin: '10rem' }}>{props.appName}</h1>
                <div className='bg-light' style={{
                    marginTop: '-8rem',
                    height: '10rem',
                    padding: '1.2rem'
                }}>
                    <p>
                        Hi, welcome to the {props.appName}, here you can set the names of any 5 subjects and the target marks for them once you do that then you can set multple rows for multiple students with the marks they acheive for each subjects and when you commit a row the data which will you provide about a student will save to us then in the end you can see the analyzations of your sheet rows in the forms of cards in which you can see the students names, the marks which they have acheived out of targeted marks belongs to specific subject and the total of all subjects marks and in the end you can see percentage too of every student, Thanks.
                    </p>
                </div>
            </div>
        </>
    )
}
