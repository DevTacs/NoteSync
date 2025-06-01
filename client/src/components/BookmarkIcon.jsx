import {FaHeart} from "react-icons/fa"
import {useBookmark} from "../context/BookmarkContext"
import {useEffect, useState} from "react"
import {set} from "react-hook-form"

export default function BookmarkIcon({noteID}) {
    const {bookmarks, toggleBookmark} = useBookmark()
    const [loading, setLoading] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)

    useEffect(() => {
        const bookmarkIds = bookmarks.map((bookmark) => bookmark._id)
        setBookmarked(bookmarkIds.includes(noteID))
    }, [bookmarks])

    return (
        <FaHeart
            size={20}
            className={`cursor-pointer ${
                bookmarked ? "text-red-500" : "text-white   "
            } box-content p-1`}
            onClick={async (e) => {
                e.stopPropagation()
                if (loading) return
                setBookmarked(!bookmarked)

                try {
                    setLoading(true)
                    await toggleBookmark(noteID)
                } catch (error) {
                    console.error("Failed to toggle bookmark:", error)
                }
                setLoading(false)
            }}
        />
    )
}
