import type { ITitle } from './interfaces/ITitle';

function Title({ children, customStyles, customTextSize = 'text-5xl' }: ITitle) {
  return (
    <h1 className={`m-0 pb-5 text-center font-bold ${customTextSize} ${customStyles}`}>
      {children}
    </h1>
  );
}

export default Title;
