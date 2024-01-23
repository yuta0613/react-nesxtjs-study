let dom = document.querySelector('#root')

let element = React.createElement(
    'p', {}, 'Hello React application!'
)

ReactDOM.render(element, dom)