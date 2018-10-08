//higher order component (HOC) a component tahta renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info</h1>    
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info. Please odnt share</p> }
            <WrappedComponent {...props} />
        </div>
    );

};

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthentication ?(
                <WrappedComponent {...props} />
            ):(
                <p>please log in to view</p>
            )}
           
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin = {true} info = "there are details" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthentication = {false} info = "there are details" />, document.getElementById('app'));
