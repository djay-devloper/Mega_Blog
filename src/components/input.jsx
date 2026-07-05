import React, {useId} from 'react'

// Wrapping the component in forwardRef allows a parent component to pass a ref directly to the underlying native HTML <input> element inside your custom component.
const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input

// It is designed to act just like a standard HTML <input> tag, but with built-in styling (using Tailwind CSS), automatic label handling, and the ability to seamlessly integrate with advanced form-handling libraries like React Hook Form.
