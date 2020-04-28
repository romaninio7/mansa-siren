import * as React from 'react';
import { IUserBusinessItem } from 'interfaces';

const UserBusinessItem = ({
  businessValue,
  businessData,
}: IUserBusinessItem): JSX.Element => {
  return (
    <div className='item'>
      <div className={`ui label large ${businessData[0]}`}>
        <i className={`id icon ${businessData[1]}`}></i>
        <span className='business-name'>{businessData[2]}: </span>
      </div>
      <span className={businessData[3]}>{businessValue}</span>
    </div>
  );
};

export default UserBusinessItem;
