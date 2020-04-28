import * as React from 'react';
import { ModalContentProps } from 'interfaces';

const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  onDismiss,
  children,
}): JSX.Element => {
  return (
    <div
      onClick={onDismiss}
      className='ui dimmer modals visible active  dismiss-click-out'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active large'
      >
        <div className='ui header purple'>
          <i className='icon credit card outline'></i> Account flow
        </div>
        <div className='content'>{children}</div>
        <div className='actions'>
          <button
            className='ui right labeled icon button dismiss-button'
            onClick={onDismiss}
          >
            <i className='close icon'></i>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
