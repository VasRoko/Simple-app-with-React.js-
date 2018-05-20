
class Counter extends React.Component {
        constructor(props) {

            super(props);

            this.handleAddOne = this.handleAddOne.bind(this);
            this.handleMinusOne = this.handleMinusOne.bind(this);
            this.handlereset = this.handlereset.bind(this);

            this.state = {
                count: 0
            }
        }

        componentDidMount() {
            console.log('component did mount');

            try {
    
                const stringCount = localStorage.getItem('count');
                const count = parseInt(stringCount, 10); 

                if ( !isNaN(count) ){
                    this.setState(() => ({ count }));
                }
    
            } catch (e) {
                console.log(e);
            }
    
        }

        componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                console.log('saving Data');
                localStorage.setItem('count', this.state.count);
            }
        }
    
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((preState) => {
            return {
                count: preState.count - 1
            };
        });
    }

    handlereset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handlereset}>reset</button>
            </div>
        )
    }
};

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));
