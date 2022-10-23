import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import WhatsappDetails from '../../whatsappDetails.json';
import whatsappIcon from '../../assets/whatsapp-icon.png';
const Cart = (props) =>{
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const totalAmount = `SEK ${cartCtx.totalAmount.toFixed(2)}`;
    
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount:1});
    };

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map((item)=> 
                <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                onAdd={cartItemAddHandler.bind(null,item)} />)
        }</ul>;
    
    const orderOnWhatsappHandler = () =>{
        let line1=`Hello,\r\nI want to order below ${cartCtx.items.length === 1 ? `item`: `items` } -\r\n`;
        let items = "";
        for(let i=0;i<cartCtx.items.length;i++){
            items+= `${i+1}. ${cartCtx.items[i].name} x${cartCtx.items[i].amount}\r\n`;
        }
        let finalText = encodeURIComponent(`${line1}\r\n${items}`);
        let linkToWhatsapp = WhatsappDetails.link.replace("{number}",WhatsappDetails.number) + finalText;
        window.open(linkToWhatsapp);
    };  

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            {hasItems && <button onClick={orderOnWhatsappHandler} className={classes.button}><img className={classes.whatsappImage} src={whatsappIcon} alt="whatsapp-icon" /> Order on Whatsapp</button>}
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        </div>
    </Modal>
};

export default Cart;