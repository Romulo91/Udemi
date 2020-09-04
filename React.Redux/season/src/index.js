import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMassage: "" };
  // }

  state = { late: null, errorMassage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMassage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated");
  }
  // React says we have to define render!!
  render() {
    if (this.state.errorMassage && !this.state.lat) {
      return <div>Error : {this.state.errorMassage}</div>;
    }
    if (!this.state.errorMassage && this.state.lat) {
      return <div>landitute: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
