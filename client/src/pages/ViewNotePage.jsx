import {useEffect} from "react"
import {Link, useNavigate, useParams} from "react-router-dom"
import {useGetNoteQuery} from "../hooks/queries/note.query"
import Loading from "../components/Loading"
import {showErrorDialog} from "../utils/alert.util"

export default function ViewNotePage() {
    const {id} = useParams()
    const {data: note, isLoading, error} = useGetNoteQuery(id)
    const navigate = useNavigate()

    useEffect(() => {
        const handleError = async () => {
            if (error) {
                await showErrorDialog("Error", error.message)
                navigate("/user/notes")
            }
        }
        handleError()
    }, [error])

    if (isLoading) return <Loading />

    const handleDelete = async () => {
        try {
        } catch (error) {}
    }
    return (
        <div className="w-full max-w-xl mx-auto p-6 my-[80px] rounded-2xl shadow-xs shadow-accent">
            <div className="mb-4">
                <h1 className="text-2xl font-bold mb-1">{note.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    by{" "}
                    <span className="font-medium">
                        {note.author.authorName}
                    </span>{" "}
                    • {new Date(note.createdAt).toDateString()}
                </p>
            </div>

            <hr className="border-accent mb-4" />

            <div className="text-base leading-relaxed whitespace-pre-wrap mb-6">
                {note.content}
            </div>

            <div className="flex justify-between items-center">
                <Link to="/user/notes" className="btn btn-accent">
                    Add New Note
                </Link>

                <div className="space-x-2">
                    <Link
                        to={`/user/notes/${id}/edit`}
                        className="btn btn-info transition">
                        Update
                    </Link>
                    <button className="btn btn-error" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
