import React from 'react';
import SkillPath from '../../../shared/components/SkillPath';
import { boulderCurriculum } from '../data/curriculum';

const BoulderSkillPath = () => {
  return (
    <SkillPath 
      title={boulderCurriculum.title}
      description={boulderCurriculum.description}
      phases={boulderCurriculum.phases}
      buddyTheme="teal"
    />
  );
};

export default BoulderSkillPath;

