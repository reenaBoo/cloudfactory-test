import { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { api } from '../utils/Api';
import Table from './Table';
import PopupWithInfo from './PopupWithInfo/PopupWithInfo';

function Quotes() {
  const [prices, setPrices] = useState({});

  function apiMethod() {
    api
      .getData()
      .then((res) => {
        setPrices(res);
      })
      .catch((rej) => console.log(rej));
  }

  useEffect(() => {
    apiMethod();

    const intervalId = setInterval(apiMethod, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const [dataNames, setDataNames] = useState([]);

  useEffect(() => {
    const names = Object.keys(prices);
    setDataNames(names);
  }, [prices]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [info, setInfo] = useState({});

  const handleRowClick = (name) => (evt) => {
    setIsPopupOpen(true);
    const data = {
      name,
      last: prices[name].last,
      highestBid: prices[name].highestBid,
      percentChange: prices[name].percentChange
    }
    setInfo(data);
  }



  return (
    <>
      {isPopupOpen && <PopupWithInfo info={info} />}
      <Table prices={prices} dataNames={dataNames} onRowClick={handleRowClick} />
    </>
  )
}

export default Quotes;
