import {useContext, createContext} from "react"
import {useGetBookmarksQuery} from "../hooks/queries/note.query"
import {useToggleBookmarkMutation} from "../hooks/mutations/note.mutation"

const BookmarkContext = createContext()

export const useBookmark = () => {
    const context = useContext(BookmarkContext)
    if (!context) {
        throw new Error("useBookmark must be used within a BookmarkProvider")
    }

    return context
}

export const BookmarkProvider = ({children}) => {
    const {data: bookmarks = [], isLoading, isError} = useGetBookmarksQuery()
    const {mutateAsync, data} = useToggleBookmarkMutation()

    const toggleBookmark = async (noteID) => {
        try {
            await mutateAsync(noteID)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const values = {
        bookmarks,
        toggleBookmark,
        isError,
        isLoading,
    }

    return (
        <BookmarkContext.Provider value={values}>
            {children}
        </BookmarkContext.Provider>
    )
}
