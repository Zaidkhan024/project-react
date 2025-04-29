import React, { Component } from 'react'

export class EmpDataComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employeedata: [
                { empId: 1, empName: "ZAID KHAN", empPost: "FULL STACK DEVELOPER", empSalary: 150000, empAddress: "INDORE", empGender: "MALE" },

                { empId: 2, empName: "JUNAID", empPost: "BACKEND DEVELOPER", empSalary: 210000, empAddress: "KHANDWA", empGender: "MALE" },

                { empId: 3, empName: "ADITYA BHAWSAR", empPost: "DBA", empSalary: 150000, empAddress: "PUNE", empGender: "MALE" },

                { empId: 4, empName: "IRSHAD PATHAN", empPost: "JAVA DEVELOPER", empSalary: 150000000, empAddress: "LATUR", empGender: "FEMALE" },

                { empId: 5, empName: "MUBASHSHIR", empPost: "DEVELOPER", empSalary: 150000, empAddress: "DELHI", empGender: "MALE" },

                { empId: 6, empName: "ADITI JHA", empPost: "ARCHITECTURE", empSalary: 250000, empAddress: "BANGLURU", empGender: "FEMALE" },

                { empId: 7, empName: "RAKHI JAIN", empPost: "FULL STACK DEVELOPER", empSalary: 210000, empAddress: "KHANDWA", empGender: "FEMALE" },

                { empId: 8, empName: "UMAR", empPost: "JAVA DEVELOPER", empSalary: 230000, empAddress: "AKOLA", empGender: "MALE" },


                { empId: 9, empName: "PRIYANSHU", empPost: "FRONTEND DEVELOPER", empSalary: 210000, empAddress: "HARYANA", empGender: "MALE" },


                { empId: 10, empName: "HANSIKA", empPost: "DBA", empSalary: 150000, empAddress: "JAIPUR", empGender: "FEMALE" }
            ]
        }
    }


    render() {
        const { employeedata } = this.state;
        return (
            <div>
                <h2>THIS IS EMPDATACOMP TASK</h2>
                <table className='table table-bordered'>
                    <tbody>
                        {
                            employeedata.map((value,id)=>{
                              return(<tr key={id}>
                                    <td>{value.empId}</td>
                                    <td>{value.empName}</td>
                                    <td>{value.empPost}</td>
                                    <td>{value.empSalary}</td>
                                    <td>{value.empAddress}</td>
                                    <td>{value.empGender}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    
    }
}

export default EmpDataComp
