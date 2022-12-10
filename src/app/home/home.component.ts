import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario:Usuario;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {

    this.usuario = this.usuarioService.getUsuario();

  }

}
