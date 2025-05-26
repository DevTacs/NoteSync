import NoteCard from "./NoteCard"
import Skeleton from "./Skeleton"
import NoteHeader from "./NoteHeader"
import {showErrorDialog} from "../utils/alert.util"

export default function NotePanel({notes, error, isLoading}) {
    if (error) return showErrorDialog("Error", error.message)

    return (
        <div className="flex-[1] flex flex-col ">
            <NoteHeader title="Notes" />
            <div className="mt-5">
                <div className="grid grid-cols-3 gap-4">
                    {isLoading
                        ? Array.from({length: 6}).map((_, i) => (
                              <Skeleton key={i} />
                          ))
                        : notes &&
                          notes.map((note) => (
                              <NoteCard
                                  key={note._id}
                                  id={note.id}
                                  title={note.title}
                                  content={note.content}
                              />
                          ))}
                </div>
            </div>
        </div>
    )
}
