import React from 'react'
import { Link } from 'react-router-dom'
import './Page.scss'
import i18next from 'i18next'

function Page({ obj }) {
	return (
		<div className='page'>
			<img className='fon' src="/img/fon2.png" alt="Fon2" />
			<div className='page__block'>
				<Link to='/'>
					<img className='home-icon' src='/img/home.svg' alt='Home' />
				</Link>
				<h1>{obj.title}</h1>
				<img className='back' src='/img/back.svg' alt='Back' />
			</div>

			<p>
				{i18next.t('text')}
			</p>
		</div>
	)
}

export default Page
