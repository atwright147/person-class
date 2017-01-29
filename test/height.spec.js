import expect from 'expect';
import sinon from 'sinon';
import PersonClass from '../Person';


describe('Height', function() {
	let Person;

	beforeEach(() => {
		Person = new PersonClass(2, 2, '22/09/1978', 'male', 6, 'British');
	});

	it('should return false when params are missing', () => {
		expect(Person.height()).toBe(false);
		expect(Person.height({}, {})).toBe(false);
		expect(Person.height([], [])).toBe(false);
		expect(Person.height(null, null)).toBe(false);
	});

	it('should return false when are not in the available list', () => {
		expect(Person.height('cmx', 'meterx')).toBe(false);
	});

	it('should return same height as param if source and dest are the same', () => {
		expect(Person.height('meters', 'meters')).toEqual(6);
	});

	it('should return correct height', () => {
		expect(Person.height('mm', 'mm')).toEqual(6);
		expect(Person.height('mm', 'cm')).toEqual(0.6);
		expect(Person.height('mm', 'inches')).toEqual(0.24);
		expect(Person.height('mm', 'feet')).toEqual(0.02);
		expect(Person.height('mm', 'meters')).toEqual(0.01);

		expect(Person.height('cm', 'mm')).toEqual(60);
		expect(Person.height('cm', 'cm')).toEqual(6);
		expect(Person.height('cm', 'inches')).toEqual(2.36);
		expect(Person.height('cm', 'feet')).toEqual(0.20);
		expect(Person.height('cm', 'meters')).toEqual(0.06);

		expect(Person.height('inches', 'mm')).toEqual(152.40);
		expect(Person.height('inches', 'cm')).toEqual(15.24);
		expect(Person.height('inches', 'inches')).toEqual(6);
		expect(Person.height('inches', 'feet')).toEqual(0.50);
		expect(Person.height('inches', 'meters')).toEqual(0.15);

		expect(Person.height('feet', 'mm')).toEqual(1828.8);
		expect(Person.height('feet', 'cm')).toEqual(182.88);
		expect(Person.height('feet', 'inches')).toEqual(72);
		expect(Person.height('feet', 'feet')).toEqual(6);
		expect(Person.height('feet', 'meters')).toEqual(1.83);

		expect(Person.height('meters', 'mm')).toEqual(6000);
		expect(Person.height('meters', 'cm')).toEqual(600);
		expect(Person.height('meters', 'inches')).toEqual(236.22);
		expect(Person.height('meters', 'feet')).toEqual(19.69);
		expect(Person.height('meters', 'meters')).toEqual(6);
	});
});