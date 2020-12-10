import { Component } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public selectedNode = null;

  public model: go.TreeModel = new go.TreeModel(
    [
      { 'key': 1, 'name': 'Jaya', 'title': 'CEO' },
      { 'key': 2, 'name': 'Avinash K', 'title': 'VP Sales', 'parent': 1 },
      { 'key': 3, 'name': 'H. Mohan', 'title': 'Sales', 'parent': 2 },
      { 'key': 4, 'name': 'Geeta Kumari', 'title': 'VP Engineering', 'parent': 1 },
      { 'key': 5, 'name': 'Yashi Gupta', 'title': 'Manufacturing', 'parent': 4 },
      { 'key': 6, 'name': 'Shubha M', 'title': 'Marketing', 'parent': 2 },
      { 'key': 7, 'name': 'Dobil H', 'title': 'Sales Asst', 'parent': 3 },
      { 'key': 8, 'name': 'Harshika Manak', 'title': 'Asst Project Manager', 'parent': 5 },
      { 'key': 9, 'name': 'Surpiya Bhavsar', 'title': 'Team Lead', 'parent': 6 },
      { 'key': 10, 'name': 'Mahmood', 'title': 'Engineering', 'parent': 4 },
      { 'key': 11, 'name': 'Ali Ansari', 'title': 'Production', 'parent': 5 },
      { 'key': 12, 'name': 'Ben K', 'title': 'Software Testing', 'parent': 10 },
    ]
  );

  public setSelectedNode(node) {
    this.selectedNode = node;
  }

}