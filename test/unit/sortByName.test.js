const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ]),
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("There is no sorting", () => {
    const input = [
      "Властелин Колец", 
      "Властелин Колец", 
      "Властелин Колец"
    ];

    const expected = [
      "Властелин Колец", 
      "Властелин Колец", 
      "Властелин Колец"
    ];

    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Books names should remain sorted in ascending order if already sorted", () => {
    const input = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });
});
