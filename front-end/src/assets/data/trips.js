import tripImg from "../images/trip-01.jpg";
import tripImg02 from "../images/trip-02.jpg";
import tripImg03 from "../images/trip-03.jpg";
import tripImg04 from "../images/trip-04.jpg";
import tripImg05 from "../images/trip-05.jpg";
import tripImg06 from "../images/trip-06.jpg";
import tripImg07 from "../images/trip-07.jpg";
import tripImg08 from "../images/trip-08.jpg";


const trip = [
    {
        id: 1,
        title: "Mzuzu to Blantyre",
        city: "blantyre",
        distance: "100km",
        price: 35000,
        address: "somewhere",
        maxGroupSize: 10,
        desc: "This is a trip to blantyre",
        reviews: [],
        avgRating: 4.5,
        photo: tripImg,
        rating: 4.5,
        featured: true,
    },
    {
        id: 2,
        title: "Blantyre to Lilongwe",
        city: "Lilongwe",
        address: "somewhere",
        distance: "100km",
        price: 30000,
        maxGroupSize: 10,
        desc: "This is a trip to Lilongwe",
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
            }
        ],
        avgRating: 4.5,
        photo: tripImg02,
        rating: 4.5,
        featured: true,
        
    },
    {
        id: 3,
        title: "Lilongwe to Mzuzu",
        city: "Mzuzu",
        distance: "100km",
        address: "somewhere",
        price: 20000,
        maxGroupSize: 10,
        desc: "This is a trip to Mzuzu",
        reviews: [
            {   
                name: "John Doe",
                rating: 4.5,
            }
        ],
        avgRating: 4.5,
        photo: tripImg03,
        rating: 4.5,
        featured: true,
        
    },
    {
        id: 4,
        title: "Lilongwe to Zomba",
        city: "Zomba",
        distance: "100km",
        address: "somewhere",
        price: 15000,
        maxGroupSize: 10,
        desc: "This is a trip to Zomba",
        reviews: [],
        avgRating: 4.5,
        photo: tripImg04,
        rating: 4.5,
        featured: true,
        
    },
    {
        id: 5,
        title: "Mzuzu to Karonga",
        city: "Karonga",
        distance: "100km",
        address: "somewhere",
        price: 10000,
        maxGroupSize: 10,
        desc: "This is a trip to Karonga",
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
            }
        ],
        avgRating: 4.5,
        photo: tripImg05,
        rating: 4.5,
        featured: true,
    },
    {
        id: 6,
        title: "Blantyre to Johannesburg, South Africa",
        city: "blantyre",
        distance: "100km",
        address: "somewhere",
        price: 150000,
        maxGroupSize: 10,
        desc: "This is a trip to Johannesburg",
        reviews: [],
        avgRating: 4.5,
        photo: tripImg06,
        rating: 4.5,
        featured: false,
    },
    {
        id: 7,
        title: "Lilongwe to Dar es Salaam, Tanzania",
        city: "Dar es Salaam",
        distance: "100km",
        address: "somewhere",
        price: 100000,
        maxGroupSize: 10,
        desc: "This is a trip to Dar es Salaam",
        reviews: [],
        avgRating: 4.5,
        photo: tripImg07,
        rating: 4.5,
        featured: true,
    },
    {
        id: 8,
        title: "Lilongwe to Lusaka, Zambia",
        city: "Lusaka",
        distance: "100km",
        address: "somewhere",
        price: 80000,
        maxGroupSize: 10,
        desc: "This is a trip to Lusaka",
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
            }
        ],
        avgRating: 4.5,
        photo: tripImg08,
        rating: 4.5,
        featured: false,
    },

];

export default trip;