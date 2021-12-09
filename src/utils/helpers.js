export const _getLevelClassName = (level) => {
  switch (level) {
    case 'jackpot':
      return 'jackpot';

    case 'secondPrize':
      return 'second-prize';

    case 'thirdPrize':
      return 'third-prize';

    case 'fourthPrize':
      return 'fourth-prize';

    default:
      return null;
  }
};

export const _getFlipNumFontSize = (level) => {
  switch (level) {
    case 'jackpot':
      return '13em';

    case 'second-prize':
      return '12em';

    case 'third-prize':
      return '10em';

    case 'fourth-prize':
      return '8em';

    default:
      return null;
  }
};

export const _getFlipNumFontSizeTinyScreen = (level) => {
  switch (level) {
    case 'jackpot':
      return '7.2em';

    case 'second-prize':
      return '6.5em';

    case 'third-prize':
      return '5.6em';

    case 'fourth-prize':
      return '4.8em';

    default:
      return null;
  }
};

export const _getFlipNumFontSizeSmallScreen = (level) => {
  switch (level) {
    case 'jackpot':
      return '9em';

    case 'second-prize':
      return '8em';

    case 'third-prize':
      return '6.8em';

    case 'fourth-prize':
      return '6em';

    default:
      return null;
  }
};

export const _getFlipNumFontSizeMediumScreen = (level) => {
  console.log('call medium');
  switch (level) {
    case 'jackpot':
      return '11em';

    case 'second-prize':
      return '10em';

    case 'third-prize':
      return '8.5em';

    case 'fourth-prize':
      return '7.8em';

    default:
      return null;
  }
};

export const _getFlipNumFontSizeLargeScreen = (level) => {
  switch (level) {
    case 'jackpot':
      return '16em';

    case 'second-prize':
      return '15em';

    case 'third-prize':
      return '13em';

    case 'fourth-prize':
      return '10em';

    default:
      return null;
  }
};

export const _getFlipNumFontSizeSuperLargeScreen = (level) => {
  switch (level) {
    case 'jackpot':
      return '22em';

    case 'second-prize':
      return '21em';

    case 'third-prize':
      return '17.5em';

    case 'fourth-prize':
      return '15em';

    default:
      return null;
  }
};

export const _getFlipNumFontColor = (level) => {
  switch (level) {
    default:
      return '#f2f2f2';
  }
};

export const _getAmount = (amount) => {
  const formatAmount = (parseFloat(amount).toFixed(3) + 1) * 1;
  return formatAmount;
};
