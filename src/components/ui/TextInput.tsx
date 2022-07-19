import { InputLabel, TextField } from '@material-ui/core'
import React, { useId } from 'react'

interface Prop {
    label?: string
    ContainerClassName?: string
    TextFieldClassName?: string
    type?: string
    onChange? (): any

} 

const TextInput = ({label, ContainerClassName, TextFieldClassName, type, onChange}: Prop)=> {
  const id = useId();
  return (
    <div className={`grid grid-cols-1 gap-2 m-2`+ContainerClassName} >
    <InputLabel className='' htmlFor={label+id}>{label}</InputLabel>
    <TextField  type = {type || 'text'} className={TextFieldClassName} style={{borderRadius:'12px'}} variant='outlined' placeholder={label} id={label+id} />
</div>
  )
}

export default TextInput