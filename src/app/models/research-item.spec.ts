import { ResearchItem } from './research-item';

describe('ResearchItem', () => {
  it('should create an instance', () => {
    expect(new ResearchItem()).toBeTruthy();
  });

  it('should not have all prereqs met', () => {
    let a = new ResearchItem();
    let b = new ResearchItem();
    let c = new ResearchItem();

    a.prerequisites.push(b);
    a.prerequisites.push(c);

    b.researched = true;

    expect(a.prerequisitesMet()).toBeFalse();
  });

  it('should have all prereqs met', () => {
    let a = new ResearchItem();
    let b = new ResearchItem();
    let c = new ResearchItem();

    a.prerequisites.push(b);
    a.prerequisites.push(c);

    b.researched = true;
    c.researched = true;

    expect(a.prerequisitesMet()).toBeTrue();
  });
});
