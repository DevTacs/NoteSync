import {useState, useEffect, useContext, createContext} from "react"
import {useGetBookmarksQuery} from "../hooks/queries/note.query"

const BookmarkContext = createContext()

export const useBookmark = () => {
    const context = useContext(BookmarkContext)
    if (!context) {
        throw new Error("useBookmark must be used within a BookmarkProvider")
    }

    return context
}

export const BookmarkProvider = ({children}) => {
    const {data = [], isBookmarkLoading} = useGetBookmarksQuery()
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        if (!isBookmarkLoading && data.length > 0) {
            setBookmarks(data)
        }
        console.log(data)
    }, [data, isBookmarkLoading])

    return (
        <BookmarkContext.Provider value={{bookmarks, setBookmarks}}>
            {children}
        </BookmarkContext.Provider>
    )
}
