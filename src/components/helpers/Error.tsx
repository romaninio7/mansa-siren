import * as React from 'react';

const Error = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <div className='ui header red centered'>{children}</div>;
};

export default Error;
