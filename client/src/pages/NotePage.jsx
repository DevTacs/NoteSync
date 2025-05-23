import React from "react"
import NoteForm from "../components/NoteForm"
import NoteCard from "../components/NoteCard"

export default function NotePage() {
    const [notes, setNotes] = React.useState([
        {
            id: 1,
            title: "Note 1",
            content: "Content 1",
        },
        {
            id: 2,
            title: "Note 2",
            content: "Content 2",
        },
        {
            id: 3,
            title: "Note 3",
            content: "Content 3",
        },
        {
            id: 4,
            title: "Note 4",
            content: "Content 4",
        },
        {
            id: 5,
            title: "Note 5",
            content: "Content 5",
        },
        {
            id: 6,
            title: "Note 6",
            content: "Content 6",
        },
        {
            id: 7,
            title: "Note 7",
            content: "Content 7",
        },
        {
            id: 8,
            title: "Note 8",
            content: "Content 8",
        },
        {
            id: 9,
            title: "Note 9",
            content: "Content 9",
        },
        {
            id: 10,
            title: "Note 10",
            content: "Content 10",
        },
    ])
    return (
        <div className="flex py-8 px-10">
            <div>
                <h2 className="text-2xl font-bold">My Notes</h2>
                <p className="mb-8">Create and manage your personal notes</p>
                <NoteForm />
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid grid-cols-3 gap-10 place-items-start">
                {notes &&
                    notes.map((note) => (
                        <NoteCard
                            id={note.id}
                            title={note.title}
                            content={note.content}
                        />
                    ))}
            </div>
        </div>
    )
}
