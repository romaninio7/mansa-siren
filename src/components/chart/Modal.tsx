import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import mansaAPI from 'api/mansa';
import { chartOptions } from 'components/chart/chartOptions';
import ReactDOM from 'react-dom';
import 'components/chart/fadeIn.css';

interface ModalProps {
  openModal: boolean;
  onDismiss: () => void;
  currentAccount: string;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  onDismiss,
  currentAccount,
  openModal,
}) => {
  const maxDataYear = 3;
  console.log('currentAccount1', currentAccount);
  //State to stock a fetched data
  const [chartData, setChartData] = useState<[string, string][]>([]);

  // State to hadle a fetching
  const [fetching, setFetching] = useState<boolean>(true);
  //const [smoozy, setSmoozy] = useState<boolean>(false);
  //State to handle an error
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (currentAccount !== '') {

// Preparing the data fetching
      setFetching(true);

      (async function getBusinessData() {
        try {
          let startDate, endDate: string;
          let currentFetchedData: [string, string][];
          let fetchedData: [string, string][] = [];
          let response;
          let iteration: number = 1;

          // Searching for all date since at most maxDataYear years
          while (iteration <= maxDataYear) {

            // Setting up the request parametres
            startDate = getCurrentDayWithOffset(iteration, 1);
            endDate = getCurrentDayWithOffset(iteration - 1, 0);

            // Doing request
            response = await mansaAPI.get(
              `/accounts/${currentAccount}/transactions?from=${startDate}&to=${endDate}`
            );

            // Forming an appropriate data
            currentFetchedData = response.data.map((item) => {
              return [item.timestamp, item.amount];
            });

            // Stopping the cycle if there is no longer a data
            if (currentFetchedData.length === 0) {
              break;
            }

            // Accumulating all the fetched data
            fetchedData = [...fetchedData, ...currentFetchedData];
            iteration++;
          }

          // Stopping fetching
          setFetching(false);

          //Saving the fetched data for the chart
          setChartData(fetchedData);

        } catch (e) {
          setError(e.toString());
        }
      })();
    }
  }, [currentAccount]); // memoizing according to currentAccount prop

 

  
  // If user didn't chose an account
  if (currentAccount === '') {
    return null;
  }

  // Loading while fetching the data
  if (fetching) {
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

  let content;

  // Shows up an error if exists
  if (error) {
    content = <div className='ui header red'>{error}</div>;
  }

  // Preparing the data for the chart
  const series = [
    {
      data: chartData,
    },
  ];

  // Generating the chart content
  if (!fetching && !error && chartData.length > 0) {
    content = (
      <Chart
        options={chartOptions}
        series={series}
        width='100%'
        height='400px'
        type='line'
      />
    );
  }


// Generatign a modal box
  return ReactDOM.createPortal(
    <div
      onClick={onDismiss}
      className='ui dimmer modals visible active'
      style={{ display: openModal ? 'flex' : 'none' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active large'
      >
        <div className='ui header purple'>
          <i className='icon credit card outline'></i> Account flow
        </div>
        <div className='content'>{content}</div>
        <div className='actions'>
          <button
            className='ui right labeled icon button'
            onClick={onDismiss}
          >
            <i className='close icon'></i>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

// Helping function to set uo start and end dates for the request
function getCurrentDayWithOffset(
  yearOffset: number,
  dayOffset: number
): string {
  const today: Date = new Date();
  let dd: number | string = today.getDate() + dayOffset;
  let mm: number | string = today.getMonth() + 1;
  let yyyy: number = today.getFullYear() - yearOffset;
  dd = dd < 10 ? '0' + dd : dd;
  mm = mm < 10 ? '0' + mm : mm;
  return yyyy + '-' + mm + '-' + dd;
}

export default Modal;
