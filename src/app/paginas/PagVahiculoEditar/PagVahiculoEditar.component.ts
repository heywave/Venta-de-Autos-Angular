import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-PagVahiculoEditar',
  templateUrl: './PagVahiculoEditar.component.html',
  styleUrls: ['./PagVahiculoEditar.component.css']
})
export class PagVehiculoEditarComponent implements OnInit {

  vehiculo: any = {};
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: VehiculoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // Inicializar el formulario en el constructor
    this.form = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      anio: [''],
      kilometraje: [''],
      precio: [''],
      calificacion: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.getVehiculo(params['codigo']).subscribe((respuesta: any) => {
        console.log('Datos del vehículo recibidos:', respuesta);
        this.vehiculo = respuesta?.data;
        this.form.patchValue({
          codigo: this.vehiculo?.codigo,
          marca: this.vehiculo?.marca,
          modelo: this.vehiculo?.modelo,
          anio: this.vehiculo?.anio,
          kilometraje: this.vehiculo?.kilometraje,
          precio: this.vehiculo?.precio,
          calificacion: this.vehiculo?.calificacion,
        });
      });
    });
  }

  updateVehiculo(){
    this.service.updateVehiculo(this.vehiculo.codigo,this.form.value)
    .subscribe((respuesta)=>{
      console.log(respuesta);
    })
  }
  redirectToHome() {
    this.router.navigateByUrl('/vehiculos');
  }

}