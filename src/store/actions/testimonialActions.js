export const getTestimonialData = () =>{
    return (dispatch) =>{
        //make async call to global json
        fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
            .then(res => res.json())
            .then(data => dispatch({type: 'TESTIMONIAL_PULL', testimonialData: data}) )
            .catch(error => dispatch({type: 'PULL_ERROR', error}))
        
    }
}


