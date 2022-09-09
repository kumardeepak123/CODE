import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const ManagerProfile = () => {

    const [manager, setManager] = useState({
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
    const [emps, setEmps] = useState([]);
    const [leaves, setLeaves] = useState([]);
    const [showEmps, setShowEmps] = useState(false);
    const [showLeaves, setShowLeaves] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {

        //get manager details
            fetch(`http://localhost:5196/api/Employees/${id}`)
            .then(res => res.json())
            .then(res => {
                setManager(res);
            })
            .catch(err => {
                alert("Error occured..");
                navigate(`/manager/login`);
            });

           // get all emps working under manager
            fetch(`http://localhost:5196/api/Employees/undermanager/${id}`)
            .then(res => res.json())
                .then(res => {
                    setEmps(res);
                   
            })
            .catch(err => {
                alert("Error occured..");
                
            });
          //get leaves under manager
        fetch(`http://localhost:5196/api/Leaves/bymanagerid/${id}`)
            .then(res => res.json())
            .then(res => {
                setLeaves(res);

            })
            .catch(err => {
                alert("Error occured..");

            });
           

    }, [])

    //methods
    const showEmployees = () => {
        setShowEmps(true);
        if (showLeaves) {
            setShowLeaves(false);
        }
    }
    const showLeavesForManager = () => {
        setShowLeaves(true);
        if (showEmps) {
            setShowEmps(false);
        }
    }

    return (
        <div >
            <h2>Hii! {manager.empname}</h2>
            Email: <b>{manager.empemail}</b> <br />
            Department: <b>{manager.department}</b> <br />
            Phone number: <b>{manager.phnumber}</b> <br />

            <hr />
            <button className="btn btn-lg btn-primary" onClick={showEmployees} >My Employees</button>
            <button className="btn btn-lg btn-info" onClick={showLeavesForManager} >Show Leaves</button>
            {console.log(showEmps+"HIIIIII")}
            {showEmps && <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Department</th>
                        <th scope="col">Address</th>
                        <th scope="col">phone number</th>



                    </tr>
                </thead>
                <tbody>
                    {emps.map(e => (
                        <tr key={e.id}>
                            <td>{e.empname}</td>
                            <td>{e.empemail}</td>
                            <td>{e.department}</td>
                            <td>{e.empaddress}</td>
                            <td>{e.phnumber}</td>

                        </tr>
                    ))}
                </tbody>
            </table>}
            {showLeaves &&
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Emp Id</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">No of days</th>
                            <th scope="col">leave type</th>
                            <th scope="col">Action</th>



                        </tr>
                    </thead>
                    <tbody>
                    {leaves.map(e => (
                        <tr key={e.id}>
                            <td>{e.empid}</td>
                            <td>{e.leavefrom}</td>
                            <td>{e.leaveto}</td>
                            <td>{e.noofdays}</td>
                            <td>{e.leavetype}</td>
                            <td>
                                <button className="btn  btn-success"  >Approve</button>                                
                            </td>
                            <td>
                                <button className="btn  btn-danger" >Deny</button>
                            </td>

                            </tr>
                        ))}
                    </tbody>
                </table>}
            }

        </div>
    );
}


export default ManagerProfile;

