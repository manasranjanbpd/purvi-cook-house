import AllCategory from '../../AllCategory.json';
import classes from './MealSelection.module.css';
import Select from 'react-select';
import { useRef, useState } from 'react';
import vegIcon from "../../assets/veg-icon.png";
import nonVegIcon from "../../assets/non-veg-icon.png";
import IconSearch from '../../assets/icon-search.png';

const MealSelection = (props) => {
    
    const [category, setCategory] = useState(AllCategory[0]);
    const foodSearchRef = useRef();

    const allFoodType = [
        {
            value: "all",
            label: "All",
            image: null
        },{
            value: "veg",
            label: "Veg",
            image: vegIcon
        },{
            value: "nonveg",
            label: "Non Veg",
            image: nonVegIcon
        }];

    const formatOptionLabel = ({value,label,image}) => (
        <div className={classes.typeSelector}>
            {value !== "all" && <div className={classes.flex}><img className={classes.typeIcon} src={image} alt="food-type" /></div>}
            <div className={classes.labelClass}>{label}</div>
        </div>);

    const [foodType, setFoodType] = useState(allFoodType[0]);

    const typeDropdownSelectionHandler = (value) => {
        setFoodType(value);
        props.onSelectDropdownData(category,value,foodSearchRef.current.value);
    };

    const categoryDropdownSelectionHandler = (value) => {
        setCategory(value);
        props.onSelectDropdownData(value,foodType,foodSearchRef.current.value);
    };

    const inputChangeHandler = () => {
        props.onSelectDropdownData(category,foodType,foodSearchRef.current.value);
    };
    const [inputFocus,setInputFocus] = useState(false);

    const toggleFocusHandler = () => {
        setInputFocus(!inputFocus);
    };

    return(
        <div className={classes.parent}>
            <div className={classes.onlyDropdownDivs}>
                <div className={classes.typeDiv}>
                    Select Type:
                    <Select
                    closeMenuOnSelect={true}
                    defaultValue={foodType}
                    options={allFoodType}
                    onChange={(selectedValue) => typeDropdownSelectionHandler(selectedValue)}
                    formatOptionLabel={formatOptionLabel}
                /></div>
                <div className={classes.categoryDiv}>
                    Select Category:
                    <Select
                    closeMenuOnSelect={true}
                    defaultValue={category}
                    options={AllCategory}
                    onChange={(selectedValue) => categoryDropdownSelectionHandler(selectedValue)}
                /></div>
            </div>            
            <div className={classes.inputDivParent}>
                <div className={`${classes.inputDiv} ${inputFocus && classes.inputSelected}`}>
                    <span className={classes.searchIconContainer}><img src={IconSearch} alt="search"/></span>
                    <input 
                        ref={foodSearchRef}
                        id='searchFoodInput'
                        type='text'
                        placeholder='Search Food' 
                        onChange={inputChangeHandler}
                        onFocus={toggleFocusHandler}
                        onBlur={toggleFocusHandler}
                    />
                </div>
            </div>    
        </div>
    );
};

export default MealSelection;