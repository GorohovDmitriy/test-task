import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Slider from './components/Slider/Slider'
import { SliderData } from './components/Slider/SliderData'
import { Route } from 'react-router-dom'
import Procedure from './components/Procedure/Procedure'
import Page from './components/Page/Page'

const items = [
	{ title: 'Административные процедуры', icon: '/img/1.svg', id: 1 },
	{ title: 'Руководство', icon: '/img/2.svg', id: 2 },
	{ title: 'график приёма', icon: '/img/3.svg', id: 3 },
	{ title: 'Структура', icon: '/img/4.svg', id: 4 },
]

const page = [
	{ title: 'страница 1', svg: '/img/page.svg', id: 1, number: 10 },
	{ title: 'процедура 2', svg: '/img/page.svg', id: 2, number: 11 },
	{ title: 'процедура 3', svg: '/img/page.svg', id: 3, number: 12 },
	{ title: 'процедура 4', svg: '/img/page.svg', id: 4, number: 13 }
]


function App() {
	return (
		<div className='wrapper'>
			<Route path='/' exact>
				<Header />
				<Slider slides={SliderData} />
				<Home items={items} />

			</Route>
			<Route path='/:id' >
				<Header />
				<Slider slides={SliderData} />
				<Procedure page={page} items={items} />
				<Footer />
			</Route>
		</div>
	)
}

export default App
