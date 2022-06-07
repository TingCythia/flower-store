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


export default CateType