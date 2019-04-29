

class Greeting extends React.Component {
    state={
        name: 'Deutschland'
    }

    render() {
        return (<p>Hello {this.state.name}</p>);
    }
}

ReactDOM.render(
    <Greeting />,
    document.getElementById('app2')
);
