import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connectAdvanced } from "react-redux";
import './App.css';
import { DatePicker, Fabric, SearchBox } from 'office-ui-fabric-react/lib';
import AppBar from "./components/presentational/AppBar";
import selector from "./selectors/appSelector";
import api from "./api/index";
class App extends Component {
  static propTypes = {
      search: PropTypes.object,
      _search : PropTypes.func.isRequired
  }

  constructor(props) {
      super(props);
      this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(value) {
      this.props._search(api.discoverMovie, value);
  }

  render() {
    return <Fabric className={"app-wrapper"}>
        <AppBar/>
        <Fabric className={"app-container"}>

        <section className={"searchBar"}>
        <SearchBox
            className="search"
            placeholder="Search movies here"
            onSearch={this.onSearchSubmit}
            onFocus={() => console.log('onFocus called')}
            onBlur={() => console.log('onBlur called')}
            onChange={() => console.log('onChange called')}
        />
        {/*<DatePicker*/}
            {/*className="datepicker from"*/}
            {/*placeholder="Select from date..."*/}
            {/*ariaLabel="Select from date"*/}
            {/*// tslint:disable:jsx-no-lambda*/}
            {/*onAfterMenuDismiss={() => console.log('onAfterMenuDismiss called')}*/}
            {/*// tslint:enable:jsx-no-lambda*/}
        {/*/>*/}
        {/*<DatePicker*/}
            {/*className="datepicker to"*/}
            {/*placeholder="Select to date..."*/}
            {/*ariaLabel="Select to date"*/}
            {/*// tslint:disable:jsx-no-lambda*/}
            {/*onAfterMenuDismiss={() => console.log('onAfterMenuDismiss called')}*/}
            {/*// tslint:enable:jsx-no-lambda*/}
        {/*/>*/}
        </section>
        </Fabric>
    </Fabric>;
  }
}

export default connectAdvanced(selector)(App);
