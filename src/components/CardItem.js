import React from 'react';
import { Link } from 'react-router-dom';

{/* Need to pass in properties  declared in cards.js*/}
function CardItem(props) {
  return (
    <>
        <li className='cards__item'>
            {/* Taking whatever you took at the cards.js (explaining to attribute in Link Tag), it'll pass it down to the Link component, which will display on the screen */}
            <Link
            className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    {/* Will have a data category */}
                    <img src={props.src} alt='Travel Image'
                    className="cards__item__img"/>
                </figure>
                <div className='cards__item__info'>
                    {/* h5 doesn't need an ending h5 tag?*/}
                    {/* It shouldn't be a self-closing tag, so ending h5 tag is required */}
                    <h5 className='cards__item__text'>{props.text}</h5> 
                    {/* This will have a nice clear card, if you look at card.js all of the properties that were pass in CardItem
                    are now showing up, so if you want to modify label that is displayed with the card go to the Cards.css 
                    if you check the .cards__item_pic-wrap, that is where you'll see the small adventure label with the photo
                    css property: attr(data-category); */}
                </div>
            </Link>
        </li>

    </>


  )
}

export default CardItem