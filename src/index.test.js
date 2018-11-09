import createAccessor from './index.js';

const obj = {
	a: {
		b: { t: true, f: false },
	},
};

test('Reads booleans', () => {
	expect(createAccessor('a.b.t')(obj)).toBe(true);
	expect(createAccessor('a.b.f')(obj)).toBe(false);
});
