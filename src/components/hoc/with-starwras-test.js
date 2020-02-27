import React from 'react';
import {SWTConsumer} from '../starwars-test-context';

const withSWT = () => (Wrapped) => {
    return (props) => {
        return(
            <SWTConsumer>
                {
                    (testServiceData) => {
                        return <Wrapped {...props} testServiceData={testServiceData} />
                    }
                }
            </SWTConsumer>
        )
        
    }
};

export default withSWT;