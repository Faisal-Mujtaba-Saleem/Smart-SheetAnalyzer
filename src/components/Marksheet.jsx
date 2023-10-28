import React, { useState, useEffect } from 'react'

import Row from './Row';
import AnalyzerButton from './AnalyzerButton';
import Analyzer from './Analyzer';
import Alert from './Alert';

export default function Marksheet(props) {

    const [rows, setRows] = useState([]);
    const [undoRows, setUndoRows] = useState([]);
    const [customAlert, setCustomAlert] = useState(null);

    const [subject_1Name, setSubject_1Name] = useState('');
    const [subject_2Name, setSubject_2Name] = useState('');
    const [subject_3Name, setSubject_3Name] = useState('');
    const [subject_4Name, setSubject_4Name] = useState('');
    const [subject_5Name, setSubject_5Name] = useState('');

    const subjects_names = { subject_1Name, subject_2Name, subject_3Name, subject_4Name, subject_5Name };

    const [subject_1Target, setSubject_1Target] = useState('');
    const [subject_2Target, setSubject_2Target] = useState('');
    const [subject_3Target, setSubject_3Target] = useState('');
    const [subject_4Target, setSubject_4Target] = useState('');
    const [subject_5Target, setSubject_5Target] = useState('');

    const handleMarksTargetClick = (event) => {
        if (event.target.name === 'sub_1-name' && subject_1Name === '') {
            if ((subject_1Target === 0 || subject_1Target === '') || event.target.value === '') {
                const targetPrompt = prompt(`Please set the target marks first for this particular subject then fill out the input field`);
                /[0-9]/.test(targetPrompt) ?
                    setSubject_1Target(Number.parseInt(targetPrompt)) :
                    prompt(`Invalid empty or non-numeric target input. Please set the target again correctly`);
            }
        }
        else if (event.target.name === 'sub_2-name' && subject_2Name === '') {
            if ((subject_2Target === 0 || subject_2Target === '') || event.target.value === '') {
                const targetPrompt = prompt(`Please set the target marks first for this particular subject then fill out the input field`);
                /[0-9]/.test(targetPrompt) ?
                    setSubject_2Target(Number.parseInt(targetPrompt)) :
                    prompt(`Invalid empty or non-numeric target input. Please set the target again correctly`);
            }
        }
        else if (event.target.name === 'sub_3-name' && subject_3Name === '') {
            if ((subject_3Target === 0 || subject_3Target === '') || event.target.value === '') {
                const targetPrompt = prompt(`Please set the target marks first for this particular subject then fill out the input field`);
                /[0-9]/.test(targetPrompt) ?
                    setSubject_3Target(Number.parseInt(targetPrompt)) :
                    prompt(`Invalid empty or non-numeric target input. Please set the target again correctly`);
            }
        }
        else if (event.target.name === 'sub_4-name' && subject_4Name === '') {
            if ((subject_4Target === 0 || subject_4Target === '') || event.target.value === '') {
                const targetPrompt = prompt(`Please set the target marks first for this particular subject then fill out the input field`);
                /[0-9]/.test(targetPrompt) ?
                    setSubject_4Target(Number.parseInt(targetPrompt)) :
                    prompt(`Invalid empty or non-numeric target input. Please set the target again correctly`);
            }
        }
        else if (event.target.name === 'sub_5-name' && subject_5Name === '') {
            if ((subject_5Target === 0 || subject_5Target === '') || event.target.value === '') {
                const targetPrompt = prompt(`Please set the target marks first for this particular subject then fill out the input field`);
                /[0-9]/.test(targetPrompt) ?
                    setSubject_5Target(Number.parseInt(targetPrompt)) :
                    prompt(`Invalid empty or non-numeric target input. Please set the target again correctly`);
            }
        }
    }

    const handleAddRowClick = (event) => {
        if (rows.length !== 0) {
            if (rows[rows.length - 1].btnText === 'Commit') {
                alert(`First commit the current row then add a new row!`)
            }
            else {
                setRows([
                    ...rows,
                    {
                        id: '',
                        studentName: '',
                        subject_1Marks: '0',
                        subject_2Marks: '0',
                        subject_3Marks: '0',
                        subject_4Marks: '0',
                        subject_5Marks: '0',
                        btnText: 'Commit',
                        isEditIcon: false,
                        readOnly: false,
                    }
                ])
                showAlert(`Row.${rows.length + 1} added successfully.`, 'success')
            }
        } else {
            setRows([
                {
                    id: '',
                    studentName: '',
                    subject_1Marks: '0',
                    subject_2Marks: '0',
                    subject_3Marks: '0',
                    subject_4Marks: '0',
                    subject_5Marks: '0',
                    btnText: 'Commit',
                    isEditIcon: false,
                    readOnly: false,
                }
            ])
            showAlert(`Row.${rows.length + 1} added successfully.`, 'success')
        }

    }

    const updateRows = (index, newData) => {
        let updatedRows = [...rows];
        updatedRows[index] = { ...newData };
        setRows(updatedRows);
    }
    const deleteRow = (row) => {
        // Remove the row object from the rows state
        const updatedRows = rows.filter((_, i) => _ !== row);
        setRows((current_rows) => {
            setUndoRows(current_rows);
            return updatedRows;
        }
        );
        showAlert(`Row.${row.id + 1} removed from the marksheet!`, 'warning');
    }
    const undo = () => {
        setRows(undoRows);
    }


    useEffect(() => {
        setTimeout(() => {
            console.log(rows);
        }, 1000);
    }, [rows]);

    const [Analyze, setAnalyze] = useState(false);
    const [analyzeBtnText, setAnalyzeBtnText] = useState('Analyze your Marksheet')
    const [passingCriteria, setPassingCriteria] = useState('')
    const handleAnalyzeClick = (event) => {
        setAnalyzeBtnText("Remove Analyzations");
        if (analyzeBtnText === 'Analyze your Marksheet') {
            setAnalyze(true);
            setPassingCriteria(prompt('Set your passing criteria in Percentage'));
        } else {
            setAnalyzeBtnText("Analyze your Marksheet");
            setAnalyze(false);
        }
    }

    function isCommit() {
        return rows[0].btnText === 'Commit' ? true : false;
    }

    const showAlert = (message, type) => {
        setCustomAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setCustomAlert(null);
        }, 5000);
    }

    return (
        <div style={{ margin: '3.5rem 0' }}>
            <table className="table table-dark table-sm">
                <thead>
                    <tr style={{ textAlign: 'center' }} className='table-dark'>
                        <th scope="col">
                            <div className='my-4 mx-1'> # </div>
                        </th>
                        <th scope="col">
                            <div className='my-4'> Student Name </div>
                        </th>
                        <th scope="col">
                            <div className='my-3'>
                                <span>Subject.1</span>
                                <input type="text" name="sub_1-name" className='form-control text-center ' id="sub_1-name" value={subject_1Name} onChange={(e) => { setSubject_1Name(e.target.value) }} onClick={handleMarksTargetClick} />
                            </div>
                        </th>
                        <th scope="col">
                            <div className='my-3'>
                                <span>Subject.2</span>
                                <input type="text" name="sub_2-name" className='form-control text-center ' id="sub_2-name" value={subject_2Name} onChange={(e) => { setSubject_2Name(e.target.value) }} onClick={handleMarksTargetClick} />
                            </div>
                        </th>
                        <th scope="col">
                            <div className='my-3'>
                                <span>Subject.3</span>
                                <input type="text" name="sub_3-name" className='form-control text-center ' id="sub_3-name" value={subject_3Name} onChange={(e) => { setSubject_3Name(e.target.value) }} onClick={handleMarksTargetClick} />
                            </div>
                        </th>
                        <th scope="col">
                            <div className='my-3'>
                                <span>Subject.4</span>
                                <input type="text" name="sub_4-name" className='form-control text-center ' id="sub_4-name" value={subject_4Name} onChange={(e) => { setSubject_4Name(e.target.value) }} onClick={handleMarksTargetClick} />
                            </div>
                        </th>
                        <th scope="col">
                            <div className='my-3'>
                                <span>Subject.5</span>
                                <input type="text" name="sub_5-name" className='form-control text-center ' id="sub_5-name" value={subject_5Name} onChange={(e) => { setSubject_5Name(e.target.value) }} onClick={handleMarksTargetClick} />
                            </div>
                        </th>
                        <th scope="col">
                            <div className='my-4 mx-1'> Edit/Commit </div>
                        </th>
                        <th scope="col">
                            <div className='my-4 mx-1'> Remove </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        rows.map((element, index, Array) => {

                            return (
                                <Row key={index} index={index} sno={index + 1} updateRows={updateRows} subjects_names={subjects_names} searchbarText={props.searchbarText} showAlert={showAlert} row={element} deleteRow={deleteRow} />
                            )
                        })
                    }
                </tbody>
            </table>

            <div className="btn btn-primary m-2" title="Add Credentials" onClick={handleAddRowClick}>
                + Add Row
            </div>
            {customAlert !== null && < Alert customAlert={customAlert} undo={undo} />}
            <hr />
            {
                rows.length !== 0 && !isCommit() &&
                <span onClick={handleAnalyzeClick}>
                    <AnalyzerButton analyzeBtnText={analyzeBtnText} />
                </span>
            }
            <div className="container text-center my-4 ">
                <div className="row">
                    {
                        Analyze && rows.map((element, index, Array) => {

                            return (

                                <div key={index} className="col-md-4 col-sm-12 ">
                                    <Analyzer subject_1Name={subject_1Name}
                                        subject_2Name={subject_2Name}
                                        subject_3Name={subject_3Name}
                                        subject_4Name={subject_4Name}
                                        subject_5Name={subject_5Name}
                                        studentName={element.studentName}
                                        subject_1Marks={element.subject_1Marks}
                                        subject_2Marks={element.subject_2Marks}
                                        subject_3Marks={element.subject_3Marks}
                                        subject_4Marks={element.subject_4Marks}
                                        subject_5Marks={element.subject_5Marks}
                                        passingCriteria={passingCriteria}
                                        subject_1Target={subject_1Target}
                                        subject_2Target={subject_2Target}
                                        subject_3Target={subject_3Target}
                                        subject_4Target={subject_4Target}
                                        subject_5Target={subject_5Target} />
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </div>
    )

}