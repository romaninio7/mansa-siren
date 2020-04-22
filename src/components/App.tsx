import * as React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import UserProfile from 'components/UserProfile';
import UserFinance from 'components/UserFinance';

// App styles
const styles = {
  wrapper: {
    minHeight: '100vh',
    paddingBottom: 40,
    paddingTop: 40,
    background:
      'rgb(204,43,94) linear-gradient(162deg, rgba(204,43,94,1) 0%, rgba(117,58,136,1) 69%)',
  },
};

interface AppProps extends WithStylesProps<typeof styles> {}

const App: React.FunctionComponent<AppProps> = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <UserProfile />
      <UserFinance />
    </div>
  );
};

export default withStyles(styles)(App);
