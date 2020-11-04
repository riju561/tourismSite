import React, { Component } from 'react'
import Logo from '../../setup/logo.png';
import './Tour.scss';
export default class Tour extends Component {
    state={
        showInfo:false
    }
    infoHandler=()=>{
        this.setState({showInfo:!this.state.showInfo})
    }
    
    render() {
        const {id,city,img,name,info}=this.props.tour;
        const {closeTour}=this.props;
        return (
            <article className="tour">
                <div className="image-container">
                    <img src={img} alt="asdada"/>
                    <span className="close-btn">
                        <i className="fas fa-window-close" onClick={()=>closeTour(id)}/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>Info<span>
                        <i className="fas fa-caret-square-down" onClick={this.infoHandler}/></span>
                        </h5>
                        {this.state.showInfo && <p>{info}</p>}
                                 </div>
            </article>
        )
    }
}
