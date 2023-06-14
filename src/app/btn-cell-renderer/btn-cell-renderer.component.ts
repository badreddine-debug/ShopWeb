import { Component, OnDestroy } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'btn-cell-renderer',
  templateUrl: './btn-cell-renderer.component.html',
  styleUrls: ['./btn-cell-renderer.component.css'],
})
export class BtnCellRendererComponent
  implements ICellRendererAngularComp, OnDestroy
{
  constructor(private router: Router) {}
  public cellValue: string = '';
  private params: any;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
    this.params = params;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    // set value into cell again
    this.cellValue = this.getValueToDisplay(params);
    return true;
  }

  buttonClicked(params: any) {
    debugger;
    this.params.clicked(this.params.data);
    this.router.navigate(['Home/Product/Add/' + this.params.data.id]);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
  ngOnDestroy() {
    // no need to remove the button click handler as angular does this under the hood
  }
}
