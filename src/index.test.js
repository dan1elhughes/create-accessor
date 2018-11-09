import createAccessor from './index.js';
test('Reads object paths', () => {
	const obj = { bools: { t: true, f: false } };

	expect(createAccessor('bools.t', obj)).toBe(true);
	expect(createAccessor('bools.f', obj)).toBe(false);
});

test('Reads array index paths', () => {
	const obj = { arrs: { odds: [1, 3, 5], evens: [2, 4, 6] } };

	expect(createAccessor('arrs.odds.0')(obj)).toBe(1);
	expect(createAccessor('arrs.odds.1')(obj)).toBe(3);
	expect(createAccessor('arrs.odds.2')(obj)).toBe(5);
	expect(createAccessor('arrs.evens.0')(obj)).toBe(2);
	expect(createAccessor('arrs.evens.1')(obj)).toBe(4);
	expect(createAccessor('arrs.evens.2')(obj)).toBe(6);
});

test('Supports currying', () => {
	const obj = { a: { b: { c: 10 } } };

	const read = createAccessor('a.b.c');

	expect(read(obj)).toBe(10);
});

test('Returns undefined for nested missing paths', () => {
	const obj = {};

	expect(createAccessor('a.b.c', obj)).toBeUndefined();
});

test('Returns objects by reference', () => {
	const obj = { a: {} };

	createAccessor('a', obj).b = 1;

	expect(obj.a.b).toBe(1);
});
