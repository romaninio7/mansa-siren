import * as React from 'react';

const Loader = ({
  linesNumber = 3,
  round = false,
  fullScreen = false,
}: {
  linesNumber?: number;
  round?: boolean;
  fullScreen?: boolean;
}): JSX.Element => {
  const lines = new Array<JSX.Element | null>(linesNumber - 2);
  lines.fill(null);
  const renderPlaceholder = lines.map((item, index) => {
    return <div key={index + 2} className='line'></div>;
  });
  if (round) {
    return <div className='ui active centered inline loader big'></div>;
  }
  if (fullScreen) {
    return (
      <div className='ui content'>
        <div className='ui active dimmer'>
          <div className='ui indeterminate text loader'>Preparing data</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    );
  }
  return (
    <div className='ui placeholder'>
      <div className='image header'>
        <div key={0} className='line'></div>
        <div key={1} className='line'></div>
      </div>
      <div className='paragraph'>{renderPlaceholder}</div>
    </div>
  );
};

export default Loader;
