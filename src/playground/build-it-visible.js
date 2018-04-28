
class Visibility extends React.Component {
    constructor(props) {
        super(props);

        this.hundleToogleVisability = this.hundleToogleVisability.bind(this);

        this.state = {
            visibility: false
        }
    } 

    hundleToogleVisability(){
        this.setState((preState) => {
            return {
                visibility: !preState.visibility
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.hundleToogleVisability}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (<div> <p>Some text here..</p></div>)}
            </div>
        );
    } 
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
