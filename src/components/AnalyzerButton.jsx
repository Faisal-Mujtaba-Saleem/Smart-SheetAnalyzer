import React from 'react'

export default function AnalyzerButton(props) {
    return (
        <>
            <div className="d-grid gap-2 col-2 mx-auto" style={{ margin: "2rem 0" }}>
                <button className="btn btn-primary" type="button">{props.analyzeBtnText}</button>
            </div>
        </>
    )
}
