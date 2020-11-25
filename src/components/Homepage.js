import React from 'react'
import Home from './Home'
import Featured from './Featured'
import Collection from './Collection'
import Accessories from './Accessories'
import Offer from './Offer'
import Newcollection from './Newcollection'
import Newsletter from './Newsletter'

function Homepage() {
    return (
        <div className='homepage'>
            {/* Home */}
			<Home></Home>
			{/* Featured */}
			<Featured></Featured>
			{/* Collection */}
			<Collection></Collection>
			{/* Accessories */}
			<Accessories></Accessories>
			{/* Offer */}
			<Offer></Offer>
			{/* Newcollection */}
			<Newcollection></Newcollection>
			{/*Newsletter */}
			<Newsletter></Newsletter>
        </div>
    )
}

export default Homepage
