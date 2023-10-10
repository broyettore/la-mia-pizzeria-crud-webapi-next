export interface Pizza {
    pizzaId: number,
    name: string,
    imgPath: string,
    description: string,
    price: number,
    categoryId: number,
    category: Category
}

export interface Category {
    categoryId: number,
    title: string,
}

