import { useField } from 'formik'
import React from 'react'
import { styles } from './styles';

interface InputProps {
    name: string;
    type: "text" | "email" | "number";
    placeholder?: string;
    label?: string;
}

const Input = (props: InputProps) => {
    const [meta, field, helpers] = useField(props)
    return (
        <div className={styles.inputContainer}>
            {props.label && <label className={styles.inputLabel}>{props.label}</label>}
            <input className={styles.input} {...field} onChange={meta.onChange} name={props.name} type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}

export default Input