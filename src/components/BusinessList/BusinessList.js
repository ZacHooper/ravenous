import React from 'react';
import './BusinessList.css';
import { Business } from '../Business/Business';


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

/*
function BusinessList() {
    return (
        <div className="BusinessList">
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
}
*/

export default BusinessList;