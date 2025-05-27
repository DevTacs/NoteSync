import React from "react"

export default function Loading() {
    return (
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
            <span className="loading loading-spinner text-accent w-10 h-10"></span>
        </div>
    )
}
