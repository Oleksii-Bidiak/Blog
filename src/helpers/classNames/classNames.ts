type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods,
  additionals: string[]
): string => {
  return [
    cls,
    ...additionals,
    ...Object.entries(mods)
      .filter(([className, value]) => !!value)
      .map(([classNames]) => classNames),
  ].join(" ");
};
