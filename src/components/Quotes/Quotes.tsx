import React, { useState } from 'react';
import PopupWithError from '../PopupWithError/PopupWithError';
import { Tabs, TabPanel } from 'react-tabs';
import { QuotesSection, TabsSection, STabList, STab } from './Quotes.styles';
import QuotesRenderer from '../QuotesRenderer/QuotesRenderer';

function Quotes() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupErrorOpen, setIsPopupErrorOpen] = useState(false);
  const [errorText, setErrorText] = useState('');

  function handleClosePopupError() {
    setIsPopupErrorOpen(false);
  }

  const regexUSDT = /^USDT/;
  const regexBTC = /^BTC/;

  return (
    <>
      {isPopupErrorOpen && <PopupWithError error={errorText} onClose={handleClosePopupError} />}
      <QuotesSection>
        <Tabs>
          <STabList>
            <STab>BTC</STab>
            <STab>USDT</STab>
          </STabList>
          <TabsSection>
            <TabPanel>
              <QuotesRenderer
                setErrorText={setErrorText}
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
                setIsPopupErrorOpen={setIsPopupErrorOpen}
                regex={regexBTC}
                title={'Курс BTC'}
              />
            </TabPanel>
            <TabPanel>
              <QuotesRenderer
                setErrorText={setErrorText}
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
                setIsPopupErrorOpen={setIsPopupErrorOpen}
                regex={regexUSDT}
                title={'Курс USDT'}
              />
            </TabPanel>
          </TabsSection>
        </Tabs>
      </QuotesSection>
    </>
  );
}

export default Quotes;
