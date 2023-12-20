import { CounterSchema } from '../type/counterSchema'
import { counterReducer, counterActions } from './CounterSlice'

describe('counterSlice', () => {
    test('Increment', () => {
        const state: CounterSchema = {
            value: 10,
        }
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        })
    })
    test('Decrement', () => {
        const state: CounterSchema = {
            value: 10,
        }
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        })
    })
    test('Should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        })
    })
    test('Should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({
            value: -1,
        })
    })
})
