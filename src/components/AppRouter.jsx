import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { routes } from "../router/routes"
import { ErrorPage } from "./pages/ErrorPage"


export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {
                    routes.map(({ id, path, Element }) => <Route key={id} path={path} element={<Element />} />)
                }
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
