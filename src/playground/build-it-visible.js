const app = document.getElementById('app');
let visibility = false; 

const showHide = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const Template = (
        <div>
            <h1>Visibility Toogle</h1>
            <button onClick={showHide}>
                {visibility ? 'Hide Details' : 'Show Details' }
            </button>
            {visibility && (
                <div>
                    <p>Some text to see..</p>
                </div>
            )}
        </div>
    )

    ReactDOM.render(Template, app);
}

render();