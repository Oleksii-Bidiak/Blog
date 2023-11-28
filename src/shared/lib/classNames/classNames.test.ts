import { classNames } from './classNames'

describe('classNames', () => {
    test('With only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('With additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('With mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable'
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected)
    })

    test('With mods false', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected)
    })

    test('With mods undefined', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected)
    })
})
