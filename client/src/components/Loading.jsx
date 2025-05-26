import React from "react"

export default function Loading() {
    return (
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-transparent backdrop: blur-2xl">
            <span className="loading loading-spinner text-accent w-15 h-15"></span>
        </div>
    )
}
