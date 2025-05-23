import React from "react"

export default function NoteForm() {
    return (
        <form className="flex flex-col">
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Title</legend>
                <input type="text" className="input" placeholder="Note title" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Content</legend>
                <textarea
                    className="textarea h-24"
                    placeholder="Write your note here"></textarea>
            </fieldset>
            <button className="btn btn-accent">Create Note</button>
        </form>
    )
}
