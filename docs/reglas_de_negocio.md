# REGLAS DE NEGOCIO

- Un vendedor puede ser de dos tipos:
  - ```vendedor_central```: vendedor del *concesionario central*.
  - ```vendedor_oficial```: vendedor de *servicio oficial*.
- Un vendedor puede estar asignado a un solo punto de venta a la vez (*servicio ofical* o *consesionario central*).
- Las ventas pueden ser de ciertos tipos dependiendo de la existencia del automovil en el stock del consesionario:
  - ```venta_directa```: Existe el ejemplar en el stock de la ubicacion donde se realiza la venta.
  - ```venta_transferia_central```: Se transfiere una unidad desde un *servicio oficial* hasta el *consesionario central* para realizar la venta.
  - ```venta_transferia_oficial```: Se transfiere una unidad desde el *consesionario central* hasta un *servicio oficial* para realizar la venta.
  - ```venta_encargada```: Se realiza cuando hay una venta pero no existe el stock de un modelo en específico y se encarga a la fabrica un ejemplar.
- Los vendedores de *servicio oficial* pueden realizar solamente ventas sobre el stock existente en ésa ubicación y en el *consesionario central*.
- Los vendedores del *consesionario central* puenden hacer ventas sobre el stock del *consesionario central* y el stock de los *servicios oficiales*.
- Solo un ```vendedor_central``` puede encargar una unidad a la fabrica para realizar una venta.
- Un mismo vendedor puede ser transferido a otra ubicación.
- Se debe registrar la fecha en la que un vendedor es asignado a una ubicación y cuando deja de estar asignado a la misma.
- Un vendedor puede estar asignado a una ubicación a la vez.
- En una ubicación se debe registrar .
- Un modelo de auto puede tener varias versiones, pero podrá ser registrado un modelo con un nombre y version ya exsistente.
