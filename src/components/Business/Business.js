import React from 'react';
import './Business.css'

/*
export class Business extends React.Component {
    render() {
        console.log(this.props.imageSrc);
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt={this.props.business.name}/>
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{this.props.business.state} {this.props.business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                        <h3 className="rating">{this.props.business.rating} Stars</h3>
                        <p>{this.props.business.reviewCount} Reviews</p>
                    </div>
                </div>
            </div>
        );
    }
} 
*/

export function Business (props) {
    return (
        <div className="Business">
            <div className="image-container">
                <img src={props.business.imageSrc} alt={props.business.name}/>
            </div>
            <h2>{props.business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <a href={`https://www.google.com/maps/search/?api=1&query=${props.business.latitude},${props.business.longitude}`} target="_blank">
                        <p>{props.business.address}</p>
                        <p>{props.business.city}</p>
                        <p>{props.business.state} {props.business.zipCode}</p>
                    </a>
                </div>
                <div className="Business-reviews">
                    <h3>{props.business.category}</h3>
                    <h3 className="rating">{props.business.rating} Stars</h3>
                    <p>{props.business.reviewCount} Reviews</p>
                </div>
            </div>
        </div>
    );
}


export default Business;