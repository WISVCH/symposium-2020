import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'

import App from 'components/App'
import './index.css'

const history = createHistory({ basename: "/2018" })
const initialState = {
	router: { location: history.location }
}
const store = configureStore(initialState, history)

const Root = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
      <App/>
		</ConnectedRouter>
	</Provider>
)
const root = document.getElementById('root')

if (root.hasChildNodes()) {
	hydrate(Root, root)
} else {
	render(Root, root)
}

registerServiceWorker()
