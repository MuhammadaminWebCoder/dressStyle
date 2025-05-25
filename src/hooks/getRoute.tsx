import { CardChild, Cazual, Home, Shoping } from "@/pages";
import { PATH } from "./getPath";

export const RouteItem = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
    },
    {
        id:2,
        path:PATH.cardChild,
        element:<CardChild/>,
    },
    {
        id:3,
        path:PATH.cazual,
        element:<Cazual/>,
    },
    {
        id:4,
        path:PATH.shoping,
        element:<Shoping/>,
    },
]
