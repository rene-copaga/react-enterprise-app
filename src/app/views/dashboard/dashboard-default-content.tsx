import { SaleType } from 'models/sale-type';
import React, { useEffect, useState } from 'react'
import { getSalesAxios } from 'services/saleService';

const DashboardDefaultContent = () => {
  const [sales, setSales] = useState<SaleType[]>([]);

  const fetchSales = async () => {
    const { data } = await getSalesAxios();
    console.log(data); // ← to check in the console if we are successfully getting the data
    setSales(data);
  }

  useEffect(() => {
  //code to run after render goes here

    fetchSales();
  }, []); //&#x00DF; empty array means to ‘run once’

  return (
    <div>
      <h1>Dashboard Default Content</h1>
      <h2>{sales.length}</h2>
    </div>
  );
};

export default DashboardDefaultContent;
