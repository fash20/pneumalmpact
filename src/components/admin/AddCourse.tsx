import { Button, TextField } from '@mui/material'
import React from 'react'
import CSEditor from '../ui/CSEditor'



const AddCourse = () => {
  return (
    <div className='my-20 mx-20  flex flex-col space-y-10 '>
      <TextField placeholder='Course Title' />
      <CSEditor />
      <Button variant='pneumaBlue'>Save</Button>
      <div style={{backgroundColor:'green',height:'400px', width:'100%'}} className='curve'  >
      </div>
    </div>
  )
}

export default AddCourse