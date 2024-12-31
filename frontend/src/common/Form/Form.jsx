
import { useController } from 'react-hook-form'

export const TextInputComponent = ({type="text",control,name, defaultValue="",required=false, errMsg= null})=>{
    const {field} = useController({
        control:control,
        name:name,
        defaultValue:defaultValue,
        // rules:{
        //     required:required
        // }
    })
    return (
        <>
            <input
                type={type}
                {...field}                
            /> <br />
            <span style={{color:'red', fontStyle:'italic'}}>
                {errMsg}
            </span>
        </>
    )

}

export const TextAreaInput = ({control,name, defaultValue="",required=false, errMsg= null,row=5})=>{
    const {field} = useController({
        control:control,
        name:name,
        defaultValue:defaultValue,
        // rules:{
        //     required:required
        // }
    })
    return (
        <>
            <textarea  rows={row} {...field}>
                {defaultValue}                
            </textarea><br />
            <span style={{color:'red', fontStyle:'italic'}}>
                {errMsg}
            </span>
        </>
    )
}