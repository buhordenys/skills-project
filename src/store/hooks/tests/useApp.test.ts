import { useAppDispatch, useAppSelector } from '../useApp';

describe('useApp', () => {
  test('useAppDispatch is defined', () => {
    expect(useAppDispatch).toBeDefined();
  });
  test('useAppSelector is defined', () => {
    expect(useAppSelector).toBeDefined();
  });
});
