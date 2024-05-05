import * as runtime from "react/jsx-runtime";

// This is code has eslint errors, but it is from docs,
// so I'll wait for them to fix this.
/* eslint-disable */

const sharedComponents = {
  // Add your global components here
};

// parse the Velite generated MDX code into a React component function
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

// MDXContent component
export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
};
