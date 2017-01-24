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
		expect(Person.height(6, 'mm', 'mm')).toEqual(6);
		expect(Person.height(6, 'mm', 'cm')).toEqual(0.6);
		expect(Person.height(6, 'mm', 'inches')).toEqual(0.24);
		expect(Person.height(6, 'mm', 'feet')).toEqual(0.02);
		expect(Person.height(6, 'mm', 'meters')).toEqual(0.01);

		expect(Person.height(6, 'cm', 'mm')).toEqual(60);
		expect(Person.height(6, 'cm', 'cm')).toEqual(6);
		expect(Person.height(6, 'cm', 'inches')).toEqual(2.36);
		expect(Person.height(6, 'cm', 'feet')).toEqual(0.20);
		expect(Person.height(6, 'cm', 'meters')).toEqual(0.06);

		expect(Person.height(6, 'inches', 'mm')).toEqual(152.40);
		expect(Person.height(6, 'inches', 'cm')).toEqual(15.24);
		expect(Person.height(6, 'inches', 'inches')).toEqual(6);
		expect(Person.height(6, 'inches', 'feet')).toEqual(0.50);
		expect(Person.height(6, 'inches', 'meters')).toEqual(0.15);

		expect(Person.height(6, 'feet', 'mm')).toEqual(1828.8);
		expect(Person.height(6, 'feet', 'cm')).toEqual(182.88);
		expect(Person.height(6, 'feet', 'inches')).toEqual(72);
		expect(Person.height(6, 'feet', 'feet')).toEqual(6);
		expect(Person.height(6, 'feet', 'meters')).toEqual(1.83);

		expect(Person.height(6, 'meters', 'mm')).toEqual(6000);
		expect(Person.height(6, 'meters', 'cm')).toEqual(600);
		expect(Person.height(6, 'meters', 'inches')).toEqual(236.22);
		expect(Person.height(6, 'meters', 'feet')).toEqual(19.69);
		expect(Person.height(6, 'meters', 'meters')).toEqual(6);
	});
});