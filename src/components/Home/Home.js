import React from 'react'
import Content from '../Content/Content'
import Slider from '../Slider/Slider'
import { SliderData } from '../Slider/SliderData'
import './Home.scss'

const items = [
	{ title: 'Административные процедуры', icon: '/img/1.svg' },
	{ title: 'Руководство', icon: '/img/2.svg' },
	{ title: 'график приЁма', icon: '/img/3.svg' },
	{ title: 'Структура', icon: '/img/4.svg' },
]

function Home() {

	return (
		<div className='home'>
			<Slider slides={SliderData} />
			<div className="container">
				<Content items={items} />
			</div>
		</div>
	)
}

export default Home
