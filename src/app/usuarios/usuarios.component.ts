import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  public usuarios:Array<any> = [];
  columnas = [
    {titulo:'Nombre de usuario', name:'name'},
    {titulo:'Fecha de nacimiento', name:'date'},
    {titulo:'Dirección', name:'address'},
  ];

  constructor(private usuariosService: UsuariosService){

  }

  ngOnInit(): void{
    this.usuariosService.getUsuarios().subscribe((data:any) => {
      console.log(data);
      this.usuarios = data.usuarios;
    })
  }

}
