import Typewriter from 'typewriter-effect';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <Typewriter
            options={{
                autoStart: true
              }}
            onInit={(typewriter)=>{
                typewriter
                .typeString("<span style='font-size:20px;'>Welcome to <br/><strong><span style='font-size:25px;'>Purvi's CookHouse</strong></span><br/>")
                .pauseFor(1000)
                .typeString("We cook and deliver home-cooked meals to you....")
                .start();
            }} />
        </section>
    );
};

export default MealsSummary;