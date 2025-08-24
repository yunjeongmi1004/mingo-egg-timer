// src/shared/model/eggSettingStore.jsx
import { create } from 'zustand'

const initialEggSettings = {
  currentIndex: 0,
  eggType: 'hard',
  eggTitle: '완숙',
  eggContent: '노른자까지 완전히 익은 상태',
  minutes: 10,
  seconds: 0
}

export const useEggSettingsStore = create((set) => ({
  eggSettings: initialEggSettings,
  setEggSettings: (newSettings) => set({ eggSettings: newSettings }),
  updateEggSettings: (updates) => set((state) => ({ 
    eggSettings: { ...state.eggSettings, ...updates } 
  })),
  resetEggSettings: () => set({ eggSettings: initialEggSettings })
}))


export const timerSettings = {
  0: {
    minutes: 10,
    seconds: 0,
    title: '완숙',
    content: '노른자까지 완전히 익은 상태',
    eggType: 'hard'
  },
  1: {
    minutes: 8,
    seconds: 0,
    title: '반숙',
    content: '노른자 가장자리가 굳고 중앙은 부드러운 상태',
    eggType: 'medium'
  },
  2: {
    minutes: 6,
    seconds: 0,
    title: '완전반숙',
    content: '노른자가 촉촉하고 흐르는 상태',
    eggType: 'soft'
  }
}