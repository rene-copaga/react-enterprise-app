import React, { useEffect } from 'react'
import { getSalesAxios } from 'services/saleService';

const DashboardDefaultContent = () => {

  useEffect(() => {
  //code to run after render goes here

    getSalesAxios();
  }, []); //&#x00DF; empty array means to ‘run once’

  return (
    <div>
      <h1>Dashboard Default Content</h1>
    </div>
  );
};

export default DashboardDefaultContent;
