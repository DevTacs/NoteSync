import {useState, useEffect, useContext, createContext} from "react"
import {useGetBookmarksQuery} from "../hooks/queries/note.query"
import {toggleBookmarkService} from "../services/note.service"

const BookmarkContext = createContext()

export const useBookmark = () => {
    const context = useContext(BookmarkContext)
    if (!context) {
        throw new Error("useBookmark must be used within a BookmarkProvider")
    }

    return context
}

export const BookmarkProvider = ({children}) => {
    const {data: bookmarks = [], refetch, isLoading} = useGetBookmarksQuery()

    const toggleBookmark = async (noteID) => {
        try {
            await toggleBookmarkService(noteID)
            await refetch()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <BookmarkContext.Provider
            value={{bookmarks, toggleBookmark, isLoading}}>
            {children}
        </BookmarkContext.Provider>
    )
}
