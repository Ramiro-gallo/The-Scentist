export const productos = [
    {
        id: 0,
        name: "Aventus",
        brand: "Creed",
        price: 485,
        category: "Men",
        stock: 12,
        description: "Aventus by Creed is a Chypre Fruity fragrance for men. Aventus was launched in 2010. Aventus was created by Jean-Christophe Hérault and Erwin Creed. Top notes are Bergamot, Black Currant, Apple, Lemon and Pink Pepper; middle notes are Pineapple, Patchouli and Moroccan Jasmine; base notes are Birch, Musk, oak moss, Ambroxan and Cedarwood.",
        img: "./src/assets/aventus.jpg"
    },
    {
        id: 1,
        name: "Layton",
        brand: "Parfums de Marly",
        price: 500,
        category: "Men",
        stock: 8,
        description: "Layton by Parfums de Marly is a Amber Floral fragrance for women and men. Layton was launched in 2016. The nose behind this fragrance is Hamid Merati-Kashani. Top notes are Apple, Lavender, Bergamot and Mandarin Orange; middle notes are Geranium, Violet and Jasmine; base notes are Vanilla, Cardamom, Sandalwood, Pepper, Guaiac Wood and Patchouli.",
        img: "./src/assets/layton.jpg"
    },
    {
        id: 2,
        name: "Baccarat Rouge",
        brand: "Maison Francis Kurkdjian",
        price: 625,
        category: "Unisex",
        stock: 5,
        description: "Baccarat Rouge 540 by Maison Francis Kurkdjian is a Amber Floral fragrance for women and men. Baccarat Rouge 540 was launched in 2015. The nose behind this fragrance is Francis Kurkdjian. Top notes are Saffron and Jasmine; middle notes are Amberwood and Ambergris; base notes are Fir Resin and Cedar.",
        img: "./src/assets/rouge.jpg"
    }    
]

export const getProducts = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(productos)
        }, 2000);
    })
};

export const getProductsByCategory = (category) => {
    return new Promise ((res) => {
        const filteredProducts = productos.filter((prod) => prod.category === category)
        setTimeout(() => {
            res(filteredProducts);
        }, 2000); 
    })
}

export const getProductById = (id) => {
    return new Promise ((res) => {
        const filteredProduct = productos.find((prod) => prod.id === parseInt(id));
        
        setTimeout(() => {
            res(filteredProduct)
        }, 2000);
    })
}