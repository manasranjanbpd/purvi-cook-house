import AllMeals from '../../AllMeals.json';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    const mealsList = AllMeals.map((meal,index) => 
    <MealItem 
        id={meal.id}
        key={meal.id}
        index={index+1}
        name={meal.name} 
        description={meal.description}
        quantity={meal.quantity}
        price={meal.price}
        type={meal.type} />);
    return <section className={classes.meals}>
        <Card>
            <div className={classes.para}>
                <p>
                Please Choose your favorite food below from our selection of available menu
                and Add to cart and Order via whatsapp to enjoy a delicious lunch or dinner at home.
                </p>
            </div>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;