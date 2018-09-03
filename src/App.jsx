// @flow

import * as React from 'react';

type Props = {
  greeting: string,
  name: string
}

type State = {
  input: string
}

class App extends React.Component<Props, State> {
  state = {
    input: ''
  }

  onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    this.setState(prevState => ({
      ...prevState,
      input: value
    }));
  }

  render() {
    const {
      greeting,
      name
    } = this.props;
    const {
      input
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {greeting} {name}!
        </p>
        <p>Type below to update state: </p>
        <input type="text" onChange={this.onChange} value={input} />
      </div>
    );
  }
}

export default App;

