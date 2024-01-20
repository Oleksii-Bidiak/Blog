export type Mods = Record<string, boolean | string | undefined>
export type Additionals = Array<string | undefined>

export const classNames = (
    cls: string,
    mods: Mods = {},
    additionals: Additionals = [],
): string =>
    [
        cls,
        ...additionals.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => !!value)
            .map(([classNames]) => classNames),
    ].join(' ')
