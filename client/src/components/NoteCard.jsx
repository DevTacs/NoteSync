import {Link, useNavigate} from "react-router-dom"
import {AiOutlineBook, AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"

export default function NoteCard({author, id, title, content, createdAt}) {
    const user = "User1"
    const navigate = useNavigate()
    return (
        <div
            className="card w-90 bg-base-100 card-md shadow-sm shadow-accent"
            onClick={() => navigate(`/notes/${id}`)}>
            <div className="card-body">
                <div className="flex flex-row items-center justify-between gap-2">
                    <div className="badge badge-accent text-xs">{author}</div>
                    <div className="flex flex-row items-center gap-2">
                        <AiOutlineBook
                            size={20}
                            onClick={() => console.log("Bookmark")}
                        />
                        {user === author && (
                            <>
                                {/* <AiOutlineEdit
                                    size={20}
                                    onClick={() => navigate(`/notes/${id}`)}
                                /> */}
                                {/* <AiOutlineDelete
                                    size={20}
                                    onClick={() => console.log("Delete")}
                                /> */}
                            </>
                        )}
                    </div>
                </div>
                <div>
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className="text-xs">{content}</p>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-xs text-gray-400">{createdAt}</p>
                </div>
            </div>
        </div>
    )
}
