import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    // the business array set in app.js is set up as a prop for this component. Here, we are accessing that prop and iterating through the business elements it contains (6 of them) and generating a Business component with a prop that corresponds to each element in the array. That way, we are generating a businesslist with 6 elements each with a prop that will allow us to access all the properties in the business object as set up in App.js
    render() {
        return (
            <div className="BusinessList">
              {
                this.props.businesses.map(business => {
                    return (
                        <Business key={business.id} business={business} />
                    )
                })
              }
            </div>
        )
    }
}

export default BusinessList;
