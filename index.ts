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

/**

============================
TYPE INFERENCE (PRIMITIVES)
============================
TypeScript infers number type automatically
*/
let cashInRegister = 100
let nextOrderId = 1

/**

============================
ARRAY OF CUSTOM TYPES
============================
*/
const orderQueue: Order[] = []

/**

============================
FUNCTION PARAMETER TYPE
============================
Enforcing input type using Pizza
*/
function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

/**

============================
FUNCTION WITH STRING PARAM


TYPE INFERENCE IN CALLBACK

============================
*/
function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)

    /**
    
    TYPE NARROWING
    Checking for undefined before using value
    */
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }

    cashInRegister += selectedPizza.price

    /**
    
    OBJECT WITH EXPLICIT TYPE
    Ensures structure matches Order type
    */
    const newOrder: Order = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered"
    }

    orderQueue.push(newOrder)

    return newOrder
}