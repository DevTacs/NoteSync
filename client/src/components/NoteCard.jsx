export default function NoteCard({id, title, content}) {
    return (
        <div
            key={id}
            className="card w-96 bg-base-100 card-md shadow-sm shadow-accent">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
