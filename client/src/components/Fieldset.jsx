import React from "react"

export default function Fieldset({label, placeholder}) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <input type="text" className="input" placeholder={placeholder} />
        </fieldset>
    )
}
