import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTestimonialData} from '../store/actions/testimonialActions';
import Slider from './slider.component';
import './testimonial.scss';

class Testimonial extends Component {
    componentDidMount(){
        if (!this.props.slider){
            this.props.getTestimonialData(); 
        }
    }

    handleNextReview = () => {
        if(this.props.currentReview + 1 < this.props.slider.reviews.length){
            this.props.nextReview();
        }
    }

    handlePreviousReview = () => {
        if(this.props.currentReview > 0){
            this.props.previousReview();
        }
    }

    
    render(){
        const {slider, currentReview} = this.props;
        return slider ? (
                <div className="component">
                    <div className="header-container">
                        <h1>{slider.title}</h1>
                    </div>
                    <Slider 
                        reviews={slider.reviews[currentReview]}
                        currentReview={currentReview + 1} 
                        totalReviews={slider.reviews.length}
                        handleNextReview={this.handleNextReview}
                        handlePreviousReview={this.handlePreviousReview}/>
                </div>

        ) :     <div></div>
    }
}

const  mapStateToProps = (state) => {
    return {
        slider: state.testimonialData,
        currentReview: state.currentReview
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getTestimonialData: () => dispatch(getTestimonialData()),
        nextReview: () => dispatch({type: 'NEXT_REVIEW'}),
        previousReview: () => dispatch({type: 'PREVIOUS_REVIEW'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);