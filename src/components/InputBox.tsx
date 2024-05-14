import React from 'react'

interface IInputBoxProps {
    label: string,
    placeHolder: string
}
function InputBox({ label, placeHolder }: IInputBoxProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={label} className="text-sm mb-1">{label}</label>
            <input type="text" placeholder={placeHolder} id={label} className="outline-none text-sm soutline-none border-none py-2 rounded-md px-3" />
        </div>
    )
}

export default InputBox