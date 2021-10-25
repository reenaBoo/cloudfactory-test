import React, { useState } from 'react';
import TabB from './TabB';
import TabA from './TabA';
import PopupWithError from '../PopupWithError/PopupWithError';
import { Tabs, TabPanel } from 'react-tabs';
import { QuotesSection, TabsSection, STabList, STab } from './Quotes.styles';

function Quotes() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupErrorOpen, setIsPopupErrorOpen] = useState(false);
  const [errorText, setErrorText] = useState(null);

  function handleClosePopupError() {
    setIsPopupErrorOpen(false);
  }

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
              <TabA errorText={errorText} setErrorText={setErrorText} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} isPopupErrorOpen={isPopupErrorOpen} setIsPopupErrorOpen={setIsPopupErrorOpen} />
            </TabPanel>
            <TabPanel>
              <TabB errorText={errorText} setErrorText={setErrorText} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} isPopupErrorOpen={isPopupErrorOpen} setIsPopupErrorOpen={setIsPopupErrorOpen} />
            </TabPanel>
          </TabsSection>
        </Tabs>
      </QuotesSection>
    </>
  )
}

export default Quotes;
