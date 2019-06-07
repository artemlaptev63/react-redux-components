import * as React from 'react';
import './Button.scss';
import { Loader } from '../loader/Loader';

interface Props {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  htmlType?: 'submit' | 'button';
  loading?: boolean;
}

export const Button: React.FC<Props> = ({ className, onClick, children, disabled, htmlType, loading }: Props) => {
  return (
    <button 
      type={htmlType ? htmlType : 'button'}
      className={`button ${className}`}
      disabled={disabled || loading}
      onClick={onClick}>
      {
        loading ? <Loader className="button-loader" disabled={true}></Loader> : children
      }
    </button>
  )
}