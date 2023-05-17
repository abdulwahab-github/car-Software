import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";


function CarList() {
const naviagte = useNavigate('');
    
    const gotoadd=()=>{
        naviagte("/addcar")
    }
  return (
    <div>
        <div className='textend mt-5  '>
        <Button variant='contained'  onClick={gotoadd}>Add Cars</Button></div>
    </div>
  )
}

export default CarList