
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.onMakeDecision = this.onMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        console.log('component did mount');
        try {

            const json = localStorage.getItem('Options');
            const options = JSON.parse(json);

            if (options){
                this.setState(() => ({ options }));
            }

        } catch (e) {
            
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            console.log('saving Data');

            const json = JSON.stringify(this.state.options);
            localStorage.setItem('Options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        }); 
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    onMakeDecision(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });

        this.setState((prevState) => ({ options:prevState.options.concat(option) }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                    makeDecision = {this.onMakeDecision}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteoptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    );
};

Header.defaultProps = {
    title: 'Indesicion'
};
// class Header extends React.Component {
//     render() {
//         return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//         </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button onClick={props.makeDecision} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.makeDecision} 
//                 disabled={!this.props.hasOptions}
//                 >
//                 What should I do
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteoptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an Object</p> }
            {
                props.options.map((option) => ( 
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteoptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button 
                onClick={ (e) => {
                        props.handleDeleteOption(props.optionText);
                    }
                }>
            
            remove
            </button>
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props){

        super(props);
        
        this.handleAddOptition = this.handleAddOptition.bind(this);

        this.state = {
          error: undefined  
        };
    }
    handleAddOptition(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        // this.setState(()=> {
        //     return { error };  
        // })

        this.setState(() => ({ error }))

        if(!error) {
            e.target.elements.option.value = " ";
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptition}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))