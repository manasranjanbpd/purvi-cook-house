import AllMeals from '../../AllMeals.json';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import MealSelection from './MealSelection';
import { useState } from 'react';
import { useEffect } from 'react';


const AvailableMeals = () => {
    const [mealList, setMealList] = useState([]);

    useEffect(()=>{
        bindMealList()
    },[]);

    const getDropdownData=(selectedCategory,selectedFoodType,searchedTextboxValue)=>{
        bindMealList(selectedCategory,selectedFoodType,searchedTextboxValue);
    };
    
    const bindMealList = (selectedCategory, selectedFoodType,textValue) => {
        const allMeals = selectedCategory && selectedCategory.value !== "all" ? AllMeals.filter(item=>item.category === selectedCategory.value) : AllMeals;
        const filteredTypeMeals = selectedFoodType && selectedFoodType.value !== "all" ? allMeals.filter(item=>item.type === selectedFoodType.value) : allMeals;
        const filteredTextMeals = textValue && textValue.trim() !== "" ? filteredTypeMeals.filter(item=>item.name.toLocaleLowerCase().includes(textValue.toLocaleLowerCase())) : filteredTypeMeals;
        const mealsList = filteredTextMeals.map((meal,index) => 
        <MealItem 
            id={meal.id}
            key={meal.id}
            index={index+1}
            name={meal.name} 
            description={meal.description}
            quantity={meal.quantity}
            price={meal.price}
            type={meal.type} 
        />);
        setMealList(mealsList);
    };

    return <section className={classes.meals}>
        <Card>
            <div className={classes.para}>
                <p>
                Please Choose your favorite food below from our selection of available menu
                and Add to cart and Order via whatsapp to enjoy a delicious lunch or dinner at home.
                </p>
            </div>
            <MealSelection onSelectDropdownData={getDropdownData} />
            <ul>
                {mealList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;