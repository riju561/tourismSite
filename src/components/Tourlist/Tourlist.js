import React, { Component } from 'react'
import Tour from '../Tour/Tour';
import './Tourlist.scss';
import {tourData} from '../../setup/tourData';
export default class TourList extends Component {
    state={
        tours:tourData
    };
    closeTour=(id)=>{
        const {tours}=this.state;
         const sortedTours=tours.filter(tour=>tour.id!==id);
                this.setState({
                tours:sortedTours
            });}
    render() {
        
        const {tours}=this.state;
        return (
            <section className="tourlist">
                {tours.map(tour=>{
                    return(
                        <Tour key={tour.id} tour={tour} closeTour={this.closeTour}/>
                    );
                })}
            </section>
        )
    }
}
