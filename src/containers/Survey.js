import React from 'react';
import classes from './Survey.module.scss';
import HtmlForm from'../components/Form/HtmlForm';

const Survey = ()=> {

    return(

        <body className={classes.container}>
            <div className={classes.font}>
            <HtmlForm/>
            </div>
        </body>
        
    )
} 

export default Survey;