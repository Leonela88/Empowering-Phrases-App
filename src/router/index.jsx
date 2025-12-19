import { createBrowserRouter } from "react-router";
import { Router } from "react-router";
import App from "../App";
import NewPhraseForm from "../components/New-Phrases-Form/NewPhraseForm.jsx";
import ViewAllPhrases from "../components/View-All-Phrases/ViewAllPhrases.jsx";
// import RemovePhrases from "../RemovePhrases";
import ViewPhrases from "../components/View-Phrases/ViewPhrases.jsx";

export const Router = createBrowserRouter([
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