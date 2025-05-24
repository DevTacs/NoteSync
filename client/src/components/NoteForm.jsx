import React from "react"

export default function NoteForm({label, handleClick}) {
    return (
        <form className="flex flex-col gap-4">
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Title</legend>
                <input
                    type="text"
                    className="input w-full"
                    placeholder="Note title"
                />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Content</legend>
                <textarea
                    className="textarea w-full h-24"
                    placeholder="Write your note here"></textarea>
            </fieldset>
            <button className="btn btn-accent" onClick={handleClick}>
                {label}
            </button>
        </form>
    )
}
