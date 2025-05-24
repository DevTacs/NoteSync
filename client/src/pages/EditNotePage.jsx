import React from "react"
import NoteForm from "../components/NoteForm"

export default function EditNotePage() {
    return (
        <div className="w-[350px] my-10 mx-auto shadow-sm shadow-accent rounded-md p-4">
            <h2 className="text-2xl font-bold my-4 text-center">Edit Note</h2>
            <NoteForm label="Update" handleClick={() => {}} />
        </div>
    )
}
