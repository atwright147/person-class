import expect from 'expect';
import sinon from 'sinon';
import PersonClass from '../Person';


describe('Height', function() {
	let Person;

	beforeEach(() => {
		Person = new PersonClass();
	});

	it('should return false when params are missing', () => {
		expect(Person.height(6, null, null)).toBe(false);
	});

	it('should return same height as param if source and dest are the same', () => {
		expect(Person.height(6, 'meters', 'meters')).toEqual(6);
	});

	it('should return correct height', () => {
		expect(Person.height(6, 'meters', 'cm')).toEqual(600);
		expect(Person.height(6, 'cm', 'mm')).toEqual(60);
		expect(Person.height(6, 'feet', 'cm')).toEqual(182.88);
		expect(Person.height(6, 'mm', 'mm')).toEqual(6);
	});
});