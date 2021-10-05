import React from 'react'
import './Slider.scss'

function Slider({ slides }) {
	// current слайдера
	const [current, setCurrent] = React.useState(0)
	// Длина всех слайдеров
	const length = slides.length

	if (!Array.isArray(slides) || length <= 0) {
		return null
	}
	// следующий слайдер
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	// предыдущий слайдер
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}


	return (
		<div className='slider'>
			<>
				<img src='/img/arrow-left.svg' alt='arrow' className='left__arrow' onClick={prevSlide} />
				<img src='/img/arrow-right.svg' alt='arrow' className='right__arrow' onClick={nextSlide} />
				{slides.map((slide, index) => {
					return (
						<div key={`${slide}__${index}`} className={current === index ? 'slide active' : 'slide'}>
							<img className='slider__icon' src={slide.icon} alt="icon svg" />
							<img className='vector__left' src='/img/vector-left.svg' alt="icon svg" />
							<img className='vector__right' src='/img/vector-right.svg' alt="icon svg" />
							{index === current && (<img className='slider__img' src={slide.image} alt='Belpost' />)}
						</div>
					)
				})}
			</>
		</div>
	)
}

export default Slider
