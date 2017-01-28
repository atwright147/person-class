class Person {

	constructor(legs = 2, arms = 2, dob = null, gender = null, height = null, nationality = null) {
		this._legs = legs;
		this._arms = arms;
		this._dob = dob;
		this._gender = gender;
		this._height = height;
		this._nationality = nationality;
	}

	age() {
		if (!this._dob || typeof this._dob === 'undefined' || !this._dob.match(/(\d{1,2})(?:\/|\.|\-)(\d{1,2})(?:\/|\.|\-)(\d{4}|\d{2})/ig)) {
			return null;
		}

		const [dobDay, dobMonth, dobYear] = this._dob.split(/(?:\/|\.|\-)/ig);

		const dobObj = new Date(dobYear, dobMonth, dobDay);
		const dobDiff = Date.now() - dobObj.getTime();
		const diffObj = new Date(dobDiff);

		return diffObj.getUTCFullYear() - 1970;
	}

	height(source = null, dest = null) {
		if (this._height === null || source === null || dest === null) {
			return false;
		}

		if (source === dest) {
			return this._height;
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
				base = this._height;
				break;

			case 'cm':
				base = this._height * 10;
				break;

			case 'inches':
				base = this._height * 25.4;
				break;

			case 'feet':
				base = this._height * 304.8;
				break;

			case 'meters':
				base = this._height * 1000;
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
