import RosesImage from '../image/HibiscusImage.jpg'
import LilyImage from '../image/LilyImage.jpg'
import SunflowerImage from '../image/RosesImage.jpg'
import TulipImage from '../image/SunflowerImage.jpg'
import HibiscusImage from '../image/TulipImage.jpg'


export interface Products {
    id: number,
    name: string,
    image: string
}



export const Products: Products[] = [
    {
        id: 0,
        name: "Lilys",
        image: LilyImage
    },
    {
        id: 1,
        name: "Roses",
        image: RosesImage
    },
    {
        id: 2,
        name: "Sunflower",
        image: SunflowerImage
    },
    {
        id: 3,
        name: "Tulip",
        image: TulipImage
    },
    {
        id: 4,
        name: "Hibiscus",
        image: HibiscusImage
    },
]

