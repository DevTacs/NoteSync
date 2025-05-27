import {useNavigate} from "react-router-dom"
import {FaHeart} from "react-icons/fa6"
import {useState} from "react"

export default function NoteCard({author, id, title, content, createdAt}) {
    const [like, setLike] = useState(false)
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
                                by <span className="font-medium">{author}</span>
                                •
                                <span>
                                    {new Date(createdAt).toDateString()}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-[70px] max-h-[70px] text-sm/tight text-left  ">
                    {`${content.substring(0, 100)}...`}
                </div>

                <div className="relative w-full h-5 mt-6  ">
                    <FaHeart
                        size={20}
                        className={`absolute  top-0 right-0 cursor-pointer ${
                            like ? "text-red-500" : ""
                        }`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setLike(!like)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
