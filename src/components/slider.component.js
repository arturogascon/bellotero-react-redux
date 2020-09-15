import React from 'react';
import arrow from '../assets/arrow.png';

export default function Slider ({reviews, currentReview, totalReviews, handleNextReview, handlePreviousReview}){
    return (
        <section id="testimonial-section">
                    <div id="author-container">
                        <span id="author-name">{reviews.name}</span>
                        <span id="author-ref">{reviews.position}</span>
                    </div>
                    <div id="quote-container">
                        <span id="quote">
                            {reviews.comment}
                        </span>
                        <div id="controls-container">
                            <div>
                                <span>{currentReview}/{totalReviews}</span>
                            </div>
                            <div>
                                <button type="button" onClick={handlePreviousReview}>
                                    <img src={arrow} alt="<-" id="previous-arrow"/>
                                </button>
                                <button type="button" onClick={handleNextReview}>
                                    <img src={arrow} alt="->" id="next-arrow"/>
                                </button>
                            </div>
                        </div>
                    </div>  
        </section>
    );
}