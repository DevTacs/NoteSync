import {useController} from "react-hook-form"

export default function Fieldset({
    control,
    name,
    label,
    type = "text",
    placeholder,
}) {
    const {
        field,
        fieldState: {error, isDirty},
    } = useController({control, name})
    return (
        <fieldset className="fieldset">
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
        </fieldset>
    )
}
