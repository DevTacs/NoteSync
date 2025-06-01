import {useBookmark} from "../context/BookmarkContext"
import NotePanel from "../components/NotePanel"

export default function BookmarkPage() {
    const {bookmarks, isError: error, isLoading} = useBookmark()

    return (
        <div className="h-[calc(100vh-110px)] flex flex-row px-10 my-5">
            <NotePanel
                label="Bookmarks"
                notes={bookmarks}
                error={error}
                isNoteLoading={isLoading}
            />
        </div>
    )
}
