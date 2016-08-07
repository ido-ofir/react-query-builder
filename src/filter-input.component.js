import React from 'react';

export default class FilterInput extends React.Component {

	render() {
		// TODO implement all these
		switch(this.props.operator.inputType) {
			case 'none':
				return null;
				break;
			case 'text':
			default:
				return (
					<input className="cps-form-control cps-caption cps-margin-bottom-8" type="text" value={this.props.filterValue || ''} onChange={this.props.onChange} />
				);
				break;
			// case 'datepicker':
			// 	return ();
			// 	break;
			// case 'daterange':
			// 	return ();
			// 	break;
			// case 'select':
			// 	return ();
			// 	break;
			// case 'multiselect':
			// 	return ();
			// 	break;
		}
	}
}
