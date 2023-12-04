interface IProduct {
    id: number
    colour: string
    name: string
    price: number
    img: string
    isSelected?: boolean
    quantity?: number
}

export default IProduct