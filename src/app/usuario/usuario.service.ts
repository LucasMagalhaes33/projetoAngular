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

  public listaUsuario():Usuario[]{
    return [
      {
        nome: 'Lucas',
        email: 'lucas.teste@gmail.com'
      },
      {
        nome: 'Savio',
        email: 'Savio.teste@gmail.com'
      },
      {
        nome: 'Chico',
        email: 'chico.teste@gmail.com'
      },
    ]
  }

}
