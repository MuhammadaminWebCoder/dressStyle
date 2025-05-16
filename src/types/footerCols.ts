import { ReactNode } from "react";

export interface iconsPathFooter {
    id:number,
    item:ReactNode
}
export interface footerPathAndText {
    id:number,
    path?:string,
    pathText?:string,
}
export interface footerColsType {
    id:number,
    title:string | ReactNode,
    description?:string,
    pathAndText?:footerPathAndText[],
    icons?: iconsPathFooter[],
} 
