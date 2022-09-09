import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EmployeeDetails = () => {

    const [emp, setEmp] = useState({
        "empid": 0,
        "empname": "",
        "empemail": "",
        "department": "",
        "empaddress": "",
        "phnumber": "",
        "empusername": "",
        "emppassword": "",
        "leaveinhand": 0,
        "managerid": null,
        "manager": null,
        "inverseManager": [],
        "leaves": []
    })
    //  const [id, setId] = useState(0);
    const { id} = useParams();

   

    
         
    useEffect(() => {
        fetch(`http://localhost:5196/api/Employees/${id}`)
            .then(res => res.json())
            .then(res => {
                setEmp(res);
            })
            .catch(err => console.log(err));

        
     }, [])

    return (
        <div>
            EmpName: <h2>{emp.empname}</h2><br/>
            EmpEmail: <h2>{emp.empemail}</h2><br />
            Department: <h2>{emp.department}</h2><br />
            Address: <h2>{emp.empaddress}</h2><br />
            Phone number: <h2>{emp.phnumber}</h2><br />
        </div>
        );
}



export default EmployeeDetails;