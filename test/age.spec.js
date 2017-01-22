import expect from 'expect';
import PersonClass from '../Person';


describe('Age', function() {
	let Person;

	beforeEach(() => {
		Person = new PersonClass();
	});

	it('should return false for malformed dates', () => {
		expect(Person.age('aa/bb/cccc')).toBe(false);
	});

	it('should return 38 for 22/09/1978', () => {
		expect(Person.age('22/09/1978')).toEqual(38);
	});
});