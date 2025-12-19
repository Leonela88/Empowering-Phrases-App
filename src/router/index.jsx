import { createBrowserRouter } from "react-router";
import App from "../App";
import NewPhraseForm from "../components/NewPhraseForm";
import ViewAllPhrases from "../ViewAllPhrases";
import RemovePhrases from "../RemovePhrases";
import ViewPhrases from "../ViewPhrases";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: ViewPhrases,
            },
            {
                path: '/form',
                Component: NewPhraseForm
            },
            {
                path: '/viewAll',
                Component: ViewAllPhrases
            },
        ]
    },
])