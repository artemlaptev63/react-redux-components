import * as React from 'react';
import './Loader.scss';

interface Props {
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Loader: React.FC<Props> = ({ disabled, className, children }: Props) => {
  return (
    <div className={`loader ${className ? className : ''} ${disabled ? 'loader_disabled' : ''}`}>
      {
        children ? <div className='loader__text'>{children}</div> : null
      }
    </div>
  )
}