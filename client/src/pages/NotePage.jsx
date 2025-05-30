import NoteForm from "../components/NoteForm"
import NotePanel from "../components/NotePanel"
import {BookmarkProvider} from "../context/BookmarkContext"
import {useGetNotesQuery} from "../hooks/queries/note.query"

export default function NotePage() {
    const {data: notes = [], error, isLoading} = useGetNotesQuery()
    return (
        <div className="h-[calc(100vh-110px)] flex flex-row px-10 my-5">
            <div>
                <h2 className="text-2xl font-bold">My Notes</h2>
                <p className="mb-8">Create and manage your personal notes</p>
                <NoteForm label={"Create"} />
            </div>
            <div className="divider divider-horizontal"></div>
            <BookmarkProvider>
                <NotePanel
                    notes={notes}
                    error={error}
                    isNoteLoading={isLoading}
                />
            </BookmarkProvider>
        </div>
    )
}
