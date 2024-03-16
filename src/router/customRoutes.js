import Home from "../pages/home/Home";
import Episodes from "../pages/episodes/Episodes";
import Characters from "../pages/characters/Characters";
import CharacterDetail from "../pages/character-detail/CharacterDetail";
import NotFound from "../pages/not-found/NotFound";


export const customRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/characters",
        element: <Characters />
    },
    {
        path: "/characters/:id",
        element: <CharacterDetail />
    },
    {
        path: "/episodes",
        element: <Episodes />
    },
    {
        path: "*",
        element: <NotFound />
    },
];