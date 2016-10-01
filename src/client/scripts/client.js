var React = require('react');
var ReactDOM = require('react-dom');

var attachElement = document.getElementById('app');

var FirstComponent = React.createClass({
  render: ()=> {
    return <h1>Hello World!</h1>;
  }
});

ReactDOM.render(<FirstComponent/>, attachElement);
