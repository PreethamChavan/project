class VisibilityToggle extends React.component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
       
    }
    render() {
        return (
            <div>
                <h1> Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details': 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey iam here</p>
                    </div>
                )}
            </div>
    
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// let visibility =false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     app();
// };

// const app=() => {
    // const jsx = (
    //     <div>
    //         <h1> Visibility Toggle</h1>
    //         <button onClick={toggleVisibility}>
    //             {visibility ? 'Hide details': 'Show Details'}
    //         </button>
    //         {visibility && (
    //             <div>
    //             <p>Hey iam here</p>
    //             </div>
    //         )}
    //     </div>

    // );

//     ReactDOM.render(jsx, document.getElementById('app'));

// };
// app();