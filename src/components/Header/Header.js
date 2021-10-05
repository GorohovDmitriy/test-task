import React from 'react'
import axios from 'axios'
import './Header.scss'

function Header() {
	const [weather, setWeather] = React.useState([])

	//  блок получения времени
	function checkTime(i) {
		if (i < 10) {
			i = '0' + i
		}
		return i
	}

	let time = new Date()
	let hourse = checkTime(time.getHours())
	let minutes = checkTime(time.getMinutes())

	// Блок получения погоды

	let API_KEY = 'b21371427780d50642723790f91a662d'
	let city = 'Minsk'
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${API_KEY}`

	React.useEffect(() => {
		axios.get(url).then(({ data }) => {
			console.log(data)
			setWeather((prev) => [...prev, Math.round(data.main.temp)])
		})
	}, [])

	// функция получения 0 перед числом
	function zeroFormat(value) {
		if (value < 10) {
			value = '0' + value
		}
		return value
	}

	/* функция получения текущей даты и времени */
	function dateTime() {
		let date = new Date()
		let day = zeroFormat(date.getDate())
		let month = zeroFormat(date.getMonth() + 1)
		let year = date.getFullYear()

		return day + ' ' + month + ' ' + year + ' '
	}

	return (
		<div className='header'>
			<div className='header__content'>
				<div className='time'>
					{' '}
					{hourse}:{minutes}
				</div>
				<div className='weather'>
					{weather} °C
					<img src='/img/weather.svg' alt='Weather' width={28} height={28} />
				</div>
			</div>
			<div className='header__date'>{dateTime()}</div>
		</div>
	)
}

export default Header
