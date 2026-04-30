import { useState } from "react"

export default function Insert(){

    const [show, setShow]=useState(false);
    const [rollno, setRollno]=useState("");
    const [name, setName]=useState("");
    const [city, setCity]=useState("");
    const [age, setAge]=useState("");

    const AddStudent=(e)=>{

        e.preventDefault();
        
        fetch("https://your-backend.onrender.com/insert" ,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
    
        body:JSON.stringify({
            rollno: rollno,
            name:name,
            city:city,
            age:age,
        })
    })

    .then(res=>res.text())
    .then(data=>alert(data))
    .catch(err=>console.log(err));
    setRollno("");
    setName("");
    setCity("");
    setAge("");

    }

    return(
        <>
        <div>
        <h1>Student List</h1>
        <button className="btn btn-success" onClick={()=>setShow(!show)}>Add Student</button>
        </div>

        {show && (
            <div>
                <form>
                    Enter Rollno: <input type="number" value={rollno} onChange={(e)=>setRollno(Number(e.target.value))}/><br />
                    Enter Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/><br />
                    Enter City: <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/><br />
                    Enter Age: <input type="number" value={age} onChange={(e)=>setAge(Number(e.target.value))}/><br />
                    <button className="btn btn-primary" type="submit" onClick={(e)=>AddStudent(e)}>Add</button>
                </form>
            </div>
        )}
        </>
    )
}
