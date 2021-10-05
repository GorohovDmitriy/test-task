import React from 'react'
import './Content.scss'

function Content({ items }) {
	return (
		<div className='content'>
			{
				items && items.map((item, index) => (
					<div key={`${item}__${index}`} className='items__block'>
						<p>{item.title}</p>
						<img src={item.icon} alt='Block' />
					</div>
				))
			}
		</div>
	)
}

export default Content
