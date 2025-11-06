import React, { createContext, useContext, useState, useEffect } from 'react';
import { boulderBuddyConfig } from '../buddies/boulder/config';
import { swimBuddyConfig } from '../buddies/swim/config';
import { runBuddyConfig } from '../buddies/run/config';
import { gymBuddyConfig } from '../buddies/gym/config';
import { cookBuddyConfig } from '../buddies/cook/config';
import { yogaBuddyConfig } from '../buddies/yoga/config';
import { lifeskillsBuddyConfig } from '../buddies/lifeskills/config';
import { cybersecurityBuddyConfig } from '../buddies/cybersecurity/config';
import { pianoBuddyConfig } from '../buddies/piano/config';
import { englishBuddyConfig } from '../buddies/english/config';

const BuddyContext = createContext();

// Registry of all available buddies
export const BUDDIES = {
  boulder: boulderBuddyConfig,
  swim: swimBuddyConfig,
  run: runBuddyConfig,
  gym: gymBuddyConfig,
  cook: cookBuddyConfig,
  yoga: yogaBuddyConfig,
  lifeskills: lifeskillsBuddyConfig,
  cybersecurity: cybersecurityBuddyConfig,
  piano: pianoBuddyConfig,
  english: englishBuddyConfig
};

export function BuddyProvider({ children }) {
  const [activeBuddy, setActiveBuddy] = useState(() => {
    const saved = localStorage.getItem('activeBuddy');
    return saved || 'boulder'; // Default to boulder
  });

  const currentBuddyConfig = BUDDIES[activeBuddy];

  useEffect(() => {
    localStorage.setItem('activeBuddy', activeBuddy);
  }, [activeBuddy]);

  const switchBuddy = (buddyId) => {
    if (BUDDIES[buddyId]) {
      setActiveBuddy(buddyId);
      // Update URL to reflect buddy change
      window.location.hash = `#/${buddyId}buddy`;
    }
  };

  const value = {
    activeBuddy,
    currentBuddyConfig,
    allBuddies: BUDDIES,
    switchBuddy
  };

  return (
    <BuddyContext.Provider value={value}>
      {children}
    </BuddyContext.Provider>
  );
}

export function useBuddy() {
  const context = useContext(BuddyContext);
  if (!context) {
    throw new Error('useBuddy must be used within a BuddyProvider');
  }
  return context;
}

