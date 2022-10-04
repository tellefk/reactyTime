import { Fragment } from 'react';

import mealsImage from '../../assets/mealsImage.jpg'
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header} >
                <h1> React meals</h1>
                <HeaderCartButton onClickShowCart={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img scr={mealsImage} alt="A table full of delicious food"/>
            </div>
        </Fragment>)
}



export default Header 