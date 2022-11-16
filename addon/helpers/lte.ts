import Helper from '@ember/component/helper';

interface LteHelperSignature<T extends unknown[]> {
  Args: { Positional: [...T] };
  Return: boolean;
}

export default class LteHelper<T extends unknown[]> extends Helper<LteHelperSignature<T>> {
  public compute(positional: [...T]): boolean {
    if (positional.length !== 2) {
      throw new Error('The `lte` helper requires exactly two arguments');
    }

    return positional[0] <= positional[1];
  }
}
