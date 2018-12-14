import React, { Component } from 'react';
import './App.css';
import { DatePicker, Fabric, SearchBox } from 'office-ui-fabric-react/lib';

class App extends Component {
  render() {
    return <Fabric className={"app-wrapper"}>
        <section className={"searchBar"}>
        <SearchBox
            className="search"
            placeholder="Search"
            onSearch={newValue => console.log('value is ' + newValue)}
            onFocus={() => console.log('onFocus called')}
            onBlur={() => console.log('onBlur called')}
            onChange={() => console.log('onChange called')}
        />
        <DatePicker
            className="datepicker from"
            placeholder="Select a date..."
            ariaLabel="Select a date"
            // tslint:disable:jsx-no-lambda
            onAfterMenuDismiss={() => console.log('onAfterMenuDismiss called')}
            // tslint:enable:jsx-no-lambda
        />
        <DatePicker
            className="datepicker to"
            placeholder="Select a date..."
            ariaLabel="Select a date"
            // tslint:disable:jsx-no-lambda
            onAfterMenuDismiss={() => console.log('onAfterMenuDismiss called')}
            // tslint:enable:jsx-no-lambda
        />
        </section>
    </Fabric>;
  }
}

export default App;
