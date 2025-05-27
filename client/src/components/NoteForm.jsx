import {useCreateNoteMutation} from "../hooks/mutations/note.mutation"
import {useNoteForm} from "../hooks/forms/note.form"
import {showSuccessDialog, showErrorDialog} from "../utils/alert.util"
import Fieldset from "./Fieldset"

export default function NoteForm({label, handleClick}) {
    const {reset, control, handleSubmit} = useNoteForm()
    const {mutateAsync} = useCreateNoteMutation()

    const handleCreateNote = async (noteData) => {
        try {
            const data = await mutateAsync(noteData)
            await showSuccessDialog("Success", data.message)
        } catch (error) {
            showErrorDialog("Error", error.message)
        }
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(handleCreateNote)}
            className="flex flex-col gap-4">
            <Fieldset>
                <Fieldset.Input
                    control={control}
                    name="title"
                    label="Title"
                    type="text"
                    placeholder="Enter note title"
                />
                <Fieldset.Textarea
                    control={control}
                    name="content"
                    label="Content"
                    placeholder="Enter note content"
                />
            </Fieldset>
            <button className="btn btn-accent" onClick={handleClick}>
                {label}
            </button>
        </form>
    )
}
