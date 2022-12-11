import { Usuario } from './../../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public salvar(){
    console.log(this.usuario);
    alert('Salvo com sucesso');
  }

}
