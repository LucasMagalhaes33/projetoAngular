import { Usuario } from './../usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario();
    usuario.nome = 'Lucas';
    usuario.email = 'lucas.teste@gmail.com';

    return  usuario;
  }
}
