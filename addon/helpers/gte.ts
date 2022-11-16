import Helper from '@ember/component/helper';

interface GteHelperSignature<T extends unknown[]> {
  Args: { Positional: [...T] };
  Return: boolean;
}

export default class GteHelper<T extends unknown[]> extends Helper<GteHelperSignature<T>> {
  public compute(positional: [...T]): boolean {
    if (positional.length !== 2) {
      throw new Error('The `gte` helper requires exactly two arguments');
    }

    return positional[0] >= positional[1];
  }
}
