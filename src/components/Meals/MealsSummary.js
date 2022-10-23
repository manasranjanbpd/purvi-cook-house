import Typewriter from 'typewriter-effect';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <Typewriter
            options={{
                autoStart: true,
                loop: true
              }}
            onInit={(typewriter)=>{
                typewriter
                .typeString("<span style='font-size:20px;'>Welcome to <strong>Purvi's Cook House</strong>...</span><br/>")
                .pauseFor(1000)
                .typeString("We cook and deliver home-cooked meals to you.")
                .start();
            }} />
        </section>
    );
};

export default MealsSummary;