# Burger Queen

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

[Angular](https://angular.io/) es uno de los _frameworks_ de JavaScript más utilizados por lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
  _backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
>el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

El objetivo principal de este proyecto es aprender a construir una _interfaz web_
usando el _framework_ elegido (React, Vue o Angular). Todos estos frameworks de
Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado sincronizados**.
Así que esta experiencia espera familiarizarte con el concepto de _estado de pantalla_,
y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo,
cada vez que agregamos un _producto_ a un _pedido_, la interfaz debe actualizar
la lista del pedido y el total).

## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

* [x] **Uso de HTML semántico**


### CSS

* [x] **Uso de selectores de CSS**

* [x] **Modelo de caja (box model): borde, margen, padding**

* [x] **Uso de flexbox en CSS**

* [x] **Uso de CSS Grid Layout**

* [x] **Uso de media queries**

### JavaScript

* [x] **Arrays (arreglos)**

* [x] **Objetos (key, value)**

* [x] **Diferenciar entre tipos de datos primitivos y no primitivos**

* [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [x] **Funciones (params, args, return)**

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Pruebas asíncronas**

- [ ] **Uso de mocks y espías**

- [ ] **Módulos de ECMAScript (ES Modules)**

- [ ] **Uso de linter (ESLINT)**

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [x] **Callbacks**

- [x] **Promesas**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **GitHub: Despliegue con GitHub Pages**

- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [x] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### UX (User eXperience)

- [x] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [x] **Crear prototipos para obtener feedback e iterar**

- [x] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**

- [x] **Planear y ejecutar tests de usabilidad**

### Firebase

- [ ] **Firebase Auth**

- [x] **Firestore**

### Angular

- [x] **Components & templates**

- [x] **Directivas estructurales (ngIf / ngFor)**

- [x] **@Input | @Ouput**

- [x] **Creación y uso de servicios**

- [x] **Manejo de rutas**

- [x] **Creación y uso Observables.**

- [x] **Uso de HttpClient**

- [ ] **Estilos de componentes (ngStyle / ngClass)**


## 4. Consideraciones generales

La lógica del proyecto está implementada en  Typescript y JavaScript (ES6+), HTML y CSS y empaquetada de manera automatizada, además se utilizó Bootstrap y Angular Material.

La aplicación es un _Single Page App_. Los pedidos se toman desde una
_tablet_, y funciona en una web app **responsive** y puede funcionar **offline**.

El diseño UX está pensado en quienes van a tomar los pedidos, el tamaño y aspecto de los botones, la visibilidad del estado actual del pedido, etc.

<!-- La aplicación desplegada debe tener 80% o más en las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse. -->

<!--La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente. -->

<!-- Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_. -->

<!-- Este proyecto incluye un _boilerplate_ con el código necesario para arrancar con
la parte de backend ya resuelta. El _boilerplate_ incluye los siguientes
archivos/carpetas con la configuración de Firebase (hosting y firestore):

```text
.
├── .editorconfig
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── README.md
└── README.pt-BR.md
``` -->

<!-- Por otro lado, la parte de la interfaz no está incluida, por lo que, deberás
definir la estructura de carpetas y archivos que consideres necesaria. Puedes
guiarte de las convenciones del _framework_ elegido. Por ende, los _tests_ y el
_setup_ necesario para ejecutarlos, serán hechos por ustedes.

Para comenzar este proyecto tendrán que hacer un _fork_ y _clonar_ este
repositorio. -->

## 5. Criterios de aceptación mínimos del proyecto

### Definición del producto

El [_Product Owner_](https://youtu.be/r2hU7MVIzxs) nos
presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta
hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de tu compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de tu compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de tu compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

## 6. Diseño de Interfaz

##### Prototipos de Baja Fidelidad:

* Vista Home
![home](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/Home.png)

* Vista Cocina
![kitchen](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/Cocina.png)

* Vista Mesas
![booking](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/Mesero.png)

* Vista Menú
![menu](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/MeseroII.png)

##### Prototipos de Alta Fidelidad:

* Vista Home
![home](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/PA-Home.png)

* Vista Mesas
![booking](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/PA-Reserva.png)

* Vista Menu
![menu](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/PA-Carta.png)

* Vista Cocina
![kitchen](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/PA-Cocina.png)

* Vista Órdenes
![orders](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/PA-Ordenes.png)

##### Producto Final:

* Vista Home
![home](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/pantalla_home.png)

* Vista Mesas
![booking](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/pantalla_booking.png)

* Vista Menu
![menu](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/pantalla_menu.png)

* Vista Cocina
![kitchen](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/pantalla_kitchen.png)

* Vista Órdenes
![orders](https://raw.githubusercontent.com/BitzyG/LIM015-burger-queen/main/src/assets/readme/pantalla_orders.png)