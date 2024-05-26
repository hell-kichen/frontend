export interface Recipes {
    count: number,
    next: string,
    previous: string,
    results: [{
        id: string,
        tags: [
            {
                id: string,
                name: string,
                color: string,
                slug: string
            }
        ],
        author: {
            id: string,
            email: string,
            username: string,
            first_name: string,
            last_name: string,
            is_subscribed: boolean
        },
        ingredients: [
            {
                id: string,
                name: string,
                measurement_unit: string,
                amount: number
            }
        ],
        is_favorited: boolean,
        is_in_shopping_cart: boolean,
        name: string,
        image: string,
        text: string,
        cooking_time: number
    }]
}