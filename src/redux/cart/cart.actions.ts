import { ActionTypes } from "./cart.types"
import { Item } from "../../Types"

export const toggleCartHidden = () => ({
  type: ActionTypes.toggleCartHidden
})

export const addItem = (item: Item) => ({
  type: ActionTypes.addItem,
  payload: item
})
