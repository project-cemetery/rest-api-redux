import f from './index'

test('`f` should return exact 12', () => {
    const result = f(0)

    expect(result).toEqual(12)
})