{
  // problem solved---->01
  function formatString(input: string, toUpper?: boolean): string {
    const strToUpper = toUpper === undefined ? true : toUpper;
    return strToUpper ? input.toUpperCase() : input.toLowerCase();
  }
}
//
{
  // problem solved---->02
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }
  const books = [
    { title: "Book A", rating: 4.44 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book d", rating: 3.999 },
    { title: "Book e", rating: 10 },
  ];
}
//
{
  // problem solved---->03
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concatenate: T[] = [];
    for (const array of arrays) {
      concatenate.push(...array);
    }
    return concatenate;
  }
  concatenateArrays(["a", "b"], ["c"]);
  concatenateArrays([1, 2], [3, 4], [5]);
  concatenateArrays(["muhammad"], ["islam"]);
}
//
{
  // problem solved---->04
  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2000, "Corolla");
}
//
{
  // problem solved---->05
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    } else {
      return 0;
    }
  }
}
