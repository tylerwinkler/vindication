import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-tree',
  templateUrl: './research-tree.component.html',
  styleUrls: ['./research-tree.component.sass']
})
export class ResearchTreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tabName: string): void {
    this.currentTab = tabName;
  }

  selectResearch(researchId: number): void {
    this.currentResearch = researchId;
  }

  currentTab = 'personnel';
  currentResearch = -1;
}
