export type NormalizeCoords = (value: number, size?: number, shift?: number) => number;

export const normalizeCoords: NormalizeCoords = (value, size = 1, shift = 0.5) => (value + 0.5) * size + shift;
