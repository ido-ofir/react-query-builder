import React from 'react';
import ReactDOM from 'react-dom';
import QueryBuilder from '../src/query-builder.js';
import sampleFilterDefs from './sample-filter-defs.js';

function handleQueryChange(query) {
	console.log(query);
	document.getElementById('query').innerHTML = JSON.stringify(query, null, '  ');
};

ReactDOM.render((
	<QueryBuilder filterDefs={sampleFilterDefs} handleQueryChange={handleQueryChange} />
), document.getElementById('queryBuilder'));

