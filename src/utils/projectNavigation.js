/**
 * File Name: projectNavigation.js
 * Author: Haneul Lee (Rundee)
 * Description: Project navigation utility for previous/next project navigation
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

// Project list in order
export const PROJECT_LIST = [
  { id: 'Fear', path: '/projects/Fear', title: 'FEAR' },
  { id: 'BigMoth2', path: '/projects/BigMoth2', title: 'Big Moth 2' },
  { id: 'SpellItOut', path: '/projects/SpellItOut', title: 'Spell It Out' },
  { id: 'RundeeItemFactory', path: '/projects/RundeeItemFactory', title: 'Rundee Item Factory' },
  { id: 'DiscordBot', path: '/projects/DiscordBot', title: 'Rundee Discord Bot' },
  { id: 'RundeeWebsite', path: '/projects/RundeeWebsite', title: 'Rundee Website' }
];

export const getProjectNavigation = (currentPath) => {
  const currentIndex = PROJECT_LIST.findIndex(p => p.path === currentPath);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  return {
    prev: currentIndex > 0 ? PROJECT_LIST[currentIndex - 1] : null,
    next: currentIndex < PROJECT_LIST.length - 1 ? PROJECT_LIST[currentIndex + 1] : null
  };
};

