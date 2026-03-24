/**

============================
TYPE ALIAS (Object Shape)
============================
Using type to define structure of a Pizza object
*/
type Pizza = {
name: string
price: number
}

/**

============================
LITERAL TYPES + UNION TYPES
============================
Restricting status to only specific string values
*/
type OrderStatus = "ordered" | "completed"

/**

============================
NESTED TYPES
============================
Using one type (Pizza) inside another (Order)
*/
type Order = {
id: number
pizza: Pizza
status: OrderStatus
}

/**

============================
ARRAY TYPE ANNOTATION
============================
Explicitly typing an array of Pizza objects
*/
const menu: Pizza[] = [
{ name: "Margherita", price: 8 },
{ name: "Pepperoni", price: 10 },
{ name: "Hawaiian", price: 10 },
{ name: "Veggie", price: 9 },
]