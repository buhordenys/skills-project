import { testIdNavigate } from '../src/constants/TestId';

const mockNavigate = jest.fn();
jest.doMock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <div data-testid={testIdNavigate} />,
  useNavigate: () => mockNavigate,
}));

export default mockNavigate;
