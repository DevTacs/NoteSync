import {useController} from "react-hook-form"

export default function Fieldset({children}) {
    return <fieldset className="fieldset">{children}</fieldset>
}

Fieldset.Input = ({control, name, type, label, placeholder}) => {
    const {
        field,
        fieldState: {error, isDirty},
    } = useController({control, name})
    return (
        <>
            <legend className="fieldset-legend">{label}</legend>
            {error && <p className="text-error">{error.message}</p>}
            <input
                {...field}
                type={type}
                className={`input ${
                    error ? "input-error" : isDirty ? "input-success" : ""
                }`}
                placeholder={placeholder}
            />
        </>
    )
}

Fieldset.Textarea = ({control, name, label, placeholder}) => {
    const {
        field,
        fieldState: {error, isDirty},
    } = useController({control, name})
    return (
        <>
            <legend className="fieldset-legend">{label}</legend>
            {error && <p className="text-error">{error.message}</p>}
            <textarea
                {...field}
                className={`textarea ${
                    error ? "textarea-error" : isDirty ? "textarea-success" : ""
                }`}
                placeholder={placeholder}></textarea>
        </>
    )
}
