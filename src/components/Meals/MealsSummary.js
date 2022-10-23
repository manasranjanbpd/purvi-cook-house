import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite food from our selection of available menu
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked fresh with high-quality ingredients, 
                so it will take some time to make before you get your food served,
                of course by our experienced chef.
            </p>
        </section>
    );
};

export default MealsSummary;