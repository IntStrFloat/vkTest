import { ComponentProps } from 'react';

export const Input = ({ ...props }: ComponentProps<'input'>) => (
  <input type="text" {...props} className="border-2 rounded-md focus:outline-none" />
);
