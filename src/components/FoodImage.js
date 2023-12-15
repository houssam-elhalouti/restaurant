import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import two from "../img/two.png";

function FoodImage(){
  return (
    <div className='Foodimg'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <h2>We make everything by hand with the best possible ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. 
              Mauris feugiat erat tellus.Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <span className='dad'>
              <FontAwesomeIcon
                className="super-crazy-colors"
                icon={faCheck}
                size="1x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              Etiam sed dolor ac diam volutpat.
            </span>
            <span className='dad'>
              <FontAwesomeIcon
                className="super-crazy-colors"
                icon={faCheck}
                size="1x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              Erat volutpat aliquet imperdiet.
            </span>
            <span className='dad'>
              <FontAwesomeIcon
                className="super-crazy-colors"
                icon={faCheck}
                size="1x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              Purus a odio finibus bibendum.
            </span>
            <button type="button" className="btn btn-primary">Learn more</button>
          </div>
          <div className='col-md-7'>
            <img src={two} title='two' alt='two'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodImage;
