import {useState, useEffect} from "react"
import {FaHeart} from "react-icons/fa"
import {useBookmark} from "../context/BookmarkContext"
import {toggleBookmarkService} from "../services/note.service"

export default function BookmarkIcon({noteID}) {
    const {bookmarks} = useBookmark()
    const [bookmarked, setBookmarked] = useState()

    useEffect(() => {
        setBookmarked(bookmarks.includes(noteID))
    }, [bookmarks])

    const handleClick = async () => {
        try {
            const {bookmarked} = await toggleBookmarkService(noteID)
            console.log(bookmarked)
            setBookmarked(bookmarked)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FaHeart
            size={20}
            className={`cursor-pointer ${
                bookmarked ? "text-red-500" : "text-white   "
            }`}
            onClick={(e) => {
                e.stopPropagation()
                handleClick()
            }}
        />
    )
}
