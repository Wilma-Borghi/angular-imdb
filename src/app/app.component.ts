import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from "./components/modal/modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @ViewChild(ModalComponent) modal: ModalComponent | undefined;

  emBreve: Array<any> | undefined;
  resultadoPesquisa: Array<any> | undefined;

  pesquisa: string = '';

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.getEmBreveDetalhes();
  }

  getEmBreveDetalhes(): void {
    this.appService.getEmBreve().subscribe(resp => {
      this.emBreve = [];
      resp.data.comingSoon.edges.forEach((item: any, index: number) => {
        if (index < 8) {
          this.appService.getFilmeDetalhe(item.node.id).subscribe(resp1 => {
            this.emBreve?.push(resp1.data.title);
          });
        }
      });
    });
  }

  procurarFilme(event?: any): void {
    if (!event || event.key === 'Enter') {
      this.emBreve = undefined;
      this.appService.getFilme(this.pesquisa).subscribe(resp => {
        this.resultadoPesquisa = resp.data.d;
      });
    }
  }

  showModalEmBreve(item: any): void {
    if (!this.modal) {
      return;
    }
    this.modal.show();
  }

  showModalPesquisa(item: any): void {
    if (!this.modal) {
      return;
    }
    this.modal.title = item.l;
    this.modal.show();
  }
}
