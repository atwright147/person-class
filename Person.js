'use strict';

class Person {

	age(dob) {
		if (typeof dob === 'string' && !dob.match(/(\d{1,2})(?:\/|\.|\-)(\d{1,2})(?:\/|\.|\-)(\d{4}|\d{2})/ig)) {
			return false;
		}

		const [dobDay, dobMonth, dobYear] = dob.split(/(?:\/|\.|\-)/ig);

		const dobObj = new Date(dobYear, dobMonth, dobDay);
		const dobDiff = Date.now() - dobObj.getTime();
		const diffObj = new Date(dobDiff);

		return diffObj.getUTCFullYear() - 1970;
	}

	height(height = null, source = null, dest = null) {
		if (height === null || source === null || dest === null) {
			return false;
		}

		if (source === dest) {
			return height;
		}

		const measurements = [
			'mm',
			'cm',
			'inches',
			'feet',
			'meters',
		];

		// convert to our chosen base unit (mm)
		let base;
		switch(source) {
			case 'mm':
				base = height;
				break;

			case 'cm':
				base = height * 10;
				break;

			case 'inches':
				base = height * 25.4;
				break;

			case 'feet':
				base = height * 304.8;
				break;

			case 'meters':
				base = height * 1000;
				break;
		}

		// convert from base unit to requested destination
		let result;
		switch(dest) {
			case 'mm':
				result = base;
				break;

			case 'cm':
				result = base / 10;
				break;

			case 'inches':
				result = base / 25.4;
				break;

			case 'feet':
				result = base / 304.8;
				break;

			case 'meters':
				result = base / 1000;
				break;
		}

		return result.toFixed(2);
	}
}

export default Person;
