import React from 'react';
import useWindowWidth from './ComponentA';

const MyComponent = () => {
    const width = useWindowWidth();
    return <div>Current Width: {width}px</div>;
};
export default MyComponent;

