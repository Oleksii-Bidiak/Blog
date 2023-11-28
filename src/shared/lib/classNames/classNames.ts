type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  additionals: string[] = [],
): string => [
  cls,
  ...additionals.filter(Boolean),
  ...Object.entries(mods)
    .filter(([className, value]) => !!value)
    .map(([classNames]) => classNames),
].join(' ');
