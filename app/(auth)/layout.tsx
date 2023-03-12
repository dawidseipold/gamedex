interface IProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
  return <div>{children}</div>;
};

export default AuthLayout;
