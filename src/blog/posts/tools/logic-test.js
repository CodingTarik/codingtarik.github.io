import React from 'react';
import LogicTest from '../../../tools/logic-test/LogicTest';
import LogicTestInfo from '../../../tools/logic-test/components/LogicTestInfo';

export default {
  title: 'IT Logic & Assessment Trainer',
  description: 'A realistic simulation of modern IT assessment center tests (AON/Cut-e style). Train Deductive Logic (Switch), Working Memory (Grid), and Situational Judgement (ChatAssess) in a gamified environment.',
  date: '2024-05-23',
  type: 'tool',
  id: 'logic-assessment-trainer',
  tags: ['Career', 'Assessment', 'Logic', 'Brain Training', 'Gamification'],
  component: LogicTest,
  content: React.createElement(LogicTestInfo)
};

