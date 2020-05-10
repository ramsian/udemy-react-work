import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('{Cockpit.js} useEffect');
        //HTTP request if any
        //With this set-up, the below call happens every time the component is rendered.
        const timer = setTimeout(() => {
            alert('Saved data to cloud.')
        }, 1000);

        //Passing list of arguments to the useEffect so that it gets fired only when the passed props are changed.
        //Passig an empty argument will fire the request only for the first time.
        return () => {
            console.log('{Cockpit.js} clean-up work using useEffect');
            clearTimeout(timer);
        };
    }, []);

    let btnClass= '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    )
};

export default React.memo(cockpit);