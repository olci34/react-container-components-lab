import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleInput = (e) => this.setState({searchTerm: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`).then(resp => resp.json()).then(data => this.setState({reviews: data.results}))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search</label>
                    <input type='text' value={this.state.searchTerm} onChange={this.handleInput}></input>
                    <input type='Submit'></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
                
        )
    }
}
