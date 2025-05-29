import {useState} from "react"
import {useEffect} from "react"
import {useContext} from "react"
import {createContext} from "react"

const BookmarkContext = createContext()

export const useBookmark = () => {
    const context = useContext(BookmarkContext)
    if (!context) {
        throw new Error("useBookmark must be used within a BookmarkProvider")
    }

    return context
}

export const BookmarkProvider = ({children}) => {
    const [bookmarks, setBookmarks] = useState([])

    return (
        <BookmarkContext.Provider value={{bookmarks, setBookmarks}}>
            {children}
        </BookmarkContext.Provider>
    )
}
