import React from "react"
import NoteForm from "../components/NoteForm"
import NoteCard from "../components/NoteCard"
import {Outlet} from "react-router-dom"

export default function NotePage() {
    const [notes, setNotes] = React.useState([
        {
            author: "User1",
            id: 1,
            title: "Note 1",
            content: "Content 1",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
        {
            author: "User2",
            id: 2,
            title: "Note 2",
            content: "Content 2",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
        {
            author: "User3",
            id: 3,
            title: "Note 3",
            content: "Content 3",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
        {
            author: "User4",
            id: 4,
            title: "Note 4",
            content: "Content 4",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
        {
            author: "User1",
            id: 5,
            title: "Note 5",
            content: "Content 5",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
        {
            author: "User1",
            id: 6,
            title: "Note 6",
            content: "Content 6",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
        {
            author: "User1",
            id: 7,
            title: "Note 7",
            content: "Content 7",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
        {
            author: "User1",
            id: 8,
            title: "Note 8",
            content: "Content 8",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
        {
            author: "User1",
            id: 9,
            title: "Note 9",
            content: "Content 9",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
        {
            author: "User1",
            id: 10,
            title: "Note 10",
            content: "Content 10",
            createdAt: new Date().toLocaleString("en-US", {
                year: "numeric", // e.g., "2025"
                month: "long", // e.g., "May"
                day: "numeric", // e.g., "24"
                hour: "numeric",
                minute: "numeric",
                hour12: true, // Use AM/PM
            }),
        },
    ])
    return (
        <div className="flex py-8 px-10">
            <div>
                <h2 className="text-2xl font-bold">My Notes</h2>
                <p className="mb-8">Create and manage your personal notes</p>
                <NoteForm
                    label={"Create"}
                    handleClick={() => console.log("Create")}
                />
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid grid-cols-3 place-items-center gap-4">
                {notes &&
                    notes.map((note) => (
                        <NoteCard
                            key={note.id}
                            author={note.author}
                            id={note.id}
                            title={note.title}
                            content={note.content}
                            createdAt={note.createdAt}
                        />
                    ))}
            </div>
        </div>
    )
}
