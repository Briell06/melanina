interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return <main className="container mx-auto">{children}</main>;
};

export default Main;
