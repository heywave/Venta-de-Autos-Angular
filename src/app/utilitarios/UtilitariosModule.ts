import { NgModule } from "@angular/core";
import { AEspacioPipe } from "./Pipes/AEspacio.pipe";
import { CalificacionComponent } from "./Componentes/calificacion.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        
        CalificacionComponent,
    ],
    imports:[
        CommonModule,
        
    ],

    exports:[
        
        CalificacionComponent,
        
    ]
})

export class UtilitariosModule{
    
}