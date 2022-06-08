export interface Categories {
    id: number;
    title: string;
    description: string;
    image?:string;
}

export interface product{
    id: number ;
    title: string;
    description: string;
    price: string;
    image:string;
    count: number;
    isInCart:boolean
}