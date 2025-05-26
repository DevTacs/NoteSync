import {RouterProvider} from "react-router-dom"
import {Suspense} from "react"
import Router from "./routes/Router"
import Loading from "./components/Loading"

export default function App() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={Router} />
        </Suspense>
    )
}
