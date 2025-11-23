import React from 'react';
import SkillPath from '../../../shared/components/SkillPath';
import { gymCurriculum } from '../data/curriculum';

const GymSkillPath = () => {
  return (
    <SkillPath 
      title={gymCurriculum.title}
      description={gymCurriculum.description}
      phases={gymCurriculum.phases}
      buddyTheme="rose"
      buddyId="gym"
    />
  );
};

export default GymSkillPath;

