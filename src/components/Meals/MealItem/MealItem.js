import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import vegIcon from "../../../assets/veg-icon.png";
import nonVegIcon from "../../../assets/non-veg-icon.png";

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
    const icon = props.type.toString().toLowerCase() === "veg" ? 
    <img src={vegIcon} alt="veg icon" /> : (props.type.toString().toLowerCase() === "nonveg" ? <img src={nonVegIcon} alt="non-veg icon" /> : "");
 
    return (<li className={classes.meal}>
        <div>
            <h3>{props.index}. {props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.other}>{icon}<div>Quantity: <span className={classes.quantity}>{props.quantity}</span></div></div>
            <div className={classes.price}>{price}</div>
        </div>
        <div className={classes.formDiv}>
            <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
        </div>
    </li>);
};

export default MealItem;