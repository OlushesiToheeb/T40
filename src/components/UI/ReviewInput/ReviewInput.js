import React from 'react';

import ReactStars from 'react-stars';

import './ReviewInput.css'

const reviewInput = (props) =>{


  
console.log(props.reviewsData)

  return(
    <div className="gradient">
      <div className="container">
        <div className="row">
            <div className="col-md-12" >
              <h2>Reviews</h2>
              {props.reviewsData.map(data=>(
                <div style={{marginTop: '15px'}}>
                  <p><b>{data.reviews.customerName}</b></p>
                  <p>Rode from <b>{data.reviews.from}</b> to <b>{data.reviews.to}</b> via <b>{data.reviews.operatorName}</b> </p>
                  <p>{data.reviews.review}</p>
                  <ReactStars 
                  count={5}
                  value={data.reviews.ratingValue} 
                  size={22}/>
                </div>
              ))}
            </div>
    
          <div className="pagination-wrapper">
            <button   
              type="button" 
              className="btn btn-secondary" 
              style={{background: "rgb(252, 84, 38)", display:'flex', marginRight:'5px'}}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
                  </path>
                </svg> Previous
            </button>
            <button 
              type="button" 
              className="left-mg btn btn-secondary" 
              style={{background: "rgb(252, 84, 38)", display:'flex'}}>Next 
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default reviewInput