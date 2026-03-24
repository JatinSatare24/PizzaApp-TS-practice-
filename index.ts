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