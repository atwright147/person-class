import expect from 'expect';
import sinon from 'sinon';
import PersonClass from '../Person';


describe('Height', function() {
	let Person;

	beforeEach(() => {
		Person = new PersonClass();
	});

	it('should return 100', () => {
		expect(Person.height(1000, 'feet-inches', 'cm')).toEqual(100);
	});
});