import type { IButton } from './interfaces/IButton';

function Button({
  type, children, disabled, onClick, ariaLabel, className,
}: IButton) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`flex items-center content-center outline-none
        ${disabled ? 'cursor-default' : 'cursor-pointer'}
        text-sm relative font-sans ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
