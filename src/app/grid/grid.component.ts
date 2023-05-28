import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  rowHeight: any = 50;
  @Input()
  rowData: any;

  @Input()
  columnDefs: any;
}
