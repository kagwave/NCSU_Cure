import { useSelector } from 'react-redux';
import './Account.css'
import React, { useEffect } from 'react';
import { RootState } from '../../../redux/store';

import { capitalize } from '../../../tools/capitalize';

import UserIcon from '../../misc/UserIcon';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../media/loaders/*';

const Account = () => {

  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (

    <div id='page-content'>
      {user ?
        <div className='account-pg'>
          <div className='account-pg-sidebar'>
            <div>
              General
            </div>
            <div>
              Notifications
            </div>
            <div>
              Add a Course
            </div>
          </div>
          <div className='account-pg-main'>
            <div className='account-pg-header'>
              <div className='account-pg-header-name'>
                <h1>{user.display_name}</h1> <h3>{user.unity_id ? user.unity_id : user.collaborator_id}</h3>
              </div>
              <h2>
                <UserIcon type={user.account_type}/>
                {capitalize(user.account_type)}</h2>
            </div>
            <div className='account-items'>
              <div className='account-item'>
                <h1>Courses</h1>
                <h2>{!user.courses && "Not Currently Enrolled"}</h2>
              </div>
              <div className='account-item'>
                <h1> Contact</h1>
                <h2 style={{color: "#CC0000"}}> {user.email} </h2>
              </div>
            </div>
          </div>
        </div>
      :
        <Loader type="basic"/>
      }
    </div>
  )
}

export default Account;