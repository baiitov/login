import React from 'react'

import Navigation from './Navigation'
import classes from './MainHeader.module.css'

const MainHeader = (props) => {
	return (
		<header className={classes['main-header']}>
			<h1>A Typical Page</h1>
			{props.isLoggedIn && (
				<Navigation
					isValidHandler={props.isValidHandler}
					logoutHandler={props.logoutHandler}
				/>
			)}
		</header>
	)
}

export default MainHeader
