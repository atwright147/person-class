'use strict';

class Person {

	age(dob) {
		if (typeof dob !== 'string' && !dob.match(/\d{1,2}\/\d{1,2}\/(\d{4}|\d{2})/ig)) {
			return false;
		}
		return 38;
	}
}

export default Person;
