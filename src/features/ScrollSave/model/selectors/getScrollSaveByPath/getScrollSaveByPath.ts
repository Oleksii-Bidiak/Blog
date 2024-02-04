import { getScrollSave } from '../getScrollSave/getScrollSave'
import { createSelector } from '@reduxjs/toolkit'
import { ScrollSaveSchema } from '../../types/scrollSave'

export const getScrollSaveByPath = createSelector(
    getScrollSave,
    (scroll: ScrollSaveSchema, path: string) => path,
    (scroll, path) => scroll.scroll[path] || 0,
)
