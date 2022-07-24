import React from 'react';

import Section from '../section';
import SummaryExperience from '../summary-experience';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryExperience
          company={item.company}
          position={item.position}
          time={item.time}
          location={item.location}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
