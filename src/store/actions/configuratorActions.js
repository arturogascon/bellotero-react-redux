export const getConfiguratorData = () =>{
    return (dispatch) =>{
        //make async call to global json
        fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
            .then(res => res.json())
            .then(data => dispatch({type: 'CONFIGURATOR_PULL', configuratorData: data}) )
            .catch(error => dispatch({type: 'PULL_ERROR', error}))
        
    }
}