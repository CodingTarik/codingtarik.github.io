import React from 'react';
import SkillPath from '../../../shared/components/SkillPath';
import { cookCurriculum } from '../data/curriculum';

const CookSkillPath = () => {
  return (
    <SkillPath 
      title={cookCurriculum.title}
      description={cookCurriculum.description}
      phases={cookCurriculum.phases}
      buddyTheme="amber"
      buddyId="cook"
    />
  );
};

export default CookSkillPath;

