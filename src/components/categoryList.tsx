import {Categories} from "../types/CategoryType";
import Sunflower from "../images/SunflowerImage.jpg";
import Ficus from "../images/Ficus Lyrata2.jpg";
import Decor from "../images/Monstera Delociosa.jpg"



const CateType : Categories []= 
[    
    {
    id: 1,
    title: "Flowers",
    description: "Flowers Description",
    image: Sunflower,
    products: [
    {
        id: 1 ,
        title: "Tulip Flower", 
        description: "Beautiful flower 1",
        price: "98 kr", 
        image:Sunflower
    },
    {
        id: 2 ,
        title: "Tulip Flower", 
        description: "Beautiful flower 1",
        price: "98 kr", 
        image:Sunflower
    },
    {
        id: 3 ,
        title: "Tulip Flower", 
        description: "Beautiful flower 1",
        price: "98 kr", 
        image:Sunflower
    },
    ]
    },
    {
    id:2,
    title: "Green Trees",
    description: "Trees Description",
    image: Ficus,
    products: [
        {
            id: 4 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Ficus,
        },
        {
            id: 5 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Ficus,
        },
        {
            id: 6 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Ficus,
        },
        ]
    },
    {
    id:3,
    title: "Decorations ",
    description: "DecorationsDescription",
    image: Decor,
    products: [
        {
            id: 7 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Decor,
        },
        {
            id: 8 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Decor,
        },
        {
            id: 9 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Decor,
        },
        ]
    },
];


export default CateType