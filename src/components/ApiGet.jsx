import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
    var [output,setOutput]=useState([]); //inside paranthesis sq br given to indiacate lot of data stored in an array
    // useEffect(()=>{},[]) -->syntax
    useEffect(()=>{
        // axios.get("url").then().catch() -->syntax
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{console.log(res.data);
            setOutput(res.data)
        })
        .catch((err)=>{console.log(err);})
    },[]); // sq brackets given  because of lot of data and to avoid buffering and slow data loading in sites
  return (
    <div>
      <Typography variant='h3'>Axios</Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Username</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    output.map((val,i)=>{  //val--> data in api , i--> index of the data in api
                        return(
                            <TableRow key={i}>   
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.phone}</TableCell>
                                <TableCell>{val.username}</TableCell>
                            </TableRow>
                    
                        )

                    })
                }
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ApiGet
