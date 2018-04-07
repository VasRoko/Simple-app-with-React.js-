console.log('My app is runnig');

const appObj = {
    title: 'My First React App',
     options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    // console.log(option);

    if(option) {
        appObj.options.push(option);
        // const option = e.target.elements.option.value = ' ';

        renderOptions();
    }
};

const removeAll = () => {
    if(appObj.options.length > 0) {
        appObj.options = [];
        renderOptions();
    }
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObj.options.length);
    const option = appObj.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderOptions = () => {
    const template = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subtitle && <p>{appObj.subtitle}</p>}
            { (appObj.options.length) > 0 ? 'Here are your options': 'No Options'}
            {/* <p>{appObj.options.length}</p> */}
            <button disabled={appObj.options.length === 0 } onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    appObj.options.map((option) => {
                        return <li key={option}> {option}</li>;
                        console.log(option);
                    })
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};


renderOptions();
