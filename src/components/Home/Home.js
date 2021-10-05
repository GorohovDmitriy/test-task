import React from 'react'
import Content from '../Content/Content'
import './Home.scss'



function Home({ items }) {
	return (
		<div className='container'>
			<Content items={items} />
		</div>
	)
}

export default Home
