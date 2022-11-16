import Helper from '@ember/component/helper';

interface LtHelperSignature<T extends unknown[]> {
  Args: { Positional: [...T] };
  Return: boolean;
}

export default class LtHelper<T extends unknown[]> extends Helper<LtHelperSignature<T>> {
  public compute(positional: [...T]): boolean {
    if (positional.length !== 2) {
      throw new Error('The `lt` helper requires exactly two arguments');
    }

    return positional[0] < positional[1];
  }
}
