import NoteForm from "../components/NoteForm"
import NotePanel from "../components/NotePanel"
import {useGetNotesQuery} from "../hooks/queries/note.query"

export default function NotePage() {
    const {data: notes = [], error, isLoading} = useGetNotesQuery()

    return (
        <div className="flex flex-row py-8 px-10">
            <div>
                <h2 className="text-2xl font-bold">My Notes</h2>
                <p className="mb-8">Create and manage your personal notes</p>
                <NoteForm label={"Create"} />
            </div>
            <div className="divider divider-horizontal"></div>
            <NotePanel notes={notes} error={error} isLoading={isLoading} />
        </div>
    )
}
