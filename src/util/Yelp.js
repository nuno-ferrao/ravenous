const apiKey = 'uyWJmMHo5PE0HXd3AXEI7TRJkKo5qzOUzs2wNp1RxZiq6Kdk9z-jKRk0fL168BfBpm_V9IhC7Y2b94u5A6tCBSEBh_ATZ6NTl1rpC0a9kXcz_XHoZNr8SQM5iz7rXnYx';

//queries the API using the provided key above, converts the response to json if it has the intended object, and then extracts the required business info from the object received. Note the fetch command has both the query and the apiKey transmitted as header (to be confirmed if this query format is the same for most apiKeys or api-specific)
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {Authorization: `Bearer ${apiKey}`}
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }))
            }
        })
    }
}

export default Yelp;