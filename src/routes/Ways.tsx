import { Routes as Rotas, Route } from "react-router-dom";
import { Home } from "../layouts/Home";

export const Ways = () => {
    return (
        <Rotas>
            <Route path="/" element={<Home/>}></Route>
        </Rotas>
    )
}