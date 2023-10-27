import React, { useState } from 'react';

export default function Row(props) {
    const { index, sno, row, updateRows, subjects_names, searchbarText, showAlert, deleteRow } = props;

    const { subject_1Name, subject_2Name, subject_3Name, subject_4Name, subject_5Name } = subjects_names;

    const [studentName, setStudentName] = useState('');
    const [subject_1Marks, setSubject_1Marks] = useState('0');
    const [subject_2Marks, setSubject_2Marks] = useState('0');
    const [subject_3Marks, setSubject_3Marks] = useState('0');
    const [subject_4Marks, setSubject_4Marks] = useState('0');
    const [subject_5Marks, setSubject_5Marks] = useState('0');

    const [buttonText, setButtonText] = useState('Commit');
    const [isEditIcon, setIsEditIcon] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    const handleEdit_CommitClick = (event) => {
        const condition = subject_1Name === '' || subject_2Name === '' || subject_3Name === '' || subject_4Name === '' || subject_5Name === '';
        if (condition) {
            alert('First set the subjects names please.');
        }
        else if (studentName === '') {
            alert(`Can't commit without student name.`);
        }
        else {
            if (buttonText === 'Commit') {
                setButtonText('Edit');
                setIsEditIcon(true);
                setReadOnly(true);
                const newData = {
                    id: index,
                    studentName: studentName,
                    subject_1Marks: Number.parseFloat(subject_1Marks),
                    subject_2Marks: Number.parseFloat(subject_2Marks),
                    subject_3Marks: Number.parseFloat(subject_3Marks),
                    subject_4Marks: Number.parseFloat(subject_4Marks),
                    subject_5Marks: Number.parseFloat(subject_5Marks),
                    btnText: 'Edit',
                    isEditIcon: isEditIcon,
                    readOnly: readOnly,
                }
                updateRows(index, newData);
                showAlert(`Row.${sno} comitted successfully!`, 'success')
            } else {
                setButtonText('Commit');
                setIsEditIcon(false);
                setReadOnly(false);
                const newData = {
                    id: index,
                    studentName: studentName,
                    subject_1Marks: Number.parseFloat(subject_1Marks),
                    subject_2Marks: Number.parseFloat(subject_2Marks),
                    subject_3Marks: Number.parseFloat(subject_3Marks),
                    subject_4Marks: Number.parseFloat(subject_4Marks),
                    subject_5Marks: Number.parseFloat(subject_5Marks),
                    btnText: 'Commit',
                    isEditIcon: isEditIcon,
                    readOnly: readOnly,
                }
                updateRows(index, newData)
            }
        }
    }
    const handleOnChange = (e) => {
        if (e.target.name === 'std_name-input') {
            setStudentName(e.target.value);
            const newData = {
                id: index,
                studentName: e.target.value,
                subject_1Marks: Number.parseFloat(subject_1Marks),
                subject_2Marks: Number.parseFloat(subject_2Marks),
                subject_3Marks: Number.parseFloat(subject_3Marks),
                subject_4Marks: Number.parseFloat(subject_4Marks),
                subject_5Marks: Number.parseFloat(subject_5Marks),
                btnText: buttonText,
                isEditIcon: isEditIcon,
                readOnly: readOnly,
            }
            updateRows(index, newData);
        }
        else if (e.target.name === 'sub_1-Marks') {
            setSubject_1Marks(e.target.value);
            const newData = {
                id: index,
                studentName: studentName,
                subject_1Marks:
                    (e.target.value === '' ?
                        0 :
                        (/^0\d/.test(e.target.value) && e.target.value.length === 2) ?
                            e.target.value.slice(1) : e.target.value),
                subject_2Marks: Number.parseFloat(subject_2Marks),
                subject_3Marks: Number.parseFloat(subject_3Marks),
                subject_4Marks: Number.parseFloat(subject_4Marks),
                subject_5Marks: Number.parseFloat(subject_5Marks),
                btnText: buttonText,
                isEditIcon: isEditIcon,
                readOnly: readOnly,
            }
            updateRows(index, newData);
        }
        else if (e.target.name === 'sub_2-Marks') {
            setSubject_2Marks(e.target.value);
            const newData = {
                id: index,
                studentName: studentName,
                subject_1Marks: Number.parseFloat(subject_1Marks),
                subject_2Marks:
                    (e.target.value === '' ?
                        0 :
                        (/^0\d/.test(e.target.value) && e.target.value.length === 2) ?
                            e.target.value.slice(1) : e.target.value),
                subject_3Marks: Number.parseFloat(subject_3Marks),
                subject_4Marks: Number.parseFloat(subject_4Marks),
                subject_5Marks: Number.parseFloat(subject_5Marks),
                btnText: buttonText,
                isEditIcon: isEditIcon,
                readOnly: readOnly,
            }
            updateRows(index, newData);
        }
        else if (e.target.name === 'sub_3-Marks') {
            setSubject_3Marks(e.target.value);
            const newData = {
                id: index,
                studentName: studentName,
                subject_1Marks: Number.parseFloat(subject_1Marks),
                subject_2Marks: Number.parseFloat(subject_2Marks),
                subject_3Marks:
                    (e.target.value === '' ?
                        0 :
                        (/^0\d/.test(e.target.value) && e.target.value.length === 2) ?
                            e.target.value.slice(1) : e.target.value),
                subject_4Marks: Number.parseFloat(subject_4Marks),
                subject_5Marks: Number.parseFloat(subject_5Marks),
                btnText: buttonText,
                isEditIcon: isEditIcon,
                readOnly: readOnly,
            }
            updateRows(index, newData);
        }
        else if (e.target.name === 'sub_4-Marks') {
            setSubject_4Marks(e.target.value);
            const newData = {
                id: index,
                studentName: studentName,
                subject_1Marks: Number.parseFloat(subject_1Marks),
                subject_2Marks: Number.parseFloat(subject_2Marks),
                subject_3Marks: Number.parseFloat(subject_4Marks),
                subject_4Marks:
                    (e.target.value === '' ?
                        0 :
                        (/^0\d/.test(e.target.value) && e.target.value.length === 2) ?
                            e.target.value.slice(1) : e.target.value),
                subject_5Marks: Number.parseFloat(subject_5Marks),
                btnText: buttonText,
                isEditIcon: isEditIcon,
                readOnly: readOnly,
            }
            updateRows(index, newData);
        }
        else if (e.target.name === 'sub_5-Marks') {
            setSubject_5Marks(e.target.value);
            const newData = {
                id: index,
                studentName: studentName,
                subject_1Marks: Number.parseFloat(subject_1Marks),
                subject_2Marks: Number.parseFloat(subject_2Marks),
                subject_3Marks: Number.parseFloat(subject_4Marks),
                subject_4Marks: Number.parseFloat(subject_5Marks),
                subject_5Marks:
                    (e.target.value === '' ?
                        0 :
                        (/^0\d/.test(e.target.value) && e.target.value.length === 2) ?
                            e.target.value.slice(1) : e.target.value),
                btnText: buttonText,
                isEditIcon: isEditIcon,
                readOnly: readOnly,
            }
            updateRows(index, newData);
        }
    }

    return (
        studentName.toLowerCase().includes(searchbarText.toLowerCase()) ||
        subject_1Marks.toLowerCase().includes(searchbarText.toLowerCase()) ||
        subject_2Marks.toLowerCase().includes(searchbarText.toLowerCase()) ||
        subject_3Marks.toLowerCase().includes(searchbarText.toLowerCase()) ||
        subject_4Marks.toLowerCase().includes(searchbarText.toLowerCase()) ||
        subject_5Marks.toLowerCase().includes(searchbarText.toLowerCase()) ||
        buttonText.toLowerCase().includes(searchbarText.toLowerCase())
    )
        &&
        (
            <>
                <tr style={{ textAlign: 'center' }} className='table-info'>
                    <th style={{ padding: '1rem' }} scope="row">{sno}</th>
                    <td>
                        <input className='form-control text-center ' type="text" name="std_name-input" readOnly={readOnly} id="std_name-input" value={row.studentName} onChange={handleOnChange} />
                    </td>
                    <td>
                        {/* <span>Maths</span> */}
                        <input className='form-control text-center ' type="number" name="sub_1-Marks" readOnly={readOnly} id="sub_1-input" value={row.subject_1Marks} onChange={handleOnChange} />
                    </td>
                    <td>
                        {/* <span>Physics</span> */}
                        <input className='form-control text-center ' type="number" name="sub_2-Marks" readOnly={readOnly} id="sub_2-input" value={row.subject_2Marks} onChange={handleOnChange} />
                    </td>
                    <td>
                        {/* <span>Chemistry</span> */}
                        <input className='form-control text-center ' type="number" name="sub_3-Marks" readOnly={readOnly} id="sub_3-input" value={row.subject_3Marks} onChange={handleOnChange} />
                    </td>
                    <td>
                        {/* <span>Biology</span> */}
                        <input className='form-control text-center ' type="number" name="sub_4-Marks" readOnly={readOnly} id="sub_4-input" value={row.subject_4Marks} onChange={handleOnChange} />
                    </td>
                    <td>
                        {/* <span>S.St</span> */}
                        <input className='form-control text-center ' type="number" name="sub_5-Marks" readOnly={readOnly} id="sub_5-input" value={row.subject_5Marks} onChange={handleOnChange} />
                    </td>
                    <td >
                        <button className='btn btn-primary ' onClick={handleEdit_CommitClick}>{buttonText}
                            {isEditIcon && <i className="fa fa-pencil ms-2 "></i>}
                        </button>
                    </td>
                    <td >
                        <button className='btn btn-light '>
                            <span className='visually-hidden '>{index}</span>
                            <i style={{ color: 'red', margin: ' 0.1rem 0' }} className="material-icons" onClick={(e) => {
                                deleteRow(row);
                            }}>&#xe872;</i>
                        </button>
                    </td>

                </tr >
            </>
        )
}