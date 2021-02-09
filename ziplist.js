const firstTestData = ['a', 'b', 'c'];
const secondTestData = [1, 2, 3];
const thirdTestData = [1, 2, 3, 4, 5];

function zipList(firstList, secondList) {
  const newList = [];
  if (firstList.length !== secondList.length) {
    return 'Lists are of different lengths';
  } if (firstList.length === secondList.length) {
    for (let i = 0; i < firstList.length; i++) {
      newList.push(firstList[i], secondList[i]);
    }
  }
  return newList;
}

console.log(zipList(firstTestData, secondTestData));

console.log(zipList(firstTestData, thirdTestData));

function zipListTheSimpleWay(firstList, secondList) {
  return _.flatten(_.zip(firstList, secondList));
}

console.log(zipListTheSimpleWay(firstTestData, secondTestData));
