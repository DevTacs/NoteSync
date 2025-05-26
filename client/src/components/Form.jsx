import {useController} from "react-hook-form"

export default function ({title}) {
    const {
        field,
        fieldState: {error, isDirty},
    } = useController()
    return (
        <form>
            <h2>{title}</h2>
        </form>
    )
}
