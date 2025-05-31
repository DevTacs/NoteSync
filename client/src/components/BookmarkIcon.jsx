import {FaHeart} from "react-icons/fa"
import {useBookmark} from "../context/BookmarkContext"
import {useEffect, useState} from "react"

export default function BookmarkIcon({noteID}) {
    const {bookmarks, toggleBookmark, isLoading} = useBookmark()
    const [bookmarked, setBookmarked] = useState(false)

    useEffect(() => {
        setBookmarked(bookmarks.includes(noteID))
    }, [bookmarks])

    return (
        <FaHeart
            size={20}
            className={`cursor-pointer ${
                bookmarked ? "text-red-500" : "text-white   "
            } box-content p-1`}
            onClick={async (e) => {
                e.stopPropagation()
                setBookmarked(!bookmarked)
                await toggleBookmark(noteID)
            }}
        />
    )
}
