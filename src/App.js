import React, { Component } from 'react';
import { Page, Button } from 'react-onsenui'

class App extends Component {

    render() {
        return (
            <Page>
                <Button onClick={this.handleClick}>Tap me!</Button>
            </Page>
        );
    };
}

export default App;