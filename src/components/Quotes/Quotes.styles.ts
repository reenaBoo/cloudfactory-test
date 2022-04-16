import styled from "styled-components";
import loader from "../../assets/images/loader.svg"
import { Tab, TabList } from 'react-tabs';

export const QuotesSection = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 25px auto 30px;
  align-items: center;
`;

export const TabsSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px auto 30px;
  align-items: center;
`;

export const Loader = styled.div`
  background-image: url(${loader});
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 200px;
  margin: 30px auto;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 30px auto;
`;

export const STabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
justify-content: center;
margin: 0 auto;
font-size: 16px;
`;

export const STab = styled(Tab)`
margin-right: 15px;
border: 2px solid #4874c7;
padding: 4px;
font-size: 16px;
user-select: none;
text-align: center;
width: 100px;
&:last-of-type{
  margin-right: 0;
}
&:hover{
  background-color: white;
  cursor: pointer;
}
`;
