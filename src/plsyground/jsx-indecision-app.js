console.log('App is running');

//JSX - JavaScript XML
const title = {
     head: 'Indecision App',
     para: 'This is something',
     options: []
};
const onFormSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value;

        if(option) {
        
            title.options.push(option);
            e.target.elements.option.value = '';
            renderFormApp();
        }
};

const removeAll = () => {
    title.options = [];
    renderFormApp();

};

const onMakeDecision =() => {
    const randomNum = Math.floor(Math.random() * title.options.length);
    const option = title.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 120, 2563];

const renderFormApp = () => {
    const template = (
        <div>
            <h1>{title.head}</h1>
            {title.para && <p>{title.para}</p>}
            <p>{title.options.length > 0 ? 'Here is ur option': 'No option'}</p>
            <button disabled= {title.options.length ==0} onClick={onMakeDecision}>What should i do</button>
            <button onClick ={removeAll}>Remove all</button>
            <ol>
                {
                    title.options.map((option) => <li key = {option}> {option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add Option</button>
                
            </form>
        </div>
        );

ReactDOM.render(template, appRoot);

};
renderFormApp();
