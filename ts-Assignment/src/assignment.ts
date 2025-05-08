{
  // problem solved---->01
  function formatString(input: string, toUpper?: boolean): string {
    const strToUpper = toUpper === undefined ? true : toUpper;
    return strToUpper ? input.toUpperCase() : input.toLowerCase();
  }
}
