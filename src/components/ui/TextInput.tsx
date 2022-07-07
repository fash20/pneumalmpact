import { InputLabel, TextField } from '@material-ui/core'
import React, { useId } from 'react'

interface Prop{
    label?: string
} 

const TextInput = ({label}: Prop) => {
  const id = useId();
  return (
    <div className='grid grid-cols-1 gap-2 m-2'>
    <InputLabel className='' htmlFor={label+id}>{label}</InputLabel>
    <TextField style={{borderRadius:'12px'}} variant='outlined' placeholder={label} id={label+id} />
</div>
  )
}

export default TextInput