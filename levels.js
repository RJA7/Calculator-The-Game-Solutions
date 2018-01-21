const AddOperator = require(`./operators/add`);
const MultiplyOperator = require(`./operators/multiply`);
const ReplaceOperator = require(`./operators/replace`);
const AddToEndOperator = require(`./operators/addToEnd`);
const PowerOperator = require(`./operators/power`);
const BackspaceOperator = require(`./operators/backspace`);
const FlipSignOperator = require(`./operators/flip-sign`);
const ReverseOperator = require(`./operators/reverse`);
const SumOperator = require(`./operators/sum`);
const ShiftOperator = require(`./operators/shift`);
const UnShiftOperator = require(`./operators/unshift`);
const MirrorOperator = require(`./operators/mirror`);
const AddToButtonsOperator = require(`./operators/addToButtons`);
const {StoreOperator} = require(`./operators/store`);
const InvertOperator = require(`./operators/invert`);
const Portal = require(`./operators/portal`);

module.exports = {
  n_1: {
    moves    : 2,
    goal     : 2,
    total    : 0,
    operators: [
      new AddOperator(1),
    ],
  },

  n_2: {
    moves    : 3,
    goal     : 8,
    total    : 0,
    operators: [
      new AddOperator(2),
      new AddOperator(3),
    ],
  },

  n_3: {
    moves    : 3,
    goal     : 12,
    total    : 0,
    operators: [
      new MultiplyOperator(4),
      new AddOperator(1),
      new AddOperator(2),
    ],
  },

  n_4: {
    moves    : 3,
    goal     : 7,
    total    : 1,
    operators: [
      new AddOperator(4),
      new AddOperator(-2),
    ],
  },

  n_5: {
    moves    : 3,
    goal     : 4,
    total    : 3,
    operators: [
      new AddOperator(4),
      new MultiplyOperator(4),
      new MultiplyOperator(1 / 4),
    ],
  },

  n_6: {
    moves    : 4,
    goal     : 64,
    total    : 0,
    operators: [
      new AddOperator(2),
      new MultiplyOperator(4),
    ],
  },

  n_7: {
    moves    : 3,
    goal     : 5,
    total    : 4,
    operators: [
      new MultiplyOperator(1 / 3),
      new AddOperator(3),
      new MultiplyOperator(3),
    ],
  },

  n_8: {
    moves    : 3,
    goal     : 4,
    total    : 4321,
    operators: [
      new BackspaceOperator(),
    ],
  },

  n_9: {
    moves    : 3,
    goal     : 4,
    total    : 0,
    operators: [
      new AddOperator(8),
      new MultiplyOperator(5),
      new BackspaceOperator(),
    ],
  },

  n_10: {
    moves    : 4,
    goal     : 9,
    total    : 50,
    operators: [
      new MultiplyOperator(1 / 5),
      new MultiplyOperator(3),
      new BackspaceOperator(),
    ],
  },

  n_11: {
    moves    : 3,
    goal     : 100,
    total    : 99,
    operators: [
      new AddOperator(-8),
      new MultiplyOperator(11),
      new BackspaceOperator(),
    ],
  },

  n_12: {
    moves    : 5,
    goal     : 404,
    total    : 0,
    operators: [
      new AddOperator(8),
      new MultiplyOperator(10),
      new MultiplyOperator(1 / 2),
    ],
  },

  n_13: {
    moves    : 4,
    goal     : 23,
    total    : 171,
    operators: [
      new MultiplyOperator(2),
      new AddOperator(-9),
      new BackspaceOperator(),
    ],
  },

  n_14: {
    moves    : 5,
    goal     : 21,
    total    : 0,
    operators: [
      new AddOperator(5),
      new MultiplyOperator(3),
      new MultiplyOperator(5),
      new BackspaceOperator(),
    ],
  },

  n_15: {
    moves    : 3,
    goal     : 50,
    total    : 10,
    operators: [
      new MultiplyOperator(3),
      new MultiplyOperator(2),
      new AddOperator(-5),
    ],
  },

  n_16: {
    moves    : 5,
    goal     : 2,
    total    : 0,
    operators: [
      new AddOperator(4),
      new MultiplyOperator(9),
      new BackspaceOperator(),
    ],
  },

  n_17: {
    moves    : 2,
    goal     : 11,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
    ],
  },

  n_18: {
    moves    : 3,
    goal     : 101,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new AddToEndOperator(0),
    ],
  },

  n_19: {
    moves    : 3,
    goal     : 44,
    total    : 0,
    operators: [
      new AddToEndOperator(2),
      new MultiplyOperator(2),
    ],
  },

  n_20: {
    moves    : 2,
    goal     : 35,
    total    : 0,
    operators: [
      new AddOperator(3),
      new AddToEndOperator(5),
    ],
  },

  n_21: {
    moves    : 3,
    goal     : 56,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new AddOperator(5),
    ],
  },

  n_22: {
    moves    : 4,
    goal     : 9,
    total    : 0,
    operators: [
      new AddOperator(2),
      new MultiplyOperator(1 / 3),
      new AddToEndOperator(1),
    ],
  },

  n_23: {
    moves    : 4,
    goal     : 10,
    total    : 15,
    operators: [
      new AddToEndOperator(0),
      new AddOperator(2),
      new MultiplyOperator(1 / 5),
    ],
  },

  n_24: {
    moves    : 5,
    goal     : 210,
    total    : 0,
    operators: [
      new AddOperator(-5),
      new AddOperator(5),
      new AddToEndOperator(2),
      new AddToEndOperator(5),
    ],
  },

  n_25: {
    moves    : 4,
    goal     : 2020,
    total    : 40,
    operators: [
      new AddToEndOperator(0),
      new AddOperator(4),
      new MultiplyOperator(1 / 2),
    ],
  },

  n_26: {
    moves    : 4,
    goal     : 11,
    total    : 0,
    operators: [
      new AddToEndOperator(12),
      new BackspaceOperator(),
    ],
  },

  n_27: {
    moves    : 4,
    goal     : 102,
    total    : 0,
    operators: [
      new AddToEndOperator(10),
      new AddOperator(1),
      new BackspaceOperator(),
    ],
  },

  n_28: {
    moves    : 4,
    goal     : 222,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new ReplaceOperator(1, 2),
    ],
  },

  n_29: {
    moves    : 4,
    goal     : 93,
    total    : 0,
    operators: [
      new AddOperator(6),
      new MultiplyOperator(7),
      new ReplaceOperator(6, 9),
    ],
  },

  n_30: {
    moves    : 6,
    goal     : 2321,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new AddToEndOperator(2),
      new ReplaceOperator(1, 2),
      new ReplaceOperator(2, 3),
    ],
  },

  n_31: {
    moves    : 5,
    goal     : 24,
    total    : 0,
    operators: [
      new AddOperator(9),
      new MultiplyOperator(2),
      new ReplaceOperator(8, 4),
    ],
  },

  n_32: {
    moves    : 5,
    goal     : 29,
    total    : 11,
    operators: [
      new MultiplyOperator(1 / 2),
      new AddOperator(3),
      new ReplaceOperator(1, 2),
      new ReplaceOperator(2, 9),
    ],
  },

  n_33: {
    moves    : 5,
    goal     : 20,
    total    : 36,
    operators: [
      new AddOperator(3),
      new MultiplyOperator(1 / 3),
      new ReplaceOperator(1, 2),
    ],
  },

  n_34: {
    moves    : 4,
    goal     : 15,
    total    : 2,
    operators: [
      new MultiplyOperator(1 / 3),
      new AddToEndOperator(1),
      new ReplaceOperator(4, 5),
      new MultiplyOperator(2),
    ],
  },

  n_35: {
    moves    : 4,
    goal     : 414,
    total    : 1234,
    operators: [
      new ReplaceOperator(23, 41),
      new ReplaceOperator(24, 14),
      new ReplaceOperator(12, 24),
      new ReplaceOperator(14, 2),
    ],
  },

  n_36: {
    moves    : 4,
    goal     : -85,
    total    : 0,
    operators: [
      new AddOperator(6),
      new AddToEndOperator(5),
      new AddOperator(-7),
    ],
  },

  n_37: {
    moves    : 3,
    goal     : 9,
    total    : 0,
    operators: [
      new AddOperator(-1),
      new AddOperator(-2),
      new PowerOperator(2),
    ],
  },

  n_38: {
    moves    : 4,
    goal     : -120,
    total    : 0,
    operators: [
      new MultiplyOperator(5),
      new AddOperator(-6),
      new AddToEndOperator(4),
    ],
  },

  n_39: {
    moves    : 3,
    goal     : 144,
    total    : 0,
    operators: [
      new AddOperator(-1),
      new AddToEndOperator(2),
      new PowerOperator(2),
    ],
  },

  n_40: {
    moves    : 1,
    goal     : 5,
    total    : -5,
    operators: [
      new FlipSignOperator(),
    ],
  },

  n_41: {
    moves    : 3,
    goal     : -6,
    total    : 0,
    operators: [
      new AddOperator(4),
      new AddOperator(2),
      new FlipSignOperator(),
    ],
  },

  n_42: {
    moves    : 4,
    goal     : -13,
    total    : 0,
    operators: [
      new AddOperator(3),
      new AddOperator(-7),
      new FlipSignOperator(),
    ],
  },

  n_43: {
    moves    : 4,
    goal     : 60,
    total    : 0,
    operators: [
      new AddOperator(5),
      new AddOperator(-10),
      new FlipSignOperator(),
      new MultiplyOperator(4),
    ],
  },

  n_44: {
    moves    : 5,
    goal     : 52,
    total    : 44,
    operators: [
      new AddOperator(9),
      new MultiplyOperator(1 / 2),
      new FlipSignOperator(),
      new MultiplyOperator(4),
    ],
  },

  n_45: {
    moves    : 5,
    goal     : 10,
    total    : 9,
    operators: [
      new AddOperator(5),
      new MultiplyOperator(5),
      new FlipSignOperator(),
    ],
  },

  n_46: {
    moves    : 5,
    goal     : 12,
    total    : 14,
    operators: [
      new AddToEndOperator(6),
      new AddOperator(5),
      new FlipSignOperator(),
      new MultiplyOperator(1 / 8),
    ],
  },

  n_47: {
    moves    : 5,
    goal     : 13,
    total    : 55,
    operators: [
      new AddOperator(9),
      new FlipSignOperator(),
      new BackspaceOperator(),
    ],
  },

  n_48: {
    moves    : 5,
    goal     : 245,
    total    : 0,
    operators: [
      new AddOperator(-3),
      new AddToEndOperator(5),
      new FlipSignOperator(),
      new MultiplyOperator(4),
    ],
  },

  n_49: {
    moves    : 4,
    goal     : 12,
    total    : 39,
    operators: [
      new MultiplyOperator(-3),
      new MultiplyOperator(1 / 3),
      new FlipSignOperator(),
      new AddOperator(9),
    ],
  },

  n_50: {
    moves    : 6,
    goal     : 126,
    total    : 111,
    operators: [
      new MultiplyOperator(3),
      new AddOperator(-9),
      new FlipSignOperator(),
      new BackspaceOperator(),
    ],
  },

  n_51: {
    moves    : 5,
    goal     : 3,
    total    : 34,
    operators: [
      new AddOperator(-5),
      new AddOperator(8),
      new FlipSignOperator(),
      new MultiplyOperator(1 / 7),
    ],
  },

  n_52: {
    moves    : 5,
    goal     : 4,
    total    : 25,
    operators: [
      new AddOperator(-4),
      new MultiplyOperator(-4),
      new FlipSignOperator(),
      new MultiplyOperator(1 / 3),
      new MultiplyOperator(1 / 8),
    ],
  },

  n_53: {
    moves    : 1,
    goal     : 21,
    total    : 12,
    operators: [
      new ReverseOperator(),
    ],
  },

  n_54: {
    moves    : 3,
    goal     : 51,
    total    : 0,
    operators: [
      new AddOperator(6),
      new AddOperator(9),
      new ReverseOperator(),
    ],
  },

  n_55: {
    moves    : 3,
    goal     : 101,
    total    : 100,
    operators: [
      new AddToEndOperator(1),
      new AddOperator(9),
      new ReverseOperator(),
    ],
  },

  n_56: {
    moves    : 4,
    goal     : 100,
    total    : 1101,
    operators: [
      new AddOperator(-1),
      new ReverseOperator(),
    ],
  },

  n_57: {
    moves    : 4,
    goal     : 58,
    total    : 0,
    operators: [
      new AddOperator(4),
      new MultiplyOperator(4),
      new ReverseOperator(),
      new AddOperator(-3),
    ],
  },

  n_58: {
    moves    : 3,
    goal     : 4,
    total    : 6,
    operators: [
      new AddToEndOperator(1),
      new MultiplyOperator(1 / 4),
      new ReverseOperator(),
    ],
  },

  n_59: {
    moves    : 3,
    goal     : 21,
    total    : 15,
    operators: [
      new AddOperator(9),
      new MultiplyOperator(5),
      new ReverseOperator(),
    ],
  },

  n_60: {
    moves    : 5,
    goal     : 13,
    total    : 100,
    operators: [
      new MultiplyOperator(1 / 2),
      new ReverseOperator(),
    ],
  },

  n_61: {
    moves    : 4,
    goal     : 11011,
    total    : 10,
    operators: [
      new AddToEndOperator(1),
      new ReverseOperator(),
    ],
  },

  n_62: {
    moves    : 4,
    goal     : 102,
    total    : 0,
    operators: [
      new AddToEndOperator(10),
      new MultiplyOperator(4),
      new ReverseOperator(),
      new AddOperator(5),
    ],
  },

  n_63: {
    moves    : 4,
    goal     : 7,
    total    : 0,
    operators: [
      new AddToEndOperator(2),
      new AddOperator(1),
      new ReverseOperator(),
      new MultiplyOperator(1 / 3),
    ],
  },

  n_64: {
    moves    : 4,
    goal     : 4,
    total    : 0,
    operators: [
      new AddToEndOperator(5),
      new MultiplyOperator(4),
      new ReverseOperator(),
      new MultiplyOperator(2),
    ],
  },

  n_65: {
    moves    : 3,
    goal     : 212,
    total    : 121,
    operators: [
      new AddToEndOperator(2),
      new AddOperator(-1),
      new ReverseOperator(),
    ],
  },

  n_66: {
    moves    : 5,
    goal     : 9,
    total    : 8,
    operators: [
      new MultiplyOperator(3),
      new AddToEndOperator(1),
      new ReverseOperator(),
      new MultiplyOperator(1 / 5),
    ],
  },

  n_67: {
    moves    : 5,
    goal     : 13,
    total    : 0,
    operators: [
      new AddOperator(7),
      new AddOperator(8),
      new ReverseOperator(),
      new AddOperator(9),
    ],
  },

  n_68: {
    moves    : 6,
    goal     : 123,
    total    : 0,
    operators: [
      new AddOperator(3),
      new AddToEndOperator(1),
      new ReverseOperator(),
      new AddOperator(-2),
    ],
  },

  n_69: {
    moves    : 5,
    goal     : 424,
    total    : 0,
    operators: [
      new AddToEndOperator(6),
      new AddOperator(8),
      new ReverseOperator(),
    ],
  },

  n_70: {
    moves    : 5,
    goal     : 81,
    total    : 7,
    operators: [
      new AddOperator(-9),
      new MultiplyOperator(3),
      new FlipSignOperator(),
      new AddOperator(4),
      new ReverseOperator(),
    ],
  },

  n_71: {
    moves    : 5,
    goal     : -43,
    total    : 0,
    operators: [
      new AddOperator(-5),
      new AddOperator(7),
      new ReverseOperator(),
      new AddOperator(-9),
    ],
  },

  n_72: {
    moves    : 7,
    goal     : 28,
    total    : 0,
    operators: [
      new AddOperator(6),
      new AddOperator(-3),
      new ReverseOperator(),
      new BackspaceOperator(),
    ],
  },

  n_73: {
    moves    : 5,
    goal     : 136,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new AddOperator(2),
      new ReverseOperator(),
      new MultiplyOperator(3),
    ],
  },

  n_74: {
    moves    : 4,
    goal     : -1,
    total    : 0,
    operators: [
      new AddOperator(5),
      new ReverseOperator(),
      new FlipSignOperator(),
    ],
  },

  n_75: {
    moves    : 5,
    goal     : -25,
    total    : 0,
    operators: [
      new AddOperator(4),
      new MultiplyOperator(3),
      new ReverseOperator(),
      new FlipSignOperator(),
    ],
  },

  n_76: {
    moves    : 5,
    goal     : -5,
    total    : 0,
    operators: [
      new AddOperator(7),
      new MultiplyOperator(3),
      new ReverseOperator(),
      new FlipSignOperator(),
    ],
  },

  n_77: {
    moves    : 4,
    goal     : 41,
    total    : 88,
    operators: [
      new MultiplyOperator(1 / 4),
      new AddOperator(-4),
      new ReverseOperator(),
    ],
  },

  n_78: {
    moves    : 5,
    goal     : 101,
    total    : 100,
    operators: [
      new AddToEndOperator(0),
      new MultiplyOperator(2),
      new ReverseOperator(),
      new ReplaceOperator(2, 10),
      new ReplaceOperator(0, 1),
    ],
  },

  n_79: {
    moves    : 7,
    goal     : 424,
    total    : 0,
    operators: [
      new MultiplyOperator(1 / 2),
      new AddToEndOperator(5),
      new ReplaceOperator(5, 4),
      new ReverseOperator(),
    ],
  },

  n_80: {
    moves    : 5,
    goal     : 100,
    total    : 99,
    operators: [
      new AddToEndOperator(9),
      new MultiplyOperator(1 / 9),
      new ReverseOperator(),
      new ReplaceOperator(1, 0),
    ],
  },

  n_81: {
    moves    : 5,
    goal     : 30,
    total    : 8,
    operators: [
      new AddToEndOperator(2),
      new AddOperator(-4),
      new ReplaceOperator(2, 3),
      new ReverseOperator(),
    ],
  },

  n_82: {
    moves    : 5,
    goal     : 222,
    total    : 101,
    operators: [
      new AddOperator(-1),
      new ReverseOperator(),
      new ReplaceOperator(0, 2),
    ],
  },

  n_83: {
    moves    : 5,
    goal     : 500,
    total    : 36,
    operators: [
      new MultiplyOperator(4),
      new MultiplyOperator(1 / 3),
      new ReplaceOperator(1, 5),
      new ReverseOperator(),
    ],
  },

  n_84: {
    moves    : 8,
    goal     : 196,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new AddOperator(12),
      new ReverseOperator(),
      new MultiplyOperator(13),
      new BackspaceOperator(),
    ],
  },

  n_85: {
    moves    : 5,
    goal     : 101,
    total    : 50,
    operators: [
      new ReplaceOperator(1, 10),
      new AddOperator(50),
      new ReverseOperator(),
      new ReplaceOperator(5, 1),
    ],
  },

  n_86: {
    moves    : 6,
    goal     : 2048,
    total    : 1,
    operators: [
      new AddToEndOperator(2),
      new MultiplyOperator(4),
      new ReverseOperator(),
      new MultiplyOperator(10),
    ],
  },

  n_87: {
    moves    : 5,
    goal     : 123,
    total    : 12,
    operators: [
      new AddToEndOperator(12),
      new AddOperator(1),
      new ReplaceOperator(12, 2),
      new ReverseOperator(),
    ],
  },

  n_88: {
    moves    : 6,
    goal     : 55,
    total    : 86,
    operators: [
      new AddOperator(2),
      new AddOperator(14),
      new ReverseOperator(),
      new ReplaceOperator(0, 5),
    ],
  },

  n_89: {
    moves    : 4,
    goal     : 3,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new SumOperator(),
    ],
  },

  n_90: {
    moves    : 3,
    goal     : 4,
    total    : 1231,
    operators: [
      new SumOperator(),
      new ReplaceOperator(3, 1),
      new ReplaceOperator(2, 3),
    ],
  },

  n_91: {
    moves    : 5,
    goal     : 45,
    total    : 0,
    operators: [
      new MultiplyOperator(9),
      new AddToEndOperator(4),
      new ReplaceOperator(3, 5),
      new MultiplyOperator(3),
      new SumOperator(),
    ],
  },

  n_92: {
    moves    : 5,
    goal     : 28,
    total    : 424,
    operators: [
      new MultiplyOperator(4),
      new ReplaceOperator(4, 6),
      new SumOperator(),
    ],
  },

  n_93: {
    moves    : 4,
    goal     : 8,
    total    : 3,
    operators: [
      new AddToEndOperator(3),
      new AddOperator(33),
      new SumOperator(),
      new ReplaceOperator(3, 1),
    ],
  },

  n_94: {
    moves    : 4,
    goal     : 44,
    total    : 24,
    operators: [
      new MultiplyOperator(1 / 2),
      new AddToEndOperator(4),
      new ReplaceOperator(1, 2),
      new SumOperator(),
    ],
  },

  n_95: {
    moves    : 4,
    goal     : 143,
    total    : 142,
    operators: [
      new MultiplyOperator(9),
      new AddOperator(9),
      new ReplaceOperator(44, 43),
      new SumOperator(),
    ],
  },

  n_96: {
    moves    : 5,
    goal     : 1,
    total    : 24,
    operators: [
      new MultiplyOperator(1 / 3),
      new MultiplyOperator(4),
      new ReplaceOperator(5, 10),
      new SumOperator(),
    ],
  },

  n_97: {
    moves    : 5,
    goal     : 100,
    total    : 4,
    operators: [
      new AddToEndOperator(3),
      new MultiplyOperator(3),
      new SumOperator(),
      new AddOperator(1),
    ],
  },

  n_98: {
    moves    : 5,
    goal     : 8,
    total    : 93,
    operators: [
      new AddOperator(4),
      new MultiplyOperator(3),
      new SumOperator(),
    ],
  },

  n_99: {
    moves    : 5,
    goal     : 16,
    total    : 5,
    operators: [
      new MultiplyOperator(5),
      new MultiplyOperator(1 / 2),
      new SumOperator(),
      new ReplaceOperator(5, 2),
    ],
  },

  n_100: {
    moves    : 4,
    goal     : 64,
    total    : 128,
    operators: [
      new MultiplyOperator(4),
      new MultiplyOperator(1 / 4),
      new SumOperator(),
      new ReplaceOperator(5, 16),
    ],
  },

  n_101: {
    moves    : 6,
    goal     : 121,
    total    : 59,
    operators: [
      new AddToEndOperator(1),
      new MultiplyOperator(5),
      new ReplaceOperator(15, 51),
      new SumOperator(),
    ],
  },

  n_102: {
    moves    : 6,
    goal     : 5,
    total    : 18,
    operators: [
      new MultiplyOperator(2),
      new MultiplyOperator(1 / 3),
      new ReplaceOperator(12, 21),
      new SumOperator(),
    ],
  },

  n_103: {
    moves    : 4,
    goal     : 30,
    total    : 9,
    operators: [
      new AddOperator(-5),
      new MultiplyOperator(-6),
      new FlipSignOperator(),
      new SumOperator(),
    ],
  },

  n_104: {
    moves    : 5,
    goal     : -17,
    total    : 105,
    operators: [
      new AddOperator(-5),
      new MultiplyOperator(1 / 5),
      new FlipSignOperator(),
      new MultiplyOperator(4),
      new SumOperator(),
    ],
  },

  n_105: {
    moves    : 6,
    goal     : 11,
    total    : 36,
    operators: [
      new AddOperator(-6),
      new MultiplyOperator(1 / 3),
      new FlipSignOperator(),
      new SumOperator(),
    ],
  },

  n_106: {
    moves    : 5,
    goal     : 64,
    total    : 3,
    operators: [
      new AddOperator(3),
      new SumOperator(),
      new PowerOperator(3),
      new ReplaceOperator(0, 1),
    ],
  },

  n_107: {
    moves    : 5,
    goal     : 11,
    total    : 2,
    operators: [
      new MultiplyOperator(2),
      new AddToEndOperator(10),
      new PowerOperator(3),
      new SumOperator(),
      new ReplaceOperator(10, 1),
    ],
  },

  n_108: {
    moves    : 2,
    goal     : 2311,
    total    : 1123,
    operators: [
      new ShiftOperator(),
    ],
  },

  n_109: {
    moves    : 2,
    goal     : 3254,
    total    : 5432,
    operators: [
      new UnShiftOperator(),
    ],
  },

  n_110: {
    moves    : 3,
    goal     : 121,
    total    : 101,
    operators: [
      new AddOperator(2),
      new UnShiftOperator(),
      new ShiftOperator(),
    ],
  },

  n_111: {
    moves    : 4,
    goal     : 1999,
    total    : 98,
    operators: [
      new AddToEndOperator(1),
      new AddToEndOperator(9),
      new ReplaceOperator(89, 99),
      new UnShiftOperator(),
    ],
  },

  n_112: {
    moves    : 4,
    goal     : 129,
    total    : 70,
    operators: [
      new MultiplyOperator(3),
      new AddToEndOperator(9),
      new UnShiftOperator(),
    ],
  },

  n_113: {
    moves    : 5,
    goal     : 210,
    total    : 120,
    operators: [
      new AddOperator(1),
      new ShiftOperator(),
      new FlipSignOperator(),
    ],
  },

  n_114: {
    moves    : 5,
    goal     : 210,
    total    : 1001,
    operators: [
      new AddOperator(2),
      new UnShiftOperator(),
      new ReplaceOperator(12, 0),
    ],
  },

  n_115: {
    moves    : 3,
    goal     : 501,
    total    : 100,
    operators: [
      new AddOperator(5),
      new AddToEndOperator(0),
      new ShiftOperator(),
    ],
  },

  n_116: {
    moves    : 4,
    goal     : 3,
    total    : 212,
    operators: [
      new AddOperator(11),
      new ReplaceOperator(3, 1),
      new SumOperator(),
      new ShiftOperator(),
    ],
  },

  n_117: {
    moves    : 4,
    goal     : 121,
    total    : 356,
    operators: [
      new AddOperator(-2),
      new MultiplyOperator(1 / 3),
      new UnShiftOperator(),
    ],
  },

  n_118: {
    moves    : 6,
    goal     : 13,
    total    : 2152,
    operators: [
      new ReplaceOperator(25, 12),
      new ReplaceOperator(21, 3),
      new UnShiftOperator(),
      new ReplaceOperator(12, 5),
      new ReverseOperator(),
    ],
  },

  n_119: {
    moves    : 5,
    goal     : 520,
    total    : 1025,
    operators: [
      new UnShiftOperator(),
      new ReplaceOperator(50, 0),
      new ReplaceOperator(25, 525),
      new ReplaceOperator(51, 5),
    ],
  },

  n_120: {
    moves    : 1,
    goal     : 2332,
    total    : 23,
    operators: [
      new MirrorOperator(),
    ],
  },

  n_121: {
    moves    : 3,
    goal     : 1221,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new AddToEndOperator(2),
      new MirrorOperator(),
    ],
  },

  n_122: {
    moves    : 6,
    goal     : 19,
    total    : 91,
    operators: [
      new AddOperator(5),
      new MirrorOperator(),
      new SumOperator(),
    ],
  },

  n_123: {
    moves    : 4,
    goal     : 116,
    total    : 22,
    operators: [
      new AddOperator(-3),
      new AddToEndOperator(6),
      new MirrorOperator(),
      new SumOperator(),
    ],
  },

  n_124: {
    moves    : 7,
    goal     : 20,
    total    : 125,
    operators: [
      new ReplaceOperator(6, 2),
      new AddToEndOperator(0),
      new MirrorOperator(),
      new SumOperator(),
    ],
  },

  n_125: {
    moves    : 4,
    goal     : 3,
    total    : 22,
    operators: [
      new SumOperator(),
      new MultiplyOperator(1 / 2),
      new MirrorOperator(),
      new BackspaceOperator(),
    ],
  },

  n_126: {
    moves    : 5,
    goal     : 1111,
    total    : 0,
    operators: [
      new AddOperator(2),
      new MultiplyOperator(6),
      new MirrorOperator(),
      new ReplaceOperator(21, 11),
    ],
  },

  n_127: {
    moves    : 8,
    goal     : 2020,
    total    : -1,
    operators: [
      new MultiplyOperator(3),
      new AddOperator(8),
      new ReverseOperator(),
      new AddOperator(2),
      new MirrorOperator(),
    ],
  },

  n_128: {
    moves    : 6,
    goal     : 112,
    total    : 13,
    operators: [
      new ReplaceOperator(99, 60),
      new MultiplyOperator(1 / 3),
      new MirrorOperator(),
      new MultiplyOperator(3),
      new UnShiftOperator(),
    ],
  },

  n_129: {
    moves    : 6,
    goal     : 18,
    total    : 140,
    operators: [
      new AddOperator(-3),
      new AddOperator(9),
      new MirrorOperator(),
      new MultiplyOperator(1 / 12),
      new BackspaceOperator(),
    ],
  },

  n_130: {
    moves    : 4,
    goal     : 33,
    total    : 17,
    operators: [
      new MultiplyOperator(2),
      new AddOperator(-4),
      new MirrorOperator(),
      new ShiftOperator(),
    ],
  },

  n_131: {
    moves    : 8,
    goal     : 20,
    total    : 125,
    operators: [
      new MirrorOperator(),
      new SumOperator(),
    ],
  },

  n_132: {
    moves    : 3,
    goal     : 15,
    total    : 10,
    operators: [
      new AddOperator(2),
      new AddToButtonsOperator(1),
    ],
  },

  n_133: {
    moves    : 4,
    goal     : 14,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new AddOperator(2),
      new AddToButtonsOperator(1),
    ],
  },

  n_134: {
    moves    : 3,
    goal     : 34,
    total    : 0,
    operators: [
      new AddToEndOperator(2),
      new AddToEndOperator(3),
      new AddToButtonsOperator(1),
    ],
  },

  n_135: {
    moves    : 5,
    goal     : 101,
    total    : 0,
    operators: [
      new AddToEndOperator(2),
      new AddOperator(5),
      new AddToButtonsOperator(2),
    ],
  },

  n_136: {
    moves    : 5,
    goal     : 28,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new AddOperator(2),
      new AddToButtonsOperator(3),
    ],
  },

  n_137: {
    moves    : 5,
    goal     : 42,
    total    : 0,
    operators: [
      new AddOperator(-2),
      new AddOperator(5),
      new AddToButtonsOperator(1),
      new MultiplyOperator(2),
    ],
  },

  n_138: {
    moves    : 5,
    goal     : 25,
    total    : 0,
    operators: [
      new AddOperator(2),
      new MultiplyOperator(3),
      new AddToButtonsOperator(2),
      new AddOperator(-3),
    ],
  },

  n_139: {
    moves    : 4,
    goal     : 41,
    total    : 5,
    operators: [
      new AddOperator(4),
      new AddOperator(8),
      new AddToButtonsOperator(2),
      new MultiplyOperator(3),
    ],
  },

  n_140: {
    moves    : 5,
    goal     : 31,
    total    : 33,
    operators: [
      new MultiplyOperator(4),
      new AddOperator(2),
      new AddToButtonsOperator(1),
      new AddOperator(3),
      new SumOperator(),
    ],
  },

  n_141: {
    moves    : 5,
    goal     : 268,
    total    : 25,
    operators: [
      new AddOperator(8),
      new MultiplyOperator(2),
      new AddToButtonsOperator(1),
      new MultiplyOperator(5),
    ],
  },

  n_142: {
    moves    : 2,
    goal     : 1111,
    total    : 1,
    operators: [
      new StoreOperator(),
    ],
  },

  n_143: {
    moves    : 4,
    goal     : 121,
    total    : 0,
    operators: [
      new AddOperator(1),
      new StoreOperator(),
    ],
  },

  n_144: {
    moves    : 4,
    goal     : 122,
    total    : 12,
    operators: [
      new StoreOperator(),
      new ReverseOperator(),
      new BackspaceOperator(),
    ],
  },

  n_145: {
    moves    : 5,
    goal     : 17,
    total    : 10,
    operators: [
      new AddOperator(2),
      new MultiplyOperator(1 / 3),
      new ReverseOperator(),
      new StoreOperator(),
    ],
  },

  n_146: {
    moves    : 4,
    goal     : 1234,
    total    : 23,
    operators: [
      new MultiplyOperator(2),
      new AddOperator(-5),
      new StoreOperator(),
      new ShiftOperator(),
    ],
  },

  n_147: {
    moves    : 6,
    goal     : 1025,
    total    : 125,
    operators: [
      new MultiplyOperator(2),
      new StoreOperator(),
      new BackspaceOperator(),
    ],
  },

  n_148: {
    moves    : 5,
    goal     : 115,
    total    : 23,
    operators: [
      new AddOperator(-8),
      new StoreOperator(),
      new FlipSignOperator(),
    ],
  },

  n_149: {
    moves    : 4,
    goal     : 16,
    total    : 15,
    operators: [
      new StoreOperator(),
      new ReplaceOperator(11, 33),
      new ReverseOperator(),
      new SumOperator(),
    ],
  },

  n_150: {
    moves    : 7,
    goal     : 61,
    total    : 0,
    operators: [
      new AddToEndOperator(5),
      new BackspaceOperator(),
      new SumOperator(),
      new StoreOperator(),
    ],
  },

  n_151: {
    moves    : 5,
    goal     : 101,
    total    : 0,
    operators: [
      new MultiplyOperator(6),
      new AddToEndOperator(5),
      new StoreOperator(),
      new UnShiftOperator(),
      new ReplaceOperator(3, 1),
    ],
  },

  n_152: {
    moves    : 5,
    goal     : 12525,
    total    : 125,
    operators: [
      new AddToEndOperator(1),
      new MultiplyOperator(1 / 5),
      new ReverseOperator(),
      new StoreOperator(),
    ],
  },

  n_153: {
    moves    : 6,
    goal     : 17,
    total    : 70,
    operators: [
      new ReplaceOperator(8, 1),
      new MultiplyOperator(1 / 2),
      new StoreOperator(),
      new AddToEndOperator(0),
      new SumOperator(),
    ],
  },

  n_154: {
    moves    : 4,
    goal     : 101,
    total    : 12,
    operators: [
      new ReplaceOperator(21, 0),
      new ReplaceOperator(12, 1),
      new StoreOperator(),
      new MirrorOperator(),
    ],
  },

  n_155: {
    moves    : 7,
    goal     : 3001,
    total    : 9,
    operators: [
      new ReplaceOperator(39, 93),
      new MultiplyOperator(1 / 3),
      new StoreOperator(),
      new ReplaceOperator(31, `00`),
    ],
  },

  n_156: {
    moves    : 3,
    goal     : 99,
    total    : 0,
    operators: [
      new AddToEndOperator(1),
      new InvertOperator(),
    ],
  },

  n_157: {
    moves    : 3,
    goal     : 2,
    total    : 1,
    operators: [
      new AddOperator(-1),
      new InvertOperator(),
    ],
  },

  n_158: {
    moves    : 3,
    goal     : 15,
    total    : 14,
    operators: [
      new AddOperator(5),
      new MultiplyOperator(5),
      new InvertOperator(),
    ],
  },

  n_159: {
    moves    : 3,
    goal     : 12,
    total    : 21,
    operators: [
      new AddOperator(-7),
      new MultiplyOperator(5),
      new InvertOperator(),
    ],
  },

  n_160: {
    moves    : 4,
    goal     : 13,
    total    : 67,
    operators: [
      new AddOperator(3),
      new ReverseOperator(),
      new InvertOperator(),
    ],
  },

  n_161: {
    moves    : 5,
    goal     : 88,
    total    : 23,
    operators: [
      new AddOperator(-4),
      new AddOperator(-2),
      new ReverseOperator(),
      new InvertOperator(),
    ],
  },

  n_162: {
    moves    : 4,
    goal     : 105,
    total    : 5,
    operators: [
      new MultiplyOperator(3),
      new MultiplyOperator(1 / 9),
      new StoreOperator(),
      new InvertOperator(),
    ],
  },

  n_163: {
    moves    : 4,
    goal     : 23,
    total    : 24,
    operators: [
      new AddOperator(6),
      new MultiplyOperator(3),
      new ReverseOperator(),
      new InvertOperator(),
    ],
  },

  n_164: {
    moves    : 4,
    goal     : 17,
    total    : 7,
    operators: [
      new AddOperator(3),
      new MultiplyOperator(3),
      new InvertOperator(),
      new MultiplyOperator(4),
    ],
  },

  n_165: {
    moves    : 5,
    goal     : 21,
    total    : 35,
    operators: [
      new MultiplyOperator(9),
      new MultiplyOperator(1 / 5),
      new ReplaceOperator(13, 10),
      new InvertOperator(),
    ],
  },

  n_166: {
    moves    : 5,
    goal     : 18,
    total    : 9,
    operators: [
      new MultiplyOperator(3),
      new SumOperator(),
      new InvertOperator(),
    ],
  },

  n_167: {
    moves    : 5,
    goal     : 101,
    total    : 12,
    operators: [
      new AddOperator(4),
      new InvertOperator(),
      new SumOperator(),
    ],
  },

  n_168: {
    moves    : 6,
    goal     : 99,
    total    : 26,
    operators: [
      new AddToEndOperator(2),
      new SumOperator(),
      new InvertOperator(),
    ],
  },

  n_169: {
    moves    : 7,
    goal     : 13,
    total    : 15,
    operators: [
      new SumOperator(),
      new InvertOperator(),
      new MirrorOperator(),
    ],
  },

  n_170: {
    moves    : 6,
    goal     : 99,
    total    : 78,
    operators: [
      new ReplaceOperator(1, 6),
      new ReplaceOperator(6, 11),
      new InvertOperator(),
      new MultiplyOperator(1 / 6),
      new ReverseOperator(),
    ],
  },

  n_171: {
    moves    : 4,
    goal     : 9,
    total    : 34,
    operators: [
      new MultiplyOperator(6),
      new InvertOperator(),
      new BackspaceOperator(),
    ],
  },

  n_172: {
    moves    : 8,
    goal     : 872,
    total    : 0,
    operators: [
      new AddToEndOperator(8),
      new ReplaceOperator(88, 34),
      new InvertOperator(),
      new BackspaceOperator(),
    ],
  },

  n_173: {
    moves    : 5,
    goal     : 33,
    total    : 5,
    operators: [
      new MultiplyOperator(7),
      new AddOperator(8),
      new InvertOperator(),
      new AddOperator(-9),
      new MultiplyOperator(2),
    ],
  },

  n_174: {
    moves    : 6,
    goal     : 23,
    total    : 12,
    operators: [
      new MultiplyOperator(5),
      new SumOperator(),
      new StoreOperator(),
      new InvertOperator(),
    ],
  },

  n_175: {
    moves    : 4,
    goal     : 1991,
    total    : 1,
    operators: [
      new StoreOperator(),
      new InvertOperator(),
    ],
  },

  n_176: {
    moves    : 4,
    goal     : 26,
    total    : 12,
    operators: [
      new BackspaceOperator(),
      new SumOperator(),
      new StoreOperator(),
      new InvertOperator(),
    ],
  },

  n_177: {
    moves    : 6,
    goal     : 48,
    total    : 51,
    operators: [
      new AddOperator(6),
      new MultiplyOperator(3),
      new ReverseOperator(),
      new InvertOperator(),
      new ReplaceOperator(4, 6),
    ],
  },

  n_178: {
    moves    : 6,
    goal     : 1,
    total    : 0,
    operators: [
      new AddOperator(5),
      new MultiplyOperator(3),
      new InvertOperator(),
      new MultiplyOperator(1 / 6),
      new ReverseOperator(),
    ],
  },

  n_179: {
    moves    : 5,
    goal     : 777,
    total    : 369,
    operators: [
      new ReplaceOperator(93, 63),
      new ReplaceOperator(63, 33),
      new ReplaceOperator(36, 93),
      new InvertOperator(),
      new ReplaceOperator(39, 33),
    ],
  },

  n_180: {
    moves    : 3,
    goal     : 10,
    total    : 99,
    operators: [
      new AddToEndOperator(1),
      new AddOperator(-1),
    ],

    portal: new Portal(-3, -1),
  },

  n_181: {
    moves    : 2,
    goal     : 64,
    total    : 9,
    operators: [
      new AddToEndOperator(4),
      new AddToEndOperator(6),
    ],

    portal: new Portal(-3, -2),
  },

  n_182: {
    moves    : 3,
    goal     : 35,
    total    : 50,
    operators: [
      new AddOperator(5),
      new MultiplyOperator(3),
      new MultiplyOperator(5),
    ],

    portal: new Portal(-3, -2),
  },

  n_183: {
    moves    : 4,
    goal     : 131,
    total    : 306,
    operators: [
      new AddToEndOperator(3),
      new AddOperator(1),
      new MultiplyOperator(2),
    ],

    portal: new Portal(-4, -1),
  },

  n_184: {
    moves    : 5,
    goal     : 123,
    total    : 321,
    operators: [
      new MultiplyOperator(1 / 2),
      new AddToEndOperator(1),
      new AddToEndOperator(3),
      new AddToEndOperator(0),
    ],

    portal: new Portal(-4, -1),
  },

  n_185: {
    moves    : 5,
    goal     : 150,
    total    : 525,
    operators: [
      new AddOperator(1),
      new AddToEndOperator(6),
      new MultiplyOperator(1 / 2),
      new AddToEndOperator(7),
    ],

    portal: new Portal(-4, -1),
  },

  n_186: {
    moves    : 5,
    goal     : 212,
    total    : 301,
    operators: [
      new AddToEndOperator(10),
      new AddOperator(-2),
      new AddToEndOperator(3),
    ],

    portal: new Portal(-4, -1),
  },

  n_187: {
    moves    : 4,
    goal     : 13,
    total    : 99,
    operators: [
      new SumOperator(),
      new MirrorOperator(),
      new InvertOperator(),
    ],

    portal: new Portal(-4, -2),
  },

  n_188: {
    moves    : 5,
    goal     : 822,
    total    : 25,
    operators: [
      new MirrorOperator(),
      new AddToEndOperator(5),
      new StoreOperator(),
      new BackspaceOperator(),
    ],

    portal: new Portal(-4, -2),
  },

  n_189: {
    moves    : 4,
    goal     : 516,
    total    : 45,
    operators: [
      new AddOperator(10),
      new MirrorOperator(),
      new ReverseOperator(),
    ],

    portal: new Portal(-4, -2),
  },

  n_190: {
    moves    : 4,
    goal     : 212,
    total    : 238,
    operators: [
      new ReplaceOperator(28, 21),
      new AddOperator(-5),
      new InvertOperator(),
      new UnShiftOperator(),
    ],
  },

  n_191: {
    moves    : 5,
    goal     : 90,
    total    : 58,
    operators: [
      new MultiplyOperator(6),
      new InvertOperator(),
      new UnShiftOperator(),
    ],
  },

  n_192: {
    moves    : 6,
    goal     : 500,
    total    : 189,
    operators: [
      new AddOperator(8),
      new MultiplyOperator(4),
      new InvertOperator(),
      new AddToEndOperator(9),
      new ReplaceOperator(7, 0),
    ],

    portal: new Portal(-4, -1),
  },

  n_193: {
    moves    : 4,
    goal     : 321,
    total    : 234,
    operators: [
      new AddToEndOperator(9),
      new AddOperator(9),
      new ReplaceOperator(53, 32),
    ],

    portal: new Portal(-4, -1),
  },

  n_194: {
    moves    : 4,
    goal     : 123,
    total    : 333,
    operators: [
      new AddToEndOperator(1),
      new AddToEndOperator(3),
      new AddToButtonsOperator(1),
      new MultiplyOperator(1 / 2),
    ],

    portal: new Portal(-4, -1),
  },

  n_195: {
    moves    : 5,
    goal     : 777,
    total    : 613,
    operators: [
      new AddToEndOperator(5),
      new MultiplyOperator(2),
      new ReverseOperator(),
      new AddOperator(3),
      new InvertOperator(),
    ],

    portal: new Portal(-4, -1),
  },

  n_196: {
    moves    : 7,
    goal     : 550,
    total    : 60,
    operators: [
      new AddOperator(5),
      new MultiplyOperator(5),
      new InvertOperator(),
      new AddToEndOperator(2),
    ],

    portal: new Portal(-4, -2),
  },

  n_197: {
    moves    : 5,
    goal     : 4321,
    total    : 1234,
    operators: [
      new ReplaceOperator(24, 13),
      new ReplaceOperator(12, 32),
      new ReplaceOperator(23, 32),
      new ReplaceOperator(13, 21),
      new ReplaceOperator(23, 43),
    ],
  },

  n_198: {
    moves    : 7,
    goal     : 750,
    total    : 4,
    operators: [
      new AddOperator(6),
      new AddToEndOperator(4),
      new InvertOperator(),
      new MultiplyOperator(3),
    ],
  },

  n_199: {
    moves    : 6,
    goal     : 3507,
    total    : 3002,
    operators: [
      new AddToEndOperator(7),
      new ReplaceOperator(3, 5),
      new InvertOperator(),
      new UnShiftOperator(),
    ],

    portal: new Portal(-5, -1),
  },
};
