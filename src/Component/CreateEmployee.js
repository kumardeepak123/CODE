import React, { useState } from 'react'


const CreateEmployee = () => {

    const [values, setValues] = useState({
        name: "",
        age:0
    })

    const handleChange =name=>(event) => {

        setValues({ ...values, [name]: event.target.value });
    }

    
    const submitData = () => {
       
        fetch('http://localhost:18570/api/Emps', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
         .then((res) => {
                const data = res.json();
                console.log(data);
             alert("Successfully submitted!");
             setValues({ name: "", age: 0 });
            })
         .catch((err) => alert("Successfully submitted!"))

    }

    return (
        <div>
        <form>
                <div class="form-group">
                    <label >Name</label>
                    <input type="text" class="form-control" placeholder="Enter Name" onChange={handleChange("name")} />

                </div>
                <div class="form-group">
                    <label >Age</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Age" onChange={handleChange("age")} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={submitData} >Submit</button>
                                
       </form>
        </div>
    );
}

export default CreateEmployee;