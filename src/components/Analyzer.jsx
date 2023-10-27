import React from 'react'

export default function Analyzer(props) {
    const { studentName, subject_1Name, subject_2Name, subject_3Name, subject_4Name, subject_5Name, subject_1Marks, subject_2Marks, subject_3Marks, subject_4Marks, subject_5Marks, passingCriteria, subject_1Target, subject_2Target, subject_3Target, subject_4Target, subject_5Target } = props;

    const target = subject_1Target + subject_2Target + subject_3Target + subject_4Target + subject_5Target;

    const totalMarksObtained = subject_1Marks + subject_2Marks + subject_3Marks + subject_4Marks + subject_5Marks;

    const Percentage = (MarksObtained, target) => {
        const percentage = (MarksObtained / target) * 100;
        return percentage;
    }
    const ispassed = (criteria) => {
        criteria = Number.parseInt(passingCriteria);
        if (Percentage(totalMarksObtained, target) >= 100) {
            return "TOP";
        } else if (Percentage(totalMarksObtained, target) >= criteria) {
            return "PASSED";
        }
        else {
            return "FAILED";
        }
    }

    const badgeClr = () => {
        if (ispassed(passingCriteria) === 'TOP') {
            return 'success'
        } else if (ispassed(passingCriteria) === 'PASSED') {
            return 'primary'
        } else {
            return 'danger'
        }
    }

    return (
        <>
            <ol className="list-group ">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto" style={{ padding: '0 4.5rem' }}>
                        <div className="fw-bold">Student Name</div>
                        {studentName}
                    </div>
                    <span className={`badge bg-${badgeClr()} rounded-pill`}>{ispassed(passingCriteria)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{subject_1Name}</div>
                        {subject_1Marks} out of {subject_1Target}
                    </div>
                    {/* <span className="badge bg-primary rounded-pill">14</span> */}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{subject_2Name}</div>
                        {subject_2Marks} out of {subject_2Target}
                    </div>
                    {/* <span className="badge bg-primary rounded-pill">14</span> */}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{subject_3Name}</div>
                        {subject_3Marks} out of {subject_3Target}
                    </div>
                    {/* <span className="badge bg-primary rounded-pill">14</span> */}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{subject_4Name}</div>
                        {subject_4Marks} out of {subject_4Target}
                    </div>
                    {/* <span className="badge bg-primary rounded-pill">14</span> */}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{subject_5Name}</div>
                        {subject_5Marks} out of {subject_5Target}
                    </div>
                    {/* <span className="badge bg-primary rounded-pill">14</span> */}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto" style={{ padding: '0 4.5rem' }}>
                        <div className="fw-bold">Total Marks Obtained </div>
                        {totalMarksObtained} out of {target}
                    </div>
                    {/* <span className="badge bg-primary rounded-pill">14</span> */}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto" style={{ padding: '0 4.5rem' }}>
                        <div className="fw-bold">Marks Percentage</div>
                        {Percentage(totalMarksObtained, target)}%
                    </div>
                    {/* <span className="badge bg-primary rounded-pill">14</span> */}
                </li>
            </ol >
        </>
    )
}
