// import React from 'react'
import myhome from '../assets/images/myhome.svg'

const Listing = () => {
    const content1 = ['Photosnap', 
    'Senior Frontend Developer', ['1d ago', 'Full Time', 'USA only']]
    const content1specs = ['Frontend','Senior', 'HTML', 'CSS', 'Javascript']
  return (
    <div className="listing">
      <div className="listing-name">
        <div className="listing-img">
            <img src={myhome} alt="" />
        </div>
        <div className="listing-content">
            <div className="listing-job">
                <p><span>{content1[0]}</span></p>
            </div>
            <div className="listing-position">{content1[1]}</div>
            <div className="listing-properties">
                <p>{content1[2][0]}</p>
                <p className='dots'></p>
                <p>{content1[2][1]}</p>
                <p className='dots'></p>
                <p>{content1[2][2]}</p>
            </div>
        </div>
      </div>
      <div className="listing-specs"><p>
        {content1specs.map((spec, i) => {
            // console.log(spec, i)
            return (<span key={i}>{spec}</span>)
        })}
        </p>
      </div>
    </div>
  )
}

export default Listing
