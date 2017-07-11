var React = require('react');
var Popular = require('./Popular')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav.js');
var Home = require('./Home.js');
var Battle = require('./Battle.js');

class App extends React.Component {
  render() {
    return (
      <Router>
      	<div className = "container">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Battle" component={Battle} />
              <Route path="/popular" component={Popular} />
              <Route render={function(){
                return <p>Not found</p>
              }} />
            </Switch>
      	</div>
      </Router>
    )
  }
}

module.exports = App;
