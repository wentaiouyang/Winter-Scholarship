import React from 'react'
import classes from './Window.module.scss';

export default function Window() {
    return (
        <div className={classes.body}>
            <div className={classes.window}>
                <div className={classes.header}>
                    <h1>NOTICE</h1>
                    <button claaaName={classes.button}>&times;</button>
                </div>
                
                <div className={classes.content}>
                THIS SURVEY WILL TAKE YOU ABOUT 30 MINS. IF YOU FIND ANY GLOSSARY IS CONFUSING, CLICKING EITHER SEARCH BUTTON OR THE QUESTION MARK.
                </div>

            </div>
            <div claaNmae={classes.overlay}></div>
        </div>

    )
}
