type formType = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const Form = ({ children }: formType) => {
  return <div>{children}</div>;
};

export default Form;
