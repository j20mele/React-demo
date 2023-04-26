import React from 'react';
import { Button } from './Button';

{/* JSX file, with extension snippet, type rfce tab will generate a skeletal template
    Need to import Button component*/}
function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to recieve our best vacation deals
            </p>

            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>
            {/* Nothing will show up unless you modify the Home.js under pages */}
            <div className='input-areas'>
            <form>
                <input 
                type='eamil' 
                name='email' 
                placeholder='Your Email' 
                className='footer-input'
                />

                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>

            </div>
        </section>
    </div>
  )
}

export default Footer