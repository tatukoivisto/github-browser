var React = require('react');
var Popular = require('./Popular')
var ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return (
    	<div className = "container">
      		<Popular />
    	</div>
    )
  }
}

module.exports = App;