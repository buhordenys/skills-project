import type { ITitle } from './interfaces/ITitle';

function Title({ children }: ITitle) {
  return (
    <h1 className="m-0 pb-5 text-5xl text-center font-bold">
      {children}
    </h1>
  );
}

export default Title;
