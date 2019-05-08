import React from 'react'
import PropTypes from 'prop-types'
import sunkware from '../img/sunkware.svg';


const Author = ({ Author }) => (
    <div className='container'>
        <div className='column is-three-fifths is-offset-one-fifth'>
            <div className='author-card'>
                <div className='columns level'>
                    <div className='column is-one-fifth'>
                        <div className='author-image'>
                            <img src={sunkware} />
                        </div>
                    </div>
                    <div className='column is-four-fifths'>
                        <div className='author-content'>
                            <h2>Stephen Castle</h2>
                            <p>
                                Stephen is a software developer living in Las Vegas Nevada.
                                He is the creator of <a href="https://notable.vegas">notable.vegas</a>, a review app for off strip Las Vegas restaurants.
                                He is also the maintainer of <a href="https://github.com/SteveCastle/openmob">OpenMob</a>, an open source web framework for 501c charitable organizations.
                                In his spare time he writes about geology, ecology, technology, and politics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Author.propTypes = Author.propTypes

export default Author
