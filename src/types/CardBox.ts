import { Testimonial } from "../components/OwlCards";

    export interface cardItemsType {
    id:number,
    image: string,
    image1: string,
    image2: string,
    title:string,
    rate:string,
    newPrice:number,
    degree:"new"|"old"|"top",
    description:string,
    color:"red"|"blue"|"green"| "orange",
    selectSizeId:number,
    selectColorId:number,
    size:"large" | "small" | "medium" | "extraLarge",
    count:number,
    oldPrice:null | number,
    salePercent:null | number,
    productComents:Testimonial
}
