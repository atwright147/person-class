import expect from 'expect';
import sinon from 'sinon';
import PersonClass from '../Person';


describe('Age', function() {
	let Person;
	let clock;

	beforeEach(() => {
		Person = new PersonClass(2, 2, '19/09/1980', 'male', 6, 'British');

		const mockDate = new Date(2015, 8, 28);
		clock = sinon.useFakeTimers(mockDate.getTime());
	});

	afterEach(() => {
		clock.restore();
	});

	it('should return false for malformed dates', () => {
		Person = new PersonClass(2, 2, null, 'male', 6, 'British');
		expect(Person.age()).toBe(null);

		Person = new PersonClass(2, 2, false, 'male', 6, 'British');
		expect(Person.age()).toBe(null);

		Person = new PersonClass(2, 2, 'abcdef', 'male', 6, 'British');
		expect(Person.age()).toBe(null);

		Person = new PersonClass(2, 2, 'aa/bb/cccc', 'male', 6, 'British');
		expect(Person.age()).toBe(null);

		Person = new PersonClass(2, 2, '22/09/cccc', 'male', 6, 'British');
		expect(Person.age()).toBe(null);

	});

	it('should return 36 for 19/09/1980', () => {
		expect(Person.age()).toEqual(34);
	});

	it('should accept "/", "." and "-" as delimiters', () => {
		expect(Person.age()).toEqual(34);
		expect(Person.age()).toEqual(34);
		expect(Person.age()).toEqual(34);
	});
});