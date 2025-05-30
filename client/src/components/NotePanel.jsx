import {useEffect} from "react"
import NoteCard from "./NoteCard"
import Skeleton from "./Skeleton"
import NoteHeader from "./NoteHeader"
import {showErrorDialog} from "../utils/alert.util"
import {useBookmark} from "../context/BookmarkContext"
import {useGetBookmarksQuery} from "../hooks/queries/note.query"

export default function NotePanel({notes, error, isNoteLoading}) {
    useEffect(() => {
        if (error && error.status !== 404)
            showErrorDialog("Error", error.message)
    }, [error])

    return (
        <div className="flex-[1] flex flex-col">
            <NoteHeader title="Notes" />
            <div className="mt-5">
                {notes.length === 0 && !isNoteLoading && (
                    <p className=" p-4 bg-accent text-2xl text-center rounded-md">
                        No notes found
                    </p>
                )}
                <div className="grid grid-cols-3 gap-4 h-[550px] overflow-y-scroll overflow-x-hidden items-start">
                    {isNoteLoading
                        ? Array.from({length: 6}).map((_, i) => (
                              <Skeleton key={i} />
                          ))
                        : notes &&
                          notes.map((note) => (
                              <NoteCard
                                  key={note._id}
                                  id={note._id}
                                  authorID={note.author.authorID}
                                  authorName={note.author.authorName}
                                  createdAt={note.createdAt}
                                  title={note.title}
                                  content={note.content}
                              />
                          ))}
                </div>
            </div>
        </div>
    )
}
