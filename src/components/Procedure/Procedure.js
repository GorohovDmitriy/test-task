import React from 'react'
import './Procedure.scss'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Page from '../Page/Page'

function Procedure({ items, page }) {
	const [visible, setVisible] = React.useState(false)
	const { id } = useParams()
	let obj = items.filter((item) => item.id == id)[0]
	let pageOne = page.filter(item => item.id == id)[0]

	const openPage = () => {
		setVisible(!visible)
	}

	return (
		<div className='procedure'>
			{!visible ? (
				<>
					<h1>{obj.title}</h1>
					<Link to='/'>
						<img className='back' src='/img/back.svg' alt='Back' />
					</Link>
					<img src='/img/fon2.png' className='fon' alt='Fon' />
					<div className='content'>
						{page &&
							page.map((pag, index) => (
								<div key={`${pag}__${index}`} className='items__block'>
									<p>{pag.title}</p>
									<Link to={`${pag.id}`}>
										<img onClick={openPage} src={pag.svg} alt='Block' />
									</Link>
								</div>
							))}
					</div>
				</>
			) : (
				<Page obj={pageOne} />
			)}
		</div>
	)
}

export default Procedure
