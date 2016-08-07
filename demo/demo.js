import React from 'react';
import ReactDOM from 'react-dom';
import QueryBuilder from '../src/query-builder.js';
import sampleFilterDefs from './sample-filter-defs.js';

let applyQuery = (query) => {
	console.log(query);
	document.getElementById('query').innerHTML = JSON.stringify(query, null, '  ');
};

ReactDOM.render((
	<QueryBuilder filterDefs={sampleFilterDefs} applyQuery={applyQuery} />
), document.getElementById('queryBuilder'));

