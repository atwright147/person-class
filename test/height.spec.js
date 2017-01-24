import expect from 'expect';
import sinon from 'sinon';
import PersonClass from '../Person';


describe('Height', function() {
	let Person;

	beforeEach(() => {
		Person = new PersonClass();
	});

	it('should return height in "cm"', () => {
		expect(Person.height(6, 'meters', 'cm')).toEqual(600);
		expect(Person.height(6, 'feet', 'cm')).toEqual(182.88);
	});
});