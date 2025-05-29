import {useState, useEffect} from "react"
import {addBookmarkByIDService} from "../services/note.service"
import {showErrorDialog} from "../utils/alert.util"
import {FaHeart} from "react-icons/fa"
import {useBookmark} from "../context/BookmarkContext"

export default function BookmarkIcon({noteID}) {
    const {bookmarks} = useBookmark()
    const [bookmarked, setBookmarked] = useState(true)

    useEffect(() => {
        setBookmarked(bookmarks.includes(noteID))
    }, [])

    const handleClick = async () => {
        try {
        } catch (error) {}
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
