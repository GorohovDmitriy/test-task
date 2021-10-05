import React from 'react'
import './Content.scss'
import { Link } from 'react-router-dom'


function Content({ items }) {
	return (
		<div className='content'>
			{items &&
				items.map((item, index) => (
					<div key={`${item}__${index}`} className='items__block'>
						<p>{item.title}</p>
						<Link to={`${item.id}`}>
							<img src={item.icon} alt='Block' />
						</Link>
					</div>
				))}
		</div>
	)
}

export default Content
