import clsx from 'clsx';

interface IProps {
  children: React.ReactNode;
  className: string;
}

// TODO: Add CVA variants later on
const Button = ({ children, className }: IProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-semibold hover:bg-emerald-600/75',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
