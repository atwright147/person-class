import Person from './Person';

// legs, arms, dob, gender, height, nationality
const p = new Person(2, 2, '22/09/1978', 'male', 175, 'british');
console.log(p);

console.log(p.age());
console.log(p.height('cm', 'feet'));
