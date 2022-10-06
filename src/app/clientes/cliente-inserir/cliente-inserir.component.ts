import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-cliente-inserir',
templateUrl: './cliente-inserir.component.html',
styleUrls: ['./cliente-inserir.component.css'],
})
export class ClienteInserirComponent implements OnInit {
  nome: undefined;
  fone: undefined;
  email: undefined;

  onAdicionarCliente() {
    console.log('inserindo cliente...');
  }

  clientes = [
    {
      nome: 'José',
      fone: '11223344',
      email: 'jose@email.com',
    },
    {
      nome: 'Maria',
      fone: '22334455',
      email: 'maria@email.com',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
