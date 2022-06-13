import {Categories, product} from "../types/CategoryType";
import Ficus from "../images/Ficus Lyrata2.jpg";
import Decor from "../images/Monstera Delociosa.jpg";
import Coco from "../images/Coco Fiori.jpg";
import Bevess from "../images/Bevess.jpg";
import Chic from "../images/ChicFlower.jpg";
import Pin from "../images/Pin Flower.jpg";
import OliveTräd from "../images/OliveTräd.jpg";
import Bougainvillea from "../images/Bougainvillea.jpg";
import Aloevera from "../images/Aloevera.jpg";
import Kaktus from "../images/Kaktus.jpg";


export const CateType : Categories []= 
[    
    {
    id: 1,
    title: "Flowers Box",
    description: "Flowers Description",
    image: Bevess
  
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
            title: "Eternal", 
            description: "The Brilliant Eternal are lovely",
            price: "299 kr", 
            image:Pin,
            count:1,
            isInCart:false
        },
        {
            id: 2 ,
            title: "Chic", 
            description: "Natural and fresh flower box",
            price: "299 kr", 
            image:Chic,
            count:1,
            isInCart:false
        },
        {
            id: 3 ,
            title: "Coco Fiori", 
            description: "A fresh and wonderful flower",
            price: "359 kr", 
            image:Coco,
            count:1,
            isInCart:false
        },

        {
            id: 4 ,
            title: "Emerald Plant", 
            description: "Very naturally, symmetrical plant",
            price: "699 kr", 
            image:Ficus,
            count:1,
            isInCart:false
        },
        {
            id: 5 ,
            title: "Bougainvillea", 
            description: "Artificial tree with yellow flowers",
            price: "899 kr", 
            image:Bougainvillea,
            count:1,
            isInCart:false
        },
        {
            id: 6 ,
            title: "olive tree", 
            description: "lovely Olive trees with olive fruits",
            price: "499 kr", 
            image:OliveTräd,
            count:1,
            isInCart:false
        },
        {
            id: 7 ,
            title: "Monstera Plant", 
            description: "Perfect and always looks nice",
            price: "299 kr", 
            image:Decor,
            count:1,
            isInCart:false
        },
        {
            id: 8 ,
            title: "Cactus", 
            description: "Mexico's beautiful, shap cactus ",
            price: "499 kr", 
            image:Kaktus,
            count:1,
            isInCart:false
        },
        {
            id: 9 ,
            title: "Aloe Vera", 
            description: "Wonderfully and fantastikt Plant",
            price: "399 kr", 
            image:Aloevera,
            count:1,
            isInCart:false,
        },
      
    ]

