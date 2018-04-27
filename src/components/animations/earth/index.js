import React from 'react';
import './index.css';
import Earth from './earth';

let planetTexture = require("./img/map_h.jpg");

const earth = () => (
	<Earth planetTexture={planetTexture} />
);

export default earth;
