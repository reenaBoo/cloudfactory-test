import React from 'react';
import { Root, Title, Text, AboutPic } from './About.styles';
import AboutImg from "../../images/aboutPic.jpg"

function About() {
  return (
    <Root>
    <Title>
      PriceMonitoring
    </Title>
      <Text> Прожжённый трейдер с Уолл-Стрит, выпрыгнувший из окна 75-го этажа, после удара о землю
        подпрыгнул на 10 метров, чем
        немного отыграл свое утреннее падение.
      </Text>
      <AboutPic src={AboutImg} alt="Трейдинг"/>
    </Root>
  )
}

export default About;
