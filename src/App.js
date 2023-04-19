import React, { useState } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const loginHandler = (email, password) => {
		setIsLoggedIn(true)
	}

	const logoutHandler = () => {
		setIsLoggedIn(false)
	}

	return (
		<React.Fragment>
			<MainHeader logoutHandler={logoutHandler} isLoggedIn={isLoggedIn} />
			<main>
				{!isLoggedIn && <Login loginHandler={loginHandler} />}
				{isLoggedIn && <Home />}
			</main>
		</React.Fragment>
	)
}

export default App

// conditonal rendering
// useEffect
