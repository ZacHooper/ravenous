import React from 'react';
import './BusinessList.css';
import { Business } from '../Business/Business';

/*
class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map((business, index) => {
                        return <Business key={"business_" + index} business={business} />
                    })
                }
            </div>
        );
    }
}
*/

function BusinessList(props) {
    return (
        <div className="BusinessList">
            {
                props.businesses.map((business, index) => {
                    return <Business key={`Business_${index}`} business={business}/>
                })
            }
        </div>
    );
}


export default BusinessList;