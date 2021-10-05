import React from 'react'
import './Footer.scss'

function Footer() {
	return (
		<div className='footer'>
			<div className="footer__block">
				<div className="social">
					<p>Национальный оператор почтовой связи Республики Беларусь </p>
				</div>
				<div className="icon">
					<img src="/img/belpost.svg" alt="" width={150} height={50} />
				</div>
				<div className="shop">
					<p>Покупайте белорусские товары на <a href='https://shop.belpost.by' target="_blank" rel="noreferrer">shop.belpost.by</a></p>
				</div>
			</div>
			<div className="footer__items">
				<div className="company">
					<p>Разработано компанией</p>
				</div>
				<div className="techno">
					<img src="/img/techno.svg" alt="TechnoSky" width={74} height={15} />
				</div>
				<div className="hight-tech">
					<a href='/High-tech.by' target="_blank" rel="noreferrer">High-tech.by</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
