import React from 'react';
import SkillPath from '../../../shared/components/SkillPath';
import { runCurriculum } from '../data/curriculum';

const RunSkillPath = () => {
  return (
    <SkillPath 
      title={runCurriculum.title}
      description={runCurriculum.description}
      phases={runCurriculum.phases}
      buddyTheme="emerald"
      buddyId="run"
    />
  );
};

export default RunSkillPath;

