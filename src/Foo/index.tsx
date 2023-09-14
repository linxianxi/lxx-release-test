import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => {
  console.log('first');
  return <h4>{props.title}</h4>;
};

export default Foo;
