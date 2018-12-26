export const PlayerOne = {
  name: 'Character One',
  shortName: 'One',
  player: 'Player One',
  race: 'Race',
  classes: [{ name: 'Class', level: 1 }],
  level: 1,
  hp: { current: 10, max: 10 },
  xp: 0,
  attributes: [
    { attribute: 'STR', value: 10 },
    { attribute: 'DEX', value: 10 },
    { attribute: 'CON', value: 10 },
    { attribute: 'INT', value: 10 },
    { attribute: 'WIS', value: 10 },
    { attribute: 'CHA', value: 10 },
  ],
  ac: 16,
};

export const PlayerTwo = {
  name: 'Character Two',
  shortName: 'Two',
  player: 'Player Two',
  race: 'Race',
  classes: [{ name: 'Class', level: 20 }],
  level: 20,
  hp: { current: 150, max: 150 },
  xp: 999999,
  attributes: [
    { attribute: 'STR', value: 20 },
    { attribute: 'DEX', value: 20 },
    { attribute: 'CON', value: 20 },
    { attribute: 'INT', value: 20 },
    { attribute: 'WIS', value: 20 },
    { attribute: 'CHA', value: 20 },
  ],
  ac: 26,
};

export const NoShortName = {
  name: 'Name LastName',
  player: 'Player Three',
  race: 'Race',
  classes: [{ name: 'Class', level: 20 }],
  level: 20,
  hp: { current: 150, max: 150 },
  xp: 999999,
  attributes: [
    { attribute: 'STR', value: 20 },
    { attribute: 'DEX', value: 20 },
    { attribute: 'CON', value: 20 },
    { attribute: 'INT', value: 20 },
    { attribute: 'WIS', value: 20 },
    { attribute: 'CHA', value: 20 },
  ],
  ac: 26,
};

export const JustName = {
  name: 'Monika',
  player: 'Player Four',
  race: 'Race',
  classes: [{ name: 'Class', level: 20 }],
  level: 20,
  hp: { current: 150, max: 150 },
  xp: 999999,
  attributes: [
    { attribute: 'STR', value: 20 },
    { attribute: 'DEX', value: 20 },
    { attribute: 'CON', value: 20 },
    { attribute: 'INT', value: 20 },
    { attribute: 'WIS', value: 20 },
    { attribute: 'CHA', value: 20 },
  ],
  ac: 26,
};

const Characters = [PlayerOne, PlayerTwo];

export default Characters;
