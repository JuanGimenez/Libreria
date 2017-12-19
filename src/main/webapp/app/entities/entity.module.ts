import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LibreriaLibroModule } from './libro/libro.module';
import { LibreriaEjemplarModule } from './ejemplar/ejemplar.module';
import { LibreriaEmpleadoModule } from './empleado/empleado.module';
import { LibreriaLibreriaModule } from './libreria/libreria.module';
import { LibreriaPrestamoModule } from './prestamo/prestamo.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        LibreriaLibroModule,
        LibreriaEjemplarModule,
        LibreriaEmpleadoModule,
        LibreriaLibreriaModule,
        LibreriaPrestamoModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibreriaEntityModule {}
