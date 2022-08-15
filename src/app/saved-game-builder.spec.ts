import { SavedGameBuilder } from './saved-game-builder';
import { Save } from './saves/save';

describe('SavedGameBuilder', () => {
  it('should create an instance', () => {
    let save: Save = {
      version: 1,
      money: 1000,
      saveName: '',
      storeName: '',
      day: 0,
      month: 0,
      year: 0,
      daysPassed: 0,
      lastPlayed: 0,
      departments: [],
      employees: []
    };
    expect(new SavedGameBuilder(save)).toBeTruthy();
  });
});
