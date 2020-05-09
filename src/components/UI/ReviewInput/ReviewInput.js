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
                 Previous
            </button>
            <button 
              type="button" 
              className="left-mg btn btn-secondary" 
              style={{background: "rgb(252, 84, 38)", display:'flex'}}>Next 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default reviewInput