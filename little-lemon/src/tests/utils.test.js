import { initializeTimes, updateTimes } from '../utils';

test('initializeTimes should return an array of 5 time slots', () => {
  const times = initializeTimes();
  expect(times).toHaveLength(5);
  expect(times).toContain('17:00');
});

test('updateTimes should return the same array passed in', () => {
  const currentState = ['17:00', '18:00'];
  const updated = updateTimes(currentState, { type: 'date-change' });
  expect(updated).toEqual(currentState);
});
