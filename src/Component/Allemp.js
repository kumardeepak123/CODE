import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const  Allemp=()=>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:5196/api/Employees")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Department</th>
                        <th scope="col">Address</th>
                        <th scope="col">phone number</th>
                        <th scope="col">Action</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.empname}</td>
                            <td>{item.empemail}</td>
                            <td>{item.department}</td>
                            <td>{item.empaddress}</td>
                            <td>{item.phnumber}</td>
                            <Link to={`/employee/details/${item.empid}`} >Details</Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}


export default Allemp;