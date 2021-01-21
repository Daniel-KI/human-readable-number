module.exports = function toReadable(number) {
  const SmallNumbers = new Map([
    [0, ''],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
  ]);
  const LargeNumbers = new Map([
    [0, 'hundred'],
    [1, 'thousand'],
    [2, 'million'],
    [3, 'billion'],
    [4, 'trillion'],
    [5, 'quadrillion'],
  ]);

  var readableNumber = '';
  var splitSourceString = number.toLocaleString('en-En').split(",");

  for (var i = 0; i < splitSourceString.length; i++) {

    const checkNumber = Number(splitSourceString[i]);
    const hundreds = Math.floor(checkNumber / 100);
    const dozens = Math.floor((checkNumber - hundreds * 100) / 10);
    const ones = checkNumber % 10;

    if (splitSourceString.length - i !== splitSourceString.length) readableNumber += ` ${getDigitName(splitSourceString.length - i)} `;

    if (checkNumber == 0) return 'zero';
    if (checkNumber <= 20) {
      readableNumber += `${SmallNumbers.get(number)}`;
      continue;
    }
    if (checkNumber < 100) {
      readableNumber += `${SmallNumbers.get(dozens * 10)} ${SmallNumbers.get(ones)}`.trim();
      continue;
    }
    if ((dozens * 10) < 20) {
      readableNumber += `${SmallNumbers.get(hundreds)} ${LargeNumbers.get(0)} ${SmallNumbers.get(dozens * 10 + ones)}`.trim();
      continue;
    }
    readableNumber += `${SmallNumbers.get(hundreds)} ${LargeNumbers.get(0)} ${SmallNumbers.get(dozens * 10)} ${SmallNumbers.get(ones)}`.trim();
    continue;
  }
  return readableNumber;
}

function getDigitName(value) {
  switch (value) {
    case 6:
      return LargeNumbers.get(6);
    case 5:
      return LargeNumbers.get(5);
    case 4:
      return LargeNumbers.get(4);
    case 3:
      return LargeNumbers.get(3);
    case 2:
      return LargeNumbers.get(2);
    case 1:
      return LargeNumbers.get(1);
    default:
      return '';
  }
}
