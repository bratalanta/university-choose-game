import { StartFeatures, StorageField } from './const';

export default function getCurrentUserData() {
  return {
    name: localStorage.getItem(StorageField.Name),
    theme: localStorage.getItem(StorageField.Theme),
    complexity: localStorage.getItem(StorageField.Complexity),
    lvl: localStorage.getItem(StorageField.Lvl),
    points: localStorage.getItem(StorageField.Points),
    heartsCount: localStorage.getItem(StorageField.HeartsCount),
    timeLeft: localStorage.getItem(StorageField.TimeLeft),
  };
}

export const resetStorage = (shouldResetPoints = true) => {
  if (shouldResetPoints) {
    localStorage.setItem(StorageField.Points, StartFeatures.Points);
  }

  localStorage.setItem(StorageField.TimeLeft, '');
  localStorage.setItem(StorageField.Lvl, StartFeatures.Level);
  localStorage.setItem(StorageField.HeartsCount, StartFeatures.HeartsCount);
};
