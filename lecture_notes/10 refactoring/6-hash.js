'use strict';

const shift = (offset) => (dot) => {
  dot.x += offset.x;
  dot.y += offset.y;
  return dot;
};

const parsers = { string: JSON.parse, object: (x) => x };

const conditionalParse = (item) => {
  const parser = parsers[typeof item];
  return parser(item);
};

const polyline = [
  { x: 0, y: 0 },
  { x: 10, y: 10 },
  '{ "x": 20, "y": 20 }',
  { x: 30, y: 30 },
];

const move = shift({ x: 10, y: -5 });
const parsed = polyline.map(conditionalParse);
const path = parsed.map(move);
console.log({ path });
