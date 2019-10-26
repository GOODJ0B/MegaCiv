import {AdvanceTypes} from './advance-types.enum';
import {Advance} from './advance.interface';

export const advancesList = [
  {
    id: 1,
    name: 'ADVANCED MILITARY',
    description: 'In conflicts, you may choose to remove tokens from areas adjacent by land. After each round of token removal a new check for token majority must be made. You may decide to wait for other token conflicts to be resolved first.  You are allowed to cause conflict in areas containing units belonging to players holding CULTURAL ASCENDANCY.  Disadvantage with CIVIL DISORDER: Reduce 1 additional city.',
    cost: 240,
    currentPrice: 240,
    points: 6,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 20,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 5,
    discountToArts: 0,
    discountFromCard: 27,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 2,
    name: 'AGRICULTURE',
    description: 'The population limit of \'0\', \'1\' and \'2\' areas on the board is increased by 1 for you as long as these areas do not contain any other player\'s units or barbarian tokens.  Disadvantage with FAMINE: If you are the primary victim, take 5 aditional damage.',
    cost: 120,
    currentPrice: 120,
    points: 3,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 10,
    discountToReligion: 0,
    discountToScience: 5,
    discountToArts: 0,
    discountFromCard: 38,
    discountFromCardAmount: 10,
    discountToCard: 12,
    discountToCardAmount: 20,
  } as Advance, {
    id: 3,
    name: 'ANATOMY',
    description: 'Upon purchase, you may choose to acquire a science card with an undiscounted cost price of less than 100 for free. Advantage with EPIDEMIC: If you are a secondary victim, prevent 5 damage.',
    cost: 270,
    currentPrice: 270,
    points: 6,
    type1: AdvanceTypes.SCIENCE,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 5,
    discountToReligion: 0,
    discountToScience: 20,
    discountToArts: 0,
    discountFromCard: 25,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 4,
    name: 'ARCHITECTURE',
    description: 'Once per turn, when constructing a city, you may choose to pay up to half of the required number of tokens from treasury.',
    cost: 140,
    currentPrice: 140,
    points: 3,
    type1: AdvanceTypes.ARTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 5,
    discountToArts: 10,
    discountFromCard: 43,
    discountFromCardAmount: 10,
    discountToCard: 28,
    discountToCardAmount: 20,
  } as Advance, {
    id: 5,
    name: 'ASTRONAVIGATION',
    description: 'Your ships are allowed to move through open sea areas.',
    cost: 80,
    currentPrice: 80,
    points: 1,
    type1: AdvanceTypes.SCIENCE,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 10,
    discountToArts: 0,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 6,
    discountToCardAmount: 10,
  } as Advance, {
    id: 6,
    name: 'CALENDAR',
    description: 'Advantage with FAMINE: Prevent 5 damage.  Advantage with CYCLONE: Reduce 2 less selected cities.',
    cost: 180,
    currentPrice: 180,
    points: 3,
    type1: AdvanceTypes.SCIENCE,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 10,
    discountToArts: 0,
    discountFromCard: 5,
    discountFromCardAmount: 10,
    discountToCard: 40,
    discountToCardAmount: 20,
  } as Advance, {
    id: 7,
    name: 'CARTOGRAPHY',
    description: 'During the Trade Cards Acquisition phase, you may acquire additional trade cards form stack 2 for 5 treasury and/or form stack 7 for 13 treasury tokens per card.  Disadvantage with PIRACY: If you are the primary victim, the beneficiary selects and replaces 1 additional coastal city.',
    cost: 160,
    currentPrice: 160,
    points: 3,
    type1: AdvanceTypes.SCIENCE,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 10,
    discountToArts: 5,
    discountFromCard: 51,
    discountFromCardAmount: 10,
    discountToCard: 21,
    discountToCardAmount: 20,
  } as Advance, {
    id: 8,
    name: 'CLOTH MAKING',
    description: 'Your ships are allowed to move 5 steps.',
    cost: 50,
    currentPrice: 50,
    points: 1,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 10,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 5,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 35,
    discountToCardAmount: 10,
  } as Advance, {
    id: 9,
    name: 'COINAGE',
    description: 'You may choose to increase or decrease your tax rate by 1.  Disadvantage with CORRUPTION: Discard 5 additional points of face value.',
    cost: 90,
    currentPrice: 90,
    points: 1,
    type1: AdvanceTypes.SCIENCE,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 10,
    discountToArts: 0,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 47,
    discountToCardAmount: 10,
  } as Advance, {
    id: 10,
    name: 'CULTURAL ASCENDANCY',
    description: 'Players are not allowed to cause conflict in areas containing your units, except for areas where a conflict situation already occurs. This does not count for players holding CULTURAL ASCENDANCY or ADVANCED MILITARY.  Your units are protected against the effect of POLITICS.  Your default city support rate is increased by 1.',
    cost: 280,
    currentPrice: 280,
    points: 6,
    type1: AdvanceTypes.ARTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 20,
    discountFromCard: 20,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 11,
    name: 'DEISM',
    description: 'Advantage with SUPERSTITION: Reduce 1 less city.',
    cost: 70,
    currentPrice: 70,
    points: 1,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 5,
    discountToReligion: 10,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 19,
    discountToCardAmount: 10,
  } as Advance, {
    id: 12,
    name: 'DEMOCRACY',
    description: 'During the Tax Collection phase you collect tax as usual but your sities do not revolt as a result of a shortage in tax collection.  Advantage with CIVIL WAR: Select 10 less unit points.  Advantage with CIVIL DISORDER: Reduce 1 less city.',
    cost: 220,
    currentPrice: 220,
    points: 6,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 20,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 5,
    discountFromCard: 2,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 13,
    name: 'DIASPORA',
    description: 'SPECIAL ABILITY: You may choose to take up to 5 of your tokens from the board and place them anywhere else on the board, providing that no population limits are exceeded.',
    cost: 270,
    currentPrice: 270,
    points: 6,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 20,
    discountToScience: 0,
    discountToArts: 5,
    discountFromCard: 35,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 14,
    name: 'DIPLOMACY',
    description: 'Players are not allowed to move tokens into areas containing your cities, except for areas where a conflict situation already occurs. This does not count for players holding DIPLOMACY or MILITARY.  Disadvantage with TREACHERY: The beneficiary selects and annexes 1 additional city.',
    cost: 160,
    currentPrice: 160,
    points: 3,
    type1: AdvanceTypes.ARTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 10,
    discountFromCard: 49,
    discountFromCardAmount: 10,
    discountToCard: 39,
    discountToCardAmount: 20,
  } as Advance, {
    id: 15,
    name: 'DRAMA AND POETRY',
    description: 'Advantage with CIVIL WAR: Select 5 less unit points.  Advantage with CIVIL DISORDER: Reduce 1 less city.',
    cost: 80,
    currentPrice: 80,
    points: 1,
    type1: AdvanceTypes.ARTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 10,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 41,
    discountToCardAmount: 10,
  } as Advance, {
    id: 16,
    name: 'EMPIRICISM',
    description: '0',
    cost: 60,
    currentPrice: 60,
    points: 1,
    type1: AdvanceTypes.SCIENCE,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 5,
    discountToReligion: 5,
    discountToScience: 10,
    discountToArts: 5,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 25,
    discountToCardAmount: 10,
  } as Advance, {
    id: 17,
    name: 'ENGINEERING',
    description: 'Other players or barbarians require 8 tokens to succesfully attack your cities. Your cities are then replaced by 7 tokens. This does not apply when the attacking player also holds ENGINEERING.  You require 6 tokens to succesfully attack other player\'s cities of pirate cities. Their cities are then replaced by 5 tokens. This does not apply when the defending player also holds ENGINEERING.  Advantage with EARTHQUAKE: Your city is reduced instead of destroyed.  Advantage with FLOOD: Prevent 5 damage.',
    cost: 160,
    currentPrice: 160,
    points: 3,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.SCIENCE,
    discountToCivics: 0,
    discountToCrafts: 10,
    discountToReligion: 0,
    discountToScience: 10,
    discountToArts: 0,
    discountFromCard: 23,
    discountFromCardAmount: 10,
    discountToCard: 42,
    discountToCardAmount: 20,
  } as Advance, {
    id: 18,
    name: 'ENLIGHTENMENT',
    description: 'Advantage with SUPERSTITION: Reduce 1 less city.  Advantage with SLAVE REVOLT: Your city support rate is decreased by 1 during the resolution of SLAVE REVOLT.  Advantage with EPIDEMIC: If you are the primary victim, prevent 5 damage.  Advantage with REGRESSION: For each step backward, you may choose to prevent the effect by destroying 2 of your cities (if possible non0coastal).',
    cost: 160,
    currentPrice: 160,
    points: 3,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 5,
    discountToReligion: 10,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 32,
    discountFromCardAmount: 10,
    discountToCard: 36,
    discountToCardAmount: 20,
  } as Advance, {
    id: 19,
    name: 'FUNDAMENTALISM',
    description: 'SPECIAL ABILITY: You may choose to destroy all units in an area adjacent to your units by land. Barbarian tokens, pirate cities and units belonging to players holding FUNDAMENTALISM or PHILOSOPHY are unaffected.  Disadvantage with REGRESSION: Your marker is moved backward 1 additional step.',
    cost: 150,
    currentPrice: 150,
    points: 3,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 10,
    discountToScience: 0,
    discountToArts: 5,
    discountFromCard: 11,
    discountFromCardAmount: 10,
    discountToCard: 30,
    discountToCardAmount: 20,
  } as Advance, {
    id: 20,
    name: 'LAW',
    description: 'Advantage with TYRANNY: The beneficiary selects and annexes 5 less unit points.  Advantage with CIVIL DISORDER: Reduce 1 less city.  Advantage with CORRUPTION: Discard 5 less points of face value.',
    cost: 150,
    currentPrice: 150,
    points: 3,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 10,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 29,
    discountFromCardAmount: 10,
    discountToCard: 10,
    discountToCardAmount: 20,
  } as Advance, {
    id: 21,
    name: 'LIBRARY',
    description: 'You may discount the cost of 1 others Civilization Advance that you purchase in the same turn as LIBRARY by 40 points.  Advantage with REGRESSION: Your marker is moved backward 1 step less.',
    cost: 220,
    currentPrice: 220,
    points: 6,
    type1: AdvanceTypes.SCIENCE,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 20,
    discountToArts: 5,
    discountFromCard: 7,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 22,
    name: 'LITERACY',
    description: '0',
    cost: 110,
    currentPrice: 110,
    points: 3,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.ARTS,
    discountToCivics: 10,
    discountToCrafts: 5,
    discountToReligion: 5,
    discountToScience: 5,
    discountToArts: 10,
    discountFromCard: 34,
    discountFromCardAmount: 10,
    discountToCard: 24,
    discountToCardAmount: 20,
  } as Advance, {
    id: 23,
    name: 'MASONRY',
    description: 'Advantage with CYCLONE: Reduce 1 less of your selected cities.',
    cost: 60,
    currentPrice: 60,
    points: 1,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 10,
    discountToReligion: 0,
    discountToScience: 5,
    discountToArts: 0,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 17,
    discountToCardAmount: 10,
  } as Advance, {
    id: 24,
    name: 'MATHEMATICS',
    description: '0',
    cost: 250,
    currentPrice: 250,
    points: 6,
    type1: AdvanceTypes.SCIENCE,
    type2: AdvanceTypes.ARTS,
    discountToCivics: 10,
    discountToCrafts: 10,
    discountToReligion: 10,
    discountToScience: 20,
    discountToArts: 20,
    discountFromCard: 22,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 25,
    name: 'MEDICINE',
    description: 'Advantage with EPIDEMIC: Prevent 5 damage.',
    cost: 140,
    currentPrice: 140,
    points: 3,
    type1: AdvanceTypes.SCIENCE,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 5,
    discountToReligion: 0,
    discountToScience: 10,
    discountToArts: 0,
    discountFromCard: 16,
    discountFromCardAmount: 10,
    discountToCard: 3,
    discountToCardAmount: 20,
  } as Advance, {
    id: 26,
    name: 'METALWORKING',
    description: 'In conflicts, for each round of token removal all other players not holding METALWORKING must remove their token first.',
    cost: 90,
    currentPrice: 90,
    points: 1,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 10,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 27,
    discountToCardAmount: 10,
  } as Advance, {
    id: 27,
    name: 'MILITARY',
    description: 'Your movement phase is after all other players not holding MILITARY have moved.  You are allowed tot move tokens into areas containing cities belonging to players holding DIPLOMACY.  Disadvantage with CIVIL WAR: select 5 additional unit points.',
    cost: 170,
    currentPrice: 170,
    points: 3,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 10,
    discountToCrafts: 5,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 26,
    discountFromCardAmount: 10,
    discountToCard: 1,
    discountToCardAmount: 20,
  } as Advance, {
    id: 28,
    name: 'MINING',
    description: 'During the Trade Cards Acquisition phase, you may acquire additional trade cards form stack 6 and/or form stack 8 for 13 treasury tokens per card.  Treasury tokens are worth 2 points when purchasing Civilization Advances. When using treasury tokens to purchase Civilization Advances you may exceed the purchase price by exactly 1 this way.  Disadvantage with SLAVE REVOLT: Your city support rate is increased by 1 during the resolution of SLAVE REVOLT.',
    cost: 230,
    currentPrice: 230,
    points: 6,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 20,
    discountToReligion: 0,
    discountToScience: 5,
    discountToArts: 0,
    discountFromCard: 4,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 29,
    name: 'MONARCHY',
    description: 'You may choose to increase your tax rate by 1.  Advantage with BARBARIAN HORDES: 5 less barbarian tokens are used.  Disadvantage with TYRANNY: The beneficiary selects and annexes 5 additional unit points.',
    cost: 60,
    currentPrice: 60,
    points: 1,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 10,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 20,
    discountToCardAmount: 10,
  } as Advance, {
    id: 30,
    name: 'MONOTHEISM',
    description: 'SPECIAL ABILITY: You may choose to annex all units in an area adjacent to your units by land. Barbarian tokens, pirate cities and units belonging to players holding MONOTHEISM or THEOLOGY are unaffected.  Disadavantage with ICONOCLASM AND HERESY: Reduce 1 additional city.',
    cost: 240,
    currentPrice: 240,
    points: 6,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 0,
    discountToReligion: 20,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 19,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 31,
    name: 'MONUMENT',
    description: 'Acquire 20 additional points of credit tokens in any combination of colors.',
    cost: 180,
    currentPrice: 180,
    points: 3,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.RELIGION,
    discountToCivics: 0,
    discountToCrafts: 10,
    discountToReligion: 10,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 33,
    discountFromCardAmount: 10,
    discountToCard: 50,
    discountToCardAmount: 20,
  } as Advance, {
    id: 32,
    name: 'MUSIC',
    description: 'Advantage with CIVIL WAR: Select 5 less unit points.  Advantage with CIVIL DISORDER: Reduce 1 less city.',
    cost: 80,
    currentPrice: 80,
    points: 1,
    type1: AdvanceTypes.ARTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 10,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 18,
    discountToCardAmount: 10,
  } as Advance, {
    id: 33,
    name: 'MYSTICISM',
    description: 'Advantage with SUPERSTITION: Reduce 1 less city.',
    cost: 50,
    currentPrice: 50,
    points: 1,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.ARTS,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 5,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 31,
    discountToCardAmount: 10,
  } as Advance, {
    id: 34,
    name: 'MYTHOLOGY',
    description: 'Advantage with SLAVE REVOLT: Your city support rate is decreased by 1 during the resolution of SLAVE REVOLT.',
    cost: 60,
    currentPrice: 60,
    points: 1,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 10,
    discountToScience: 0,
    discountToArts: 5,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 22,
    discountToCardAmount: 10,
  } as Advance, {
    id: 35,
    name: 'NAVAL WARFARE',
    description: 'Your ships are allowed to carry 6 tokens.  In conflicts, you may choose to remove ships from the conflict area instead of tokens. After each round of token removal a new check for token majority must be made.  Advantage with PIRACY: If you are the primary victim, the beneficiary selects and replaces 1 less coastal city. You may not be selected as a secondary victim.  Disadvantage with CIVIL DISORDER: Reduce 1 additional city.',
    cost: 160,
    currentPrice: 160,
    points: 3,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 10,
    discountToCrafts: 5,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 8,
    discountFromCardAmount: 10,
    discountToCard: 13,
    discountToCardAmount: 20,
  } as Advance, {
    id: 36,
    name: 'PHILOSOPHY',
    description: 'Advanatage with ICONOCLASM AND HERESY: Reduce 2 cities less.  Disadvantage with CIVIL WAR: Select 5 additional unit points.',
    cost: 220,
    currentPrice: 220,
    points: 6,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.SCIENCE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 20,
    discountToScience: 20,
    discountToArts: 0,
    discountFromCard: 18,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 37,
    name: 'POLITICS',
    description: 'SPECIAL ABILITY: You may choose 1 of 2 options: 1) Gain up to 5 treasury tokens from stock. 2) Annex all units in an area adjacent by land to your units. Pay treasury tokens equal to the number of unit points annexed, or the effect is canceled. Barbarian tokens, pirate cities and units belonging to players holding POLITICS or CULTURAL ASCENDANCY are unaffected.  Disadvantage with BARBARIAN HORDES: 5 additional barbarian tokens are used.',
    cost: 230,
    currentPrice: 230,
    points: 6,
    type1: AdvanceTypes.ARTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 20,
    discountFromCard: 41,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 38,
    name: 'POTTERY',
    description: 'Advantage with FAMINE: Prevent 5 damage.',
    cost: 60,
    currentPrice: 60,
    points: 1,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 10,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 5,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 2,
    discountToCardAmount: 10,
  } as Advance, {
    id: 39,
    name: 'PROVINCIAL EMPIRE',
    description: 'SPECIAL ABILITY: You may choose to select up to 5 players that have units adjacent by land or water to your units. These players must choose and give you a Trade Card with a face value of at least 2. Players holding PROVINCIAL EMPIRE or PUBLIC WORKS may not be selected.  Disadvantage with BARBARIAN HORDES: 5 additional barbarian tokens are used.  Disadvantage with TRYANNY: The beneficiary selects and annexes 5 additional unit points.',
    cost: 260,
    currentPrice: 260,
    points: 6,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 20,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 14,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 40,
    name: 'PUBLIC WORKS',
    description: 'Areas containing your cities may also contain 1 of your tokens.  You are protected against the effect of PROVINCIAL EMPIRE.',
    cost: 230,
    currentPrice: 230,
    points: 6,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 20,
    discountToCrafts: 5,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 6,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 41,
    name: 'RHETORIC',
    description: 'During the Trade Cards Acquisition phase, you may acquire additional trade cards from stack 3 for 9 treasury tokens per card.',
    cost: 130,
    currentPrice: 130,
    points: 3,
    type1: AdvanceTypes.ARTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 10,
    discountFromCard: 16,
    discountFromCardAmount: 10,
    discountToCard: 37,
    discountToCardAmount: 20,
  } as Advance, {
    id: 42,
    name: 'ROADBUILDING',
    description: 'When moving over land, your tokens may move 2 areas. Tokens that are in a conflict situation after 1 step are not allowed to move any further.  Your hand limit of trade cards is increased by 1.  Disadvantage with EPIDEMIC: If you are the primary victim, take 5 additional damage.',
    cost: 220,
    currentPrice: 220,
    points: 6,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 20,
    discountToReligion: 0,
    discountToScience: 5,
    discountToArts: 0,
    discountFromCard: 17,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 43,
    name: 'SCULPTURE',
    description: 'Advantage with TYRANNY: The beneficiary selects and annexes 5 less unit points.',
    cost: 50,
    currentPrice: 50,
    points: 1,
    type1: AdvanceTypes.ARTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 10,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 4,
    discountToCardAmount: 10,
  } as Advance, {
    id: 44,
    name: 'THEOCRACY',
    description: 'Advantage with ICONOCLASM AND HERESY: You may choose and discard 2 Trade Cards to prevent the city reduction effect for you.',
    cost: 80,
    currentPrice: 80,
    points: 1,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.RELIGION,
    discountToCivics: 5,
    discountToCrafts: 0,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 48,
    discountToCardAmount: 10,
  } as Advance, {
    id: 45,
    name: 'THEOLOGY',
    description: 'Advantage with ICONOCLASM AND HERESY: Reduce 3 cities less.  Your units are protected against the effect of MONOTHEISM.',
    cost: 250,
    currentPrice: 250,
    points: 6,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 20,
    discountToReligion: 0,
    discountToScience: 5,
    discountToArts: 0,
    discountFromCard: 48,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 46,
    name: 'TRADE EMPIRE',
    description: 'Once per turn, you may choose to use 1 substitute Trade Card of at least the same face value when turning in an incomplete set of commodity cards.  Disadvantage with CYCLONE: Select and reduce 1 additional city adjacent to the open sea area.  Disadvantage with EPIDEMIC: If you are the primary victim, take 5 additional damage.',
    cost: 260,
    currentPrice: 260,
    points: 6,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 20,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 47,
    discountFromCardAmount: 20,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 47,
    name: 'TRADE ROUTES',
    description: 'SPECIAL ABILITY: You may choose to discard any number of Trade Cards to gain treasury tokens at twice the face value of the Trade Cards discarded this way.',
    cost: 180,
    currentPrice: 180,
    points: 3,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 0,
    discountToCrafts: 10,
    discountToReligion: 5,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 9,
    discountFromCardAmount: 10,
    discountToCard: 46,
    discountToCardAmount: 20,
  } as Advance, {
    id: 48,
    name: 'UNIVERSAL DOCTRINE',
    description: 'SPECAIL ABILITY: You may choose to annex 1 pirate city of up to 5 barbarian tokens anywhere on the board.  Disadvantage with SUPERSTITION: Reduce 1 additional city.',
    cost: 160,
    currentPrice: 160,
    points: 3,
    type1: AdvanceTypes.RELIGION,
    type2: AdvanceTypes.NONE,
    discountToCivics: 5,
    discountToCrafts: 0,
    discountToReligion: 10,
    discountToScience: 0,
    discountToArts: 0,
    discountFromCard: 44,
    discountFromCardAmount: 10,
    discountToCard: 45,
    discountToCardAmount: 20,
  } as Advance, {
    id: 49,
    name: 'URBANISM',
    description: 'Once per turn, when constructing a wilderness city you may choose to use up to 4 tokens from areas adjacent by land.',
    cost: 50,
    currentPrice: 50,
    points: 1,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.NONE,
    discountToCivics: 10,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 5,
    discountToArts: 0,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 14,
    discountToCardAmount: 10,
  } as Advance, {
    id: 50,
    name: 'WONDER OF THE WORLD',
    description: 'During the Trade Cards Acquisition phase, you may acquire 1 additional Trade Card for free from a stack number that is highter than your number of cities in play.  WONDER OF THE WORLD counts as a city during the A.S.T. alteration phase.  Disadvantage with CORRUPTION: Discard 5 additional points of face value.',
    cost: 290,
    currentPrice: 290,
    points: 6,
    type1: AdvanceTypes.CRAFTS,
    type2: AdvanceTypes.ARTS,
    discountToCivics: 0,
    discountToCrafts: 20,
    discountToReligion: 0,
    discountToScience: 0,
    discountToArts: 20,
    discountFromCard: 0,
    discountFromCardAmount: 0,
    discountToCard: 0,
    discountToCardAmount: 0,
  } as Advance, {
    id: 51,
    name: 'WRITTEN RECORD',
    description: 'Acquire 10 additional points of credit tokens in any combination of colors.',
    cost: 60,
    currentPrice: 60,
    points: 1,
    type1: AdvanceTypes.CIVICS,
    type2: AdvanceTypes.SCIENCE,
    discountToCivics: 5,
    discountToCrafts: 0,
    discountToReligion: 0,
    discountToScience: 5,
    discountToArts: 0,
    discountFromCard: 31,
    discountFromCardAmount: 20,
    discountToCard: 7,
    discountToCardAmount: 10,
  } as Advance
];
