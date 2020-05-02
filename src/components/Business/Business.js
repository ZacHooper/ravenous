import React from 'react';
import './Business.css'

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

/*
export function Business () {
    return (
        <div className="Business">
            <div className="image-container">
                <img src={business.imageSrc} alt={business.name}/>
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="rating">{business.rating} Stars</h3>
                    <p>{business.reviewCount} Reviews</p>
                </div>
            </div>
        </div>
    );
}
*/

export default Business;