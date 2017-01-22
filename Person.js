'use strict';

class Person {

	age(dob) {
		if (typeof dob === 'string' && !dob.match(/(\d{1,2})\/(\d{1,2})\/(\d{4}|\d{2})/ig)) {
			return false;
		}

		const [dobDay, dobMonth, dobYear] = dob.split(/(?:\/|\.|\-)/ig);

		const dobObj = new Date(dobYear, dobMonth, dobDay);
		const dobDiff = Date.now() - dobObj.getTime();
		const diffObj = new Date(dobDiff);

		return diffObj.getUTCFullYear() - 1970;
	}
}

export default Person;
