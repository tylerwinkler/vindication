import { MockLocalStorage } from '../mock-local-storage';
import { LocalStorageSaveManager } from './local-storage-save-manager';
import { Save } from './save';

describe('LocalStorageSaveManager', () => {
  it('should create an instance', () => {
    expect(new LocalStorageSaveManager(new MockLocalStorage)).toBeTruthy();
  });

  it('should store a save', () => {
    let storage = new MockLocalStorage();
    let lsm = new LocalStorageSaveManager(storage);

    let save: Save = {
      version: 1,
      money: 1000,
      saveName: '',
      storeName: '',
      day: 0,
      month: 0,
      year: 0,
      daysPassed: 0
    };

    lsm.putSave('test', save);

    // a save now exists in storage
    expect(lsm.getSaveCount()).toEqual(1);

    // the save is the expected
    expect(lsm.getSave('test')).toEqual(save);
  });

  it('should retrieve a save', () => {
    let storage = new MockLocalStorage();
    let lsm = new LocalStorageSaveManager(storage);

    let save: Save = {
      version: 1,
      money: 1000,
      saveName: '',
      storeName: '',
      day: 0,
      month: 0,
      year: 0,
      daysPassed: 0
    };

    lsm.putSave('test', save);

    // a save now exists in storage
    expect(lsm.getSaveCount()).toEqual(1);

    // the save is the expected
    expect(lsm.getSave('test')).toEqual(save);
  });
});
