import './styles/screen.scss'

const main = () => {
  document.querySelector('h1').textContent += ''
}

document.addEventListener('DOMContentLoaded', main)

function supportsImports () {
  return 'import' in document.createElement('link')
}

if (supportsImports()) {
  console.log('Good to go!')
} else {
  console.log('Use other libraries/require systems to load files.')
}

// HERE BE DRAGONS... and webpack. Don't touch.
if (process.env.NODE_ENV !== 'production') require('./index.html')
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
