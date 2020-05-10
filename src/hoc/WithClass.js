import React from 'react';

const WithClass = (WrappedComponent, className) => {
    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}></WrappedComponent>
            </div>
        )
    }
};

export default WithClass;