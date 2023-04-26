import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

{/* Don't forget to import Cards.css to see container with different destintation/components? */}
{/* Need to add properties, to have card components appear
    So you need to pass in some props  */}

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destintations!</h1>
        {/* This where the cards container will be placed, it'll be wrapping all of the <li> tags in the <ul> tag */}
        <div className='cards__container'>
            <div className='cards_wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                    {/* You can now copy the CardItem Component and add more photos */}
                    {/* You're able to change the label to any string so it'll display text within blue label with CardItem component */}
                    <CardItem 
                    src='images/img-2.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />
                    {/* You're able to show a row with 4 CardItem components 
                        And another row with 2 CardItems components
                        To do this, you need to place another <ul> tag
                        */}
                </ul>

                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />

                    <CardItem 
                    src='images/img-2.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />
                    
                    <CardItem 
                    src='images/img-2.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />


                </ul>
              
            </div>
        </div>
    
    
    </div>
  )
}

export default Cards