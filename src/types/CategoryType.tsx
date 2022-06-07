export interface Categories {
    id: number;
    title: string;
    description: string;
    image?:string;
    products?: productsList[];
}

export interface productsList {
    id: number ;
    title: string;
    description: string;
    price: string;
    image:string 
}