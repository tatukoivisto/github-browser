var React = require('react');
var Popular = require('./Popular')
var ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return (
      <Popular />
    )
  }
}

module.exports = App;