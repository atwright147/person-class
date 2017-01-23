import expect from 'expect';
import sinon from 'sinon';
import PersonClass from '../Person';


describe('Age', function() {
	let Person;
	let clock;

	beforeEach(() => {
		Person = new PersonClass();

		const mockDate = new Date(2015, 8, 28);
		clock = sinon.useFakeTimers(mockDate.getTime());
	});

	afterEach(() => {
		clock.restore();
	});

	it('should return false for malformed dates', () => {
		expect(Person.age('aa/bb/cccc')).toBe(false);
	});

	it('should return 36 for 22/09/1978', () => {
		expect(Person.age('22/09/1978')).toEqual(36);
	});

	it('should accept "/", "." and "-" as delimiters', () => {
		expect(Person.age('22/09/1978')).toEqual(36);
		expect(Person.age('22.09.1978')).toEqual(36);
		expect(Person.age('22-09-1978')).toEqual(36);
	});
});