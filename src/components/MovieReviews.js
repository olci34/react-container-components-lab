// Code MovieReviews Here
import { render } from 'enzyme'
import React, {Component} from 'react'

export default function MovieReviews(props) {
    return (
        <ul className='review-list'>
            {props.reviews.map(review => <li className='review'><a href= {review.link.url}>{review.display_title} - {review.summary_short}</a></li>)}
        </ul>
    )
}