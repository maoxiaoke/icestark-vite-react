import React from 'react'
import ReactDOM from 'react-dom'
import { isInIcestark } from '@ice/stark-app';
import './index.css'
import App from './App'

if (!isInIcestark()) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

export function mount ({ container, customProps }: { container: HTMLElement,  customProps: object}) {
  ReactDOM.render(
    <React.StrictMode>
      <App {...customProps} />
    </React.StrictMode>,
    container
  )
}

export function unmount({ container }: { container: HTMLElement }) {
  ReactDOM.unmountComponentAtNode(container);
}
