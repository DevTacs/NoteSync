import {useNavigate} from "react-router-dom"
import BookmarkIcon from "./BookmarkIcon"

export default function NoteCard({
    authorID,
    authorName,
    id,
    title,
    content,
    createdAt,
}) {
    const navigate = useNavigate()
    return (
        <div
            className="flex items-center justify-center bg-opacity-50"
            onClick={() => navigate(`/user/notes/${id}`)}>
            <div className="rounded-2xl shadow-xl w-full max-w-lg p-6">
                <div className="flex justify-between items-center border-b border-accent pb-3 mb-4">
                    <div className="w-full">
                        <h2 className="text-xl font-semibold text-accent">
                            {title}
                        </h2>
                        <div className="flex flex-row justify-between">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                by{" "}
                                <span className="font-medium">
                                    {authorName}
                                </span>
                                <span className="mx-1">•</span>
                                <span>
                                    {new Date(createdAt).toDateString()}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-[70px] max-h-[70px] text-sm/tight">
                    {`${content.substring(0, 100)}...`}
                </div>

                <div className="flex flex-row justify-end h-5 mt-2">
                    <BookmarkIcon noteID={id} />
                </div>
            </div>
        </div>
    )
}
