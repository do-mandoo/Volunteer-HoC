import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import React, { useContext } from 'react';
import { Auth, Post } from '../../contexts/store';
import Write from '../../components/post/Write';

const WritePageForm = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  return <Write {...AuthState} />;
};

export default WritePageForm;
