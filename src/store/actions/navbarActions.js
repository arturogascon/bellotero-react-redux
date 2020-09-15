export const getNavbarData = () =>{
    return (dispatch) =>{
        //make async call to global json
        fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
            .then(res => res.json())
            .then(data => dispatch({type: 'NAVBAR_PULL', navbarData: data}) )
            .catch(error => dispatch({type: 'PULL_ERROR', error}))
        
    }
}