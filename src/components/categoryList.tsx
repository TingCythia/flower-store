import {Categories, product} from "../types/CategoryType";
import Sunflower from "../images/SunflowerImage.jpg";
import Ficus from "../images/Ficus Lyrata2.jpg";
import Decor from "../images/Monstera Delociosa.jpg"



export const CateType : Categories []= 
[    
    {
    id: 1,
    title: "Flowers",
    description: "Flowers Description",
    image: Sunflower
  
    },
    {
    id:2,
    title: "Green Trees",
    description: "Trees Description",
    image: Ficus
  
    },
    {
    id:3,
    title: "Decorations ",
    description: "DecorationsDescription",
    image: Decor

    },
];

export const productsData: product [] = 
[
        {
            id: 1 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Sunflower,
            count:1,
            isInCart:false
        },
        {
            id: 2 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Sunflower,
            count:1,
            isInCart:false
        },
        {
            id: 3 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Sunflower,
            count:1,
            isInCart:false
        },

        {
            id: 4 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Ficus,
            count:1,
            isInCart:false
        },
        {
            id: 5 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Ficus,
            count:1,
            isInCart:false
        },
        {
            id: 6 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Ficus,
            count:1,
            isInCart:false
        },
        {
            id: 7 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Decor,
            count:1,
            isInCart:false
        },
        {
            id: 8 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Decor,
            count:1,
            isInCart:false
        },
        {
            id: 9 ,
            title: "Tulip Flower", 
            description: "Beautiful flower 1",
            price: "98 kr", 
            image:Decor,
            count:1,
            isInCart:false,
        },
      
    ]

