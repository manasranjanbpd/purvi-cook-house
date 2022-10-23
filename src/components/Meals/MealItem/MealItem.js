import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `SEK ${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return <li className={classes.meal}>
        <div>
            <h3>{props.index}. {props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div>Quantity: <span className={classes.quantity}>{props.quantity}</span></div>
            <div className={classes.price}>{price}</div>
        </div>
        <div className={classes.formDiv}>
            <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
        </div>
    </li>
};

export default MealItem;