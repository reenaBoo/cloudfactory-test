import { useEffect, useState } from 'react';
import { api } from '../../utils/Api';
import Table from '../Table/Table';
import { Loader, Title } from '../Quotes/Quotes.styles';
import PopupWithInfo from '../PopupWithInfo/PopupWithInfo';
import { IQuotesRenderer } from './IQuotesRenderer';
import Search from '../Search/Search';

function QuotesRenderer({
  isPopupOpen,
  setIsPopupOpen,
  setIsPopupErrorOpen,
  setErrorText,
  regex,
  title,
}: IQuotesRenderer) {
  const [prices, setPrices] = useState<any>({});
  const [info, setInfo] = useState({});
  const [tabData, setTabData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

  function apiMethodOne() {
    api
      .getData()
      .then((res) => {
        setPrices(res);
        setIsLoading(false);
        setIsPopupErrorOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorText('Произошла ошибка при загрузке данных');
        setIsPopupErrorOpen(true);
      });
  }

  useEffect(() => {
    const names = Object.keys(prices);
    const tabData = [] as any;
    names.forEach((name) => {
      if (regex.test(name)) {
        tabData.push(name);
      }
    });
    setTabData(tabData);
  }, [prices]);

  useEffect(() => {
      apiMethodOne();
  }, []);

  useEffect(() => {
    if (isSearch) return;
    if (tabData.length === 1 && !isSearch) apiMethodOne();
    const interval = setInterval(function () {
      if (!isPopupOpen) {
        apiMethodOne();
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [isPopupOpen, tabData, isSearch]);

  const renderPercentChange = (name: string) => {
    let price = Number((((prices[name].last - prices[name].high24hr) / prices[name].last) * 100).toFixed(2));
    if (price > 0) {
      return `+${price}%`;
    }
    if (price < 0) {
      return `${price}%`;
    }
    return 'Без изменений';
  };

  const handleRowClick = (name: string) => () => {
    setIsPopupOpen(true);
    const data = {
      name,
      last: prices[name].last,
      high24hr: prices[name].high24hr,
      percentChange: renderPercentChange(name),
    };
    setInfo(data);
  };

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
      {isPopupOpen && <PopupWithInfo info={info} onClose={handleClosePopup} />}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title>{title}</Title>
          <Search tabData={tabData} setTabData={setTabData} setIsSearch={setIsSearch} isSearch={isSearch} />
          <Table prices={prices} dataNames={tabData} onRowClick={handleRowClick} />
        </>
      )}
    </>
  );
}

export default QuotesRenderer;
