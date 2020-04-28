import * as React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'react-apexcharts';

//Components
import Loader from 'components/helpers/Loader';
import Error from 'components/helpers/Error';
import ModalContent from 'components/chart/ModalContent';

//Functions & API
import useFetch from 'hooks/useFetch';
import mansaAPI from 'api/mansa';

//Data & Structure
import { chartOptions } from 'components/chart/chartOptions';
import 'components/chart/fadeIn.css';
import * as consts from 'consts';
import { ModalProps } from 'interfaces';

const Modal: React.FunctionComponent<ModalProps> = ({
  onDismiss,
  currentAccount,
  openModal,
}): React.ReactPortal | JSX.Element => {
  const { fetchedData, error, fetching } = useFetch(
    mansaAPI,
    `/${consts.accountsURL}/${currentAccount}/transactions?from=${consts.startDateChart}&to=${consts.endDateChart}`,
    currentAccount
  );

  // Preparing the data for the chart
  const chartData: [string, string][] = fetchedData?.data.map((item) => {
    return [item.timestamp, item.amount];
  });

  if (fetching) {
    return <Loader fullScreen />;
  }

  let content: JSX.Element = <div></div>;
  if (error) {
    content = <Error>{error}</Error>;
  }

  // Generating the chart content
  const inChartData = chartData ? chartData : [];
  if (!error) {
    content = (
      <Chart
        options={chartOptions}
        series={[{ data: inChartData, name: 'Chart Account' }]}
        width='100%'
        height='400px'
        type='line'
      />
    );
  }

  // Generatign a modal box
  return !consts.modalNode || !openModal
    ? null
    : ReactDOM.createPortal(
        <ModalContent onDismiss={onDismiss}>{content}</ModalContent>,
        consts.modalNode
      );
};

export default Modal;
