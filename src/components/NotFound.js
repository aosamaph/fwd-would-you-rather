import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='card'>
            <h4 className='card-header'>Error 404 - Not Found</h4>
            <div className='card-body text-center'>
                <div className='card-text'>
                    Kindly check the requested URL
                </div>
                <Link className='card-link' to='/'>
                    Back Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
