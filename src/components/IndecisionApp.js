import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';



export default class IndecisionApp extends React.Component {
    
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        }); 
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    onMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }


        this.setState((prevState) => ({ options:prevState.options.concat(option) }));
    }
    
    componentDidMount = () => {
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

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            console.log('saving Data');

            const json = JSON.stringify(this.state.options);
            localStorage.setItem('Options', json);
        }
    }

    componentWillUnmount = () => {
        console.log('component will unmount');
    }


    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="conteiner ">
                <Action hasOptions={this.state.options.length > 0}
                    makeDecision = {this.onMakeDecision}
                />
                <div className="widget">
                <Options 
                    options={this.state.options}
                    handleDeleteoptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    closeModal={this.handleModal}
                />
                </div>
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};
