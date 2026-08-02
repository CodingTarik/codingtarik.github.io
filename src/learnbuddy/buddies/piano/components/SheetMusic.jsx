import React, { useEffect, useRef } from 'react';
import Vex from 'vexflow';

const SheetMusic = ({ 
  notes = "C4/w", 
  clef = 'treble', 
  timeSignature = '4/4', 
  width = 500, 
  height = 150 
}) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear previous
    containerRef.current.innerHTML = '';

    try {
      const { Factory } = Vex.Flow;
      
      const vf = new Factory({
        renderer: { 
          elementId: containerRef.current, 
          width: width, 
          height: height 
        }
      });

      const score = vf.EasyScore();
      const system = vf.System();

      // Parse notes
      // If notes is an array of strings like ["C4/q", "D4/q"], join them
      const noteInput = Array.isArray(notes) ? notes.join(', ') : notes;

      system.addStave({
        voices: [
          score.voice(score.notes(noteInput, { clef: clef }))
        ]
      })
      .addClef(clef)
      .addTimeSignature(timeSignature);

      vf.draw();
    } catch (e) {
      console.error("VexFlow Error:", e);
      containerRef.current.innerHTML = `<div class="text-red-500 text-sm">Error rendering sheet music: ${e.message}</div>`;
    }

  }, [notes, clef, timeSignature, width, height]);

  return (
    <div 
      ref={containerRef} 
      className="bg-white p-4 rounded-lg shadow-sm flex justify-center items-center overflow-hidden"
    />
  );
};

export default SheetMusic;


