// src/Greeting.js
//import React from 'react';

/*const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

export default Greeting;*/

import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

Greeting.propTypes = {
    name: PropTypes.string.isRequired, // Validate 'name' as a required string
};

export default Greeting;

