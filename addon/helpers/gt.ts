import Helper from '@ember/component/helper';

interface GtHelperSignature<T extends unknown[]> {
  Args: { Positional: [...T] };
  Return: boolean;
}

export default class GtHelper<T extends unknown[]> extends Helper<GtHelperSignature<T>> {
  public compute(positional: [...T]): boolean {
    if (positional.length !== 2) {
      throw new Error('The `gt` helper requires exactly two arguments');
    }

    return positional[0] > positional[1];
  }
}
