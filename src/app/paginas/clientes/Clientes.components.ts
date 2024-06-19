import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../servicios/Cliente.service';
 

@Component({
  selector: 'app-Clientes',
  templateUrl: './Clientes.components.html',
  styleUrls: ['./Clientes.component.css']
})
export class ClientesComponent implements OnInit {
  mostrarTarjeta: boolean = false; 
  id: string='';
  nombre: string = '';
  apellido:string='';
  password: string = '';
  email: string = '';
  telefono: string = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  toggleTarjeta(event: any) {
    this.mostrarTarjeta = event.target.checked;
  }

  redirectToHome() {
    this.router.navigateByUrl('/home');
  }

  registrarCliente() {
    const user = {
      id:this.id,
      nombre: this.nombre,
      apellido:this.apellido,
      password: this.password,
      email: this.email,
      telefono: this.telefono
    };
  
    console.log('Datos del usuario a enviar:', user);
  
    this.userService.addUser(user).subscribe(
      response => {
        
        console.log('Cliente registrado exitosamente:', response);
        this.router.navigateByUrl('/home');
      },
      error => {
        console.error('Error al registrar cliente:', error);
      }
    );
  }
  
  
}