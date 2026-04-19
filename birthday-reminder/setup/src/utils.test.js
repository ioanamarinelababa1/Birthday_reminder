import { calculateDaysUntil } from './utils';

test('calculates correct days until birthday', () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  
  const dateString = tomorrow.toISOString().split('T')[0];
  expect(calculateDaysUntil(dateString)).toBe(1);
});

test('returns 0 or 365 for today', () => {
  const today = new Date().toISOString().split('T')[0];
  const result = calculateDaysUntil(today);
  expect(result === 0 || result === 365).toBeTruthy();
});