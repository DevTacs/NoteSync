import {Link, useParams} from "react-router-dom"
import {useGetNoteQuery} from "../hooks/queries/note.query"

export default function ViewNotePage() {
    const {id} = useParams()
    const {data, isLoading, error} = useGetNoteQuery(id)

    return (
        <div className="w-[500px] flex flex-col shadow-sm shadow-accent rounded-md p-4 my-5 mx-auto">
            <div className="my-2">
                <h2 className="text-2xl font-bold">{data?.title}</h2>
                <p className="text-sm">Author</p>
                <p className="text-sm">CreateAt</p>
            </div>
            <p>{data?.content}</p>
            <div className="flex gap-2 ">
                <Link className="btn btn-accent" to="/user/notes">
                    Notes
                </Link>
                <Link className="btn btn-info" to="/User1/edit">
                    Edit
                </Link>
                <button
                    className="btn btn-error"
                    onClick={() => console.log("Delete")}>
                    Delete
                </button>
            </div>
        </div>
    )
}
