import React, {Component} from 'react';
import logo from '../bellotero.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getNavbarData} from '../store/actions/navbarActions';
import './navbar.scss'

class Navbar extends Component {
    componentDidMount(){
        if (!this.props.items){
            //makes async request for Navbar (global) component so it just need to be done once
            this.props.getNavbarData(); 
        }
    }
    render(){
        const {items} = this.props;
        return items ? (
            <nav>
                <div className="nav-div-container">
                    <img src={logo} alt="Bellotero logo"/>
                    <ul>
                        <li>
                            <Link to="/">{items[0].text}</Link>
                        </li>
                        <li>
                            <Link to="/configurator">{items[1].text}</Link>
                        </li> 
                        <li>
                            {items[2].text}
                        </li> 
                        <li>
                            {items[3].text}
                        </li>     
                    </ul>
                </div>
                
            </nav>
        ) : (<div></div>)

    }
}

const  mapStateToProps = (state) => {
    return {
        items: state.navbarItems
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getNavbarData: () => dispatch(getNavbarData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);