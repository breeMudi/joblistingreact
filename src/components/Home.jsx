// import React from 'react'

import Listing from "./Listing"
import SelectedSpec from "./SelectedSpec"

const Home = () => {
  return (
    <div>
        <div className="top-design"></div>
        <div className="home-content">
            <SelectedSpec />
            <div className="wrap-listing">
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
            </div>
        </div>
    </div>
  )
}

export default Home
