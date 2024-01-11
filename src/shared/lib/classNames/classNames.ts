export type Mods = Record<string, boolean | string | undefined>

export const classNames = (
    cls: string,
    mods: Mods = {},
    additionals: Array<string | undefined> = [],
): string =>
    [
        cls,
        ...additionals.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => !!value)
            .map(([classNames]) => classNames),
    ].join(' ')
