import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
         Welcome To <br />
         My PortFolio <br/>
         Imran, An Web Developer...
      </SectionTitle>
      <SectionText>
      Hello Iam Imran! As a web developer, I have knowledge of various web development technologies, including ReactJS and NextJS.
      With the knowledge of web development and ReactJS/NextJS, I can create dynamic and responsive web applications that are optimized for performance and user experience.
      This makes it easier to maintain and update the application over time.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;