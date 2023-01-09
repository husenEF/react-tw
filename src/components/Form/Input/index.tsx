import { FC, InputHTMLAttributes, ReactNode } from 'react';
import classNames from '../../../utils/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  [k: string]: any;
}

const Input: FC<InputProps> = ({
  type = 'text',
  name = 'input-name',
  ...rest
}) => {
  return (
    <input
      name="name"
      type={type}
      className={classNames(
        'form-control block w-full px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
      )}
      {...rest}
    />
  );
};

export default Input;
