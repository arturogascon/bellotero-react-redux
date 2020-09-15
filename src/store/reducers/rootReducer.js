const initState = {
    currentReview: 0,
    monthlySpending: 50,
    employeeQty: 5
}

/*navbarItems, testimonialData and configurationData properties are not initialized 
as state  properties make code cleaner*/
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'NAVBAR_PULL':
            return {
                ...state,
                navbarItems: action.navbarData.menu.items
            }
        case 'TESTIMONIAL_PULL':
            return {
                ...state,
                testimonialData: action.testimonialData.slider
            }
        case 'NEXT_REVIEW':
            return{
                ...state,
                currentReview: state.currentReview + 1
            }
        case 'PREVIOUS_REVIEW':
            return{
                ...state,
                currentReview: state.currentReview - 1 
            }
        case 'CONFIGURATOR_PULL':
            return {
                ...state,
                configuratorData: action.configuratorData.calculator
            }
        case 'MONTHLY_SPENDING':
            return {
                ...state,
                monthlySpending: action.value
            }
        case 'EMPLOYEE_QUANTITY':
            return {
                ...state,
                employeeQty: action.qty
            }
        case 'PULL_ERROR':
            console.log(action.error)
            return {
                ...state
            }
        default:
            return state;
    }
   
}

export default rootReducer;