interface ContainerProps {
  children: any;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="lg:px-10 overflow-hidden">{children}</div>;
};

export default Container;
