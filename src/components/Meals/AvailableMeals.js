import AllMeals from '../../AllMeals.json';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    const mealsList = AllMeals.map(meal => 
    <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description}
        quantity={meal.quantity}
        price={meal.price} />);
    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;