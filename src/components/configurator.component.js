import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getConfiguratorData} from '../store/actions/configuratorActions';
import './configurator.scss';

class Configurator extends Component {
    componentDidMount(){
        if (!this.props.data){
            this.props.getConfiguratorData(); 
        }
    }

    handleMonthlySpending = (e) =>{
        this.props.changeMonthlySpending(e.target.value);
    }

    handleEmployeeQty = (e) =>{
        this.props.changeEmployeeQty(e.target.value);
    }
    render(){
        if (this.props.data){
            const {data} = this.props,
                  {title} = data,
                  {description} = data,
                  titleSplits = /(.*\w)\s*(Bellotero.io)/.exec(title),
                  firstWords = titleSplits[1],
                  lastWords = titleSplits[2],
                  {monthlySpending} = this.props,
                  {employeeQty} = this.props,
                  foodCostSavings = (monthlySpending * .3).toFixed(2),
                  annualSavings = employeeQty *1337 + parseInt(foodCostSavings, 10),
                  aSavingsFormatted = new Intl.NumberFormat().format(annualSavings);
                  

            return (
                <div className="component">
                <section id="configurator-description" className="configurator-section">
                    <div className="header-container">
                            <h1>{firstWords}</h1>
                    </div>
                    <div className="header-container below">
                            <h1>{lastWords}</h1>
                    </div>
                    <p>
                        {description}
                    </p>
                </section>
                <section id="configurator-calculator" className="configurator-section">
                    <div>
                        <div className="value-section">
                            <label>Monthly<br/>ingredient spending</label>
                            <div id="spending-value"><span id="money-sign">$</span><span className="number-value">{monthlySpending}</span></div>
                        </div>
                        <input type="range" min="10" max="100" step="1" onChange={this.handleMonthlySpending}
                        />
                    </div>
                    <div>
                        <div className="value-section">
                            <label>Full-time employees that<br/>process invoices</label>
                            <div id="employee-value"><span className="number-value">{employeeQty}</span></div>
                        </div>
                        <input type="range" min="1" max="10" step="1" value={employeeQty} onChange={this.handleEmployeeQty} />
                    </div>
                    <div id="calculation-section">
                        <div className="calculation-container">
                            <div>
                                <span className="sign-result">$</span>
                                <span className="number-result">{foodCostSavings}</span>
                            </div>
                            <span className="label-result">Estimated cost food savings</span>
                        </div>
                        <div className="calculation-container" >
                            <div>
                                <span className="sign-result">$</span>
                                <span className="number-result">{aSavingsFormatted}</span>
                            </div>
                            <span className="label-result">Your estimated anual savings</span>
                        </div>
                    </div>
                </section>
            </div>
            );

        }
        else{
            return  <div></div>
        }
        
    }
}

const  mapStateToProps = (state) => {
    return {
        data: state.configuratorData,
        monthlySpending: state.monthlySpending,
        employeeQty: state.employeeQty
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getConfiguratorData: () => dispatch(getConfiguratorData()),
        changeMonthlySpending: (value) => dispatch({type: 'MONTHLY_SPENDING', value}),
        changeEmployeeQty: (qty) => dispatch({type: 'EMPLOYEE_QUANTITY', qty})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Configurator)