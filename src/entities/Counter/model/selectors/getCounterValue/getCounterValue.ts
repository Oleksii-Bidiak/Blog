import { getCounter } from '../getCounter/getCounter'
import { createSelector } from '@reduxjs/toolkit'
import { CounterSchema } from '../../type/counterSchema'

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
)
