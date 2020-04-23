import React from 'react';
import faker from 'faker';
import withStyles, { WithStylesProps } from 'react-jss';
import UserBusiness from 'components/UserBusiness';

const styles = {
  profile: {
    minWidth: 400,
    marginBottom: '40px!important',
  },
};

interface UserProfileProps extends WithStylesProps<typeof styles> {}

const UserProfile: React.FunctionComponent<UserProfileProps> = ({
  classes,
}) => {
  return (
    <div className={`ui card centered ${classes.profile}`}>
      <div className='content header'>
        <img
          className='ui avatar image bordered floated right'
          src={faker.image.avatar()}
          alt='avatar'
        />
        <strong>
          <span className='firstName'>{faker.name.firstName()}&nbsp;</span>
          <span className='lastName'>{faker.name.lastName()}</span>
        </strong>
        <div className='meta'>
          <span className='date jobTitle'>{faker.name.jobTitle()}</span>
        </div>
      </div>

      <div className='content'>
        <h4 className='ui sub header'>Business information</h4>
        <UserBusiness />
      </div>
      <div className='extra content'>
        <i className='phone icon'></i>
        <span className='phoneNumber'> {faker.phone.phoneNumber()}</span>
      </div>
    </div>
  );
};

export default withStyles(styles)(UserProfile);
