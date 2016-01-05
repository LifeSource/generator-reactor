import React from "react";

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            messages: [
                "Yo React and Webpack from Yeoman!",
                "How it you going?"
            ]
        };
    }

    render() {
        var messageNodes = this.state.messages.map((message) => {
            return (
                <div>{message}</div>
            );
        });

        return (
            <div>{messageNodes}</div>
        )
    }
}

export default App;
