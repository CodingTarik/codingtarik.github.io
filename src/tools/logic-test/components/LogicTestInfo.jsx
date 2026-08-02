import React from 'react';

export default function LogicTestInfo() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h3>About this Tool</h3>
      <p>
        Modern IT recruitment processes often involve automated online assessments to filter candidates before the first interview. 
        These tests, often provided by companies like AON (Cut-e), SHL, or Korn Ferry, measure cognitive abilities rather than just coding skills.
      </p>
      
      <h3>Included Modules</h3>
      <ul>
        <li><strong>Switch Challenge (sx):</strong> Measures deductive logical reasoning. You must deduce the rule change in a sequence of symbols.</li>
        <li><strong>Grid Challenge:</strong> Measures working memory. Memorize a pattern of dots and recall it after a short distraction task (symmetry check).</li>
        <li><strong>ChatAssess (SJT):</strong> Measures situational judgement. You enter a simulated work chat and must choose the most professional response to critical situations.</li>
      </ul>

      <h3>How scoring works</h3>
      <p>
        Just like real assessments, speed and accuracy both count. The final score is calculated based on correct answers per minute (Efficiency).
      </p>
    </div>
  );
}

