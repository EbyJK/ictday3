import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const TextInput = () => {
    var [inputs,setInputs] = useState({sname:'',age:'',place:'',email:''});
    const inputHandler=(e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value});
        console.log(inputs);



    };

  return (
    <div>
        <TextField variant='outlined' label='Name' onChange={inputHandler} name="sname" value={inputs.sname}>Name</TextField> &nbsp;
        <br /><br />
        <TextField variant='outlined' label='Age'onChange={inputHandler} name="age" value={inputs.age} >Age</TextField> &nbsp;
        <br /><br />
        <TextField variant='outlined' label='Place' onChange={inputHandler} name="place" value={inputs.place}>Place</TextField> &nbsp;
        <br /><br />
        <TextField variant='outlined' label='Email' onChange={inputHandler} name="email" value={inputs.email}>Email</TextField> &nbsp;
        <br /><br />
        <Button variant='contained' color='secondary'>Submit</Button>


    </div>
  )
}

export default TextInput
