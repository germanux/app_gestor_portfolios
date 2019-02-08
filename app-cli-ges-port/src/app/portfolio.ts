export class Portfolio {
  constructor(private nombre: string, 
    private descripcion: string,
    private fichero: string,
    ) {
      if (this.nombre == "") {
        throw new Error("Nombre no puede ser vacío");
      }
    }
    public getNombre() : string { return this.nombre; }
}
