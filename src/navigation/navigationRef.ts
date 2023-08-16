import * as React from 'react';

const navigationRef = React.createRef();

const getNavigationRef = (): unknown => {
    return navigationRef.current;
};

export default getNavigationRef;
