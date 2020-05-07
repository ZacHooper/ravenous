const apiKey = 'v_azCIIzrss_4fUjoezF0KAN1ZAeGLk2eghrhzFKzv0hSmqbuemIFzd10ptsb52KDSZ9vQVzn6W3Ug_YRP_P_LZcl8nB4WtgHfCiqlnFEkRmUxvK0IhKrLyZWOCzXnYx';


const Yelp = {
    /* // ES6 way
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                    {
                        headers: {Authorization: `Bearer ${apiKey}`}
                    })
                .then(res => {                    
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error('Request failed!');
                })
                .then(resJson => {
                    console.log(resJson);
                    
                    if (resJson.businesses) {
                        return resJson.businesses.map(business => {
                            return {
                                "id":business.id,
                                "imageSrc":business.image_url,
                                "name":business.name,
                                "address":business.location.address1,
                                "city":business.location.city,
                                "state":business.location.state,
                                "zipCode":business.location.zip_code,
                                "category":business.categories[0].title,
                                "rating":business.rating,
                                "reviewCount":business.review_count
                            }
                        });
                    }
                })
    }, 
    */

    // Async .. Await way
    async search(term, location, sortBy) {
        try {
            const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: { Authorization: `Bearer ${apiKey}` }
            });
            if (res.ok) {
                // jsonify response
                const resJson = await res.json();

                // return an array of the business' mapped with the correct information in an object
                if (resJson.businesses) {
                    return resJson.businesses.map(business => {
                        return {
                            "id": business.id,
                            "imageSrc": business.image_url,
                            "name": business.name,
                            "address": business.location.address1,
                            "city": business.location.city,
                            "state": business.location.state,
                            "zipCode": business.location.zip_code,
                            "category": business.categories[0].title,
                            "rating": business.rating,
                            "reviewCount": business.review_count,
                            "latitude": business.coordinates.latitude,
                            "longitude": business.coordinates.longitude
                        };
                    });
                }
            }
            throw new Error('Request failed.')
        } catch (error) {
            console.log(error); 
        }
    }
    
}

export default Yelp;