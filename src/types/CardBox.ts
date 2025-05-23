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
    color:"green"|"red"|"yellow"|"orange"|"blue"|"aqua"|"purple"|"pink"|"white"|"black",
    selectSizeId:number,
    selectColorId:number,
    size:"XX-Small"|"X-Small"|"Small"|"Medium"|"Large"|"X-Large"|"XX-Large"|"3X-Large"|"4X-Large",
    count:number,
    cazual:'Jeans'|'Hoodie'|'Shirts'|'Shorts'|'T-shirts',
    oldPrice:null | number,
    salePercent:null | number,
    productComents:Testimonial[]
}
