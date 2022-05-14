# SO-FINAL-2022
# Memoria Virual

## Antecedentes
- Las instruccines deben estar en memoria Fisica (RAM).
- Las primeras direcciones debes ser de memoria fisica, es decir, se debe llenar la RAM antes de utilizar esta estrategia.
## Que es?
- Es la **separación entre la memoria lógica** de los usuarios **y la física**.

## Mapa De Memoria
Es lo que junta ambas memorias (la abstraccion), es decir, el mapeo de **abstraccion entre la fisica (RAM) y la virtual (disco)**. 

 
## Objetivos
 Multiprogramacion por medio de varios procesos paralelos.
 - Permite ejecutar procesos que no esten en memoria virtual.
 ## Ventajas
 - Los programas pueden ser mas grandes que la memoria fisica (ram)
 -  Un **conjunto separado de la memoria logica**, es decir, un **segmento aparte** de memoria que el SO utiliza **cuando la RAM ya no tiene espacio**.
 - Es una capa que **el usuario no ve**, por lo que el SO **se encarga de manejarla internamente**.
- Permite a los desarrolladores **olvidarse de las limitaciones** de la memoria. 
- Los programas no se limitan a la memoria de un sistema.
- Como los **programas no se cargan completos**, utilizan **menos memoria**. Y **se puden ejecutar mas**, ***optimizando el CPU y sin afectar el tiempo de respuesta.***
- **Ejecucion mas rapida**, menos **I/O** para **cargar/intercambiar programas**.

## Desventajas
- **Dificil** Implementacion
- Puede causar **bajo rendimiento**, por que **utiliza el disco duro**.
## Que necestiamos?
- En la practica, los programas no se cargan completamente a memoria.
- En los programas **se utilizan pocas condiciones de error**.
- Las **estructuras de datos se asignan mas veces de las que se usan**.
- Las **funciones de un programa no se utilizan siempre**, por lo que estas solo se cargan a memoria mientras se utilicen.

## Estrategias de Administracion de Almacenamiento Virtual
### Estrategias de Búsqueda
- Estrategia que permite ***traer paginas/segmentos del almacenamiento secundario al primario***
#### ***BUSQUEDA EN DEMANDA***
Tiene que tener una **referencia hacia una pagina/segmento por proceso** para que pueda traer los datos al almacenamiento principal.
#### ***BUSQUEDA ANTICIPADA***
- Realiza una **pre-carga de las paginas que probablemente vayan a ser utilizadas** antes de ser referenciadas.
- Esto se comple si hay espacio suficiente en memoria.
- Mientras el proceso ejecuta sus paginas actuales, el sistema carga unas nuevas para cuando las necesite.
- Si las predicciones son correctas, el tiempo de ejecucion se reducira drasticamente.


### ESTRATEGIAS DE COLOCACION
- Toma la decicion de donde se colocaran las paginas/segmentos dentro de la memoria virtual. 
- No hay un orden, estos bloques son colocados donde haya espacio.

### Estrategias de Reposición
- Toma la desicion de que bloque desplazar cuando la RAM esta llena o compometida.
#### Reposicion de Pagina
- Se tienen todos los marcos de paginas a dispocion.
- Deciden que pagina mover y hacia donde para hacer cupo a una nueva pagina.
##### Principio de Optimizacion:
- Las paginas que se mueven no deben ser las que se utilicen en un largo plazo, para no cargarlas de nuevo.
- **Se reponen las que sean de corto o mediano plazo.**
- Esto puede optimizar mas no al 100% por que no se puede predecir con toda seguridad.
##### Al azar:
- Las paginas tienen la misma probabilidad de ser reemplazadas.
- Genera ***poca sobrecarga.***
- Las paginas van saliendo random.
##### ESTRATEGIA FIFO:
- ***Reemplaza las paginas que lleven mas tiempo en RAM***.
- Se valua con un TimeStamp
- Puede que saque paginas que se utilicen frecuente mente, es decir, las que se usan mas o son de programas que siguen corriendo.
- ***Saca las paginas antiguas, si se utilzan frecuentemente o no.***
##### ESTRATEGIA LRU:
- Saca las paginas **que no se hayan utilizado durante un buen tiempo**.
- El TimeStamp se actualiza cada vez que se le hace referencia.
- Puede generar ***mucha sobrcarga***.
- ***Menos recientemente utilizadas***

##### ESTRATEGIA LFU:
- ***Menos frecuente utilizadas***
- **Saca las que se usen menos**.
- Problema: Puede sacar la mas recientemente ingresada, ya que puede que sea con menos usos.

##### ESTRATEGIA NUR:
- Pagina no usada recientemente
- Poca sobrecarga
- **Saca las que tengan probabilidad de no ser usadas en un futuro proximo.**
- 2 BITS de PESO: 
- BIT REFERENCIADO: =0 no se ha referenciado e =1 si se ha referenciado.
- BIT MODIFICADO: =0 no se ha modificado e =1 si se ha modificado.
- REFERENCIADO > MODIIFICADO

Prioridades

R M

0 0  ALTA ↓

0 1 ALTA MEDIA  ↓

1 0 MEDIA  ↓

1 1 BAJA  ↓
 


## LOCALIDAD
- Los bloques se guardando random, pero tienen una referencia a su espacio de memoria asignada.
- EMPIRICA: Un proceso tendera a concentrar sus referencias en un **intervalo de tiempo** en un subconjunto **cercano de sus paginas**.
### Caracteristicas
#### Localidad Temporal
- Si el bloque esta actualmente, **tiene probabilidad de estar en el futuro o de haber estado en el pasado.**
- Tienen una alta **probabilidad de ser referenciadas en un futuro próximo**
##### Ejemplo:
+ Formación de ciclos
+ Subrutinas
+ Pilas
+ Variables usadas para contar y totalizar

// TEMPORAL

// % de que x , y se utilicen en tiempo del metodo 
#### Localidad Espacial
Los espacios cercanos tienen una probabilidad de ser simiales mas no es seguro.
// ESPACIAL

// PAGINA 1

// ↓            ↓

// [x,0,0,0,0,0,y,0,0,0,0,0]


## CONJUNTOS DE TRABAJO
- Es una coleccion de paginas a las cuales un proceso hace referencia. Es **el grupo de paginas propias de un proceso**.

- Para que el programa sea eficiente, **su conjunto de trabajo debe estar en RAM**.
- De lo **contrario seria ineficiente por hiperpaginacion**.
- Estas paginas pueden cambiar, eliminarse o agregarse nuevas durante el tiempo de ejecucion.
- Las predicicones sobre los conjuntos y su contenido inicial no es aplicable  durante la ejecucion, ya qu no se puede predecir lo que el usuario hara durante el tiempo.

- Estas deben considerar la administracion, para evitar comprometer el almacenamiento y la hiperpaginacion. 


### Política de Admón. de almacenamiento por conjuntos de trabajo
- Trata de mantener los conjuntos de trabajos activos en el almacenamiento primario.
- Para agregar un nuevo proceso, debe haber suficiente espacio.
- Para procesos recien iniciados, **se dejan de lado las prioridades de tiempo y eficiencia**, ya que estos se deben ejecutar si o si.
### Heurística
- Es un algoritmo que deja una o ambas de las prioridades de los algortmos, dejando de lado los tiempos y las buenas soluciones.
###

### Hiperpaginacion
- Es pedir paginas de manera repetitiva al almacenamiento secundario.


## IMPLEMENTACION DE MEMORIA VIRTUAL
### PAGINACION POR DEMANDA (MAS EFICIENTE)
- Similar al Intercambio.
- Los procesos residen en memoria secundaria.
- Cuando se van a ejecutar, se realizan intercambios entre memoria pero de una manera peresoza. Es decir, que si no se utilizara la pagina, no la intercambia.
- Se le dice paginador, por que un intercambiador mueve procesos enteros, y el paginador pues paginas.
- Cuando el proceso se va a traer, el paginador adivina cuales paginas usara antes de que que el intercambio se realice.
- Solo se traen las paginas necesarias.
- Reduce el tiempo y cantidad de memoria requerida.

#### Que pasa si no recupero una pagina?
1. Consultamos a la PCB (Bloque de control de proceso) para verificar la validez de la direccion.
2. Si es invalido, abortamos el proceso.
3. Si es valida, la incorporamos.
4. Buscamos un marco libre y la asignamos.
5. Actualizamos la tabla de paginas con el nuevo marco asignado.
6. Reinciamos las instruccion interrupida para que acceda a la posicion valida.

- Es importante revisar el contexto.
- Al ser interrumpido, se puede validar y reanudarlo desde la instruccion en que se quedo e ir a traer la pagina.
#### Peor Caso
- No habra ninguna pagina registrada en tabla, por lo que se se iran a traer las paginas una por una, generando paginacion por demanda pura. Y repaginando todos los marcos hasta que esten completos. 

### Hiperpaginación (thrashing)
- Es archivar una pagina y volverla a cargar , ya que estas son de alta demanda.
- Esto genera otro falla, 
- Es cuando un proceso utiliza una gran cantidad de recursos pero realiza un trabajo menor.
#### Causas
- Reemplazo global, ya que al momento en que los procesos empiecen a quitar paginas de otros procesos, estos empiezan a recargarse, generando asi largas colas del procesador, y generando un circulo vicioso, donde estos estan cargando y eemplazandoce entre si, ocasionando poca eficiencia y mucha carga en el CPU.
#### Solucion
- Asignando prioridades o reemplazo local, para que los procesos solo quiten sus propios marcos y paginas. Sin afectar a los demas 

#### Reemplazo Global
- Permite a un proceso tomar un marco y reemplazar, aunque este contengo otros procesos. Moviendo o quitando de uno a otros marcos
#### Reemplazo Local
- Requiere que un proceso tome SOLO sus marcos de trabajo y los reempleace.

#### Administracion de Recursos
- Conforme avanzan los desarrollos, los costes de tiempo se van reduciendo
- Esto, ya que los arquitectos de SO's desarrollan algoritmos para que el usuario tenga resultados mas rapido.

#### Liberacion de Paginas
- Las paginas de los procesos, tienen un tiempo de vida y se puede saber a donde apuntan. Por lo que estas pueden ser liberadas facilmente, para dar espacio a nuevas y/o acelear los procesos existentes.
- Esto no debe se hercho por el usuario, ya que no sabe cuales son cual.

#### Tamanios de pagina
- Las paginaciones estan marcadas por marcos de tamanios fijos.
- Por lo regular siempre son potencias de 2, y suelen variar entre 512 (2^9) y 16384 (2^14) bytes.
- Entre mas pequeños sean las paginas, mas habra y  mayores seran las tablas de paginas, por lo que tendrian un tamaño exesivo ( fragmencaion de tablas).
- Con mas grandes, nunca llegarian a ser referenciadas, por lo que se paginarian hacia el primario, por lo que se necesitan pequeñas.

### SEGMENTACION POR DEMANDA (no es recomendado)
- Este se implementa cuando se cuenta con pocos recursos.
- Este es por demanda, ya que va a traer segmentos completos.
- Si ocurre un error, este debe validar si hay suficiente espacio para acoplar el segmento en la RAM, si no se va a la secundaria.
- Se utiliza cuando se tienen pocos recursos, lo que hace imposible la paginacion por demanda.


# Gestion De Disco
## Archivos
-  Es una coleccion de informacion relacionada que se guarda en disco y se le da un nombre de fichero.
- Para el usuario, es la porcion mas pequeña del almacenamiento secundario.
- Representan programas, fuentes como objeto.
- Es una secuencia de bits, bytes, líneas o registros cuyo significado el creador y usuario del archivo define.
- El SO mantiene una tabla de archivos abiertos/
## Archivos Fuentes
- Secuencia de **subrutinas y funciones**, cada una de las cuales consta de declaraciones seguidas de enunciados ejecutables
## Archivos Objeto
- Secuencia de bytes organizados en **bloques que el enlazador del sistema entiende**.
- **Archivo ejecutable** es una serie de secciones de código que el cargador puede traer a la memoria y ejecutar.

## Atributos de Un Archivo
- Nombre
- tipo
- tamaño
- protección
- hora
- fecha
- identificación del usuario.
- Estos se guardan en la estructura de directorios.
## Operaciones con Archivos
- Lectura: Especificar el nombre y el lugar en memoria a cargar la info.
- Escritura: Especificar el nombre del archivo y la informacion a escribir en el.
- Creacion: encontrarse espacio en el sistema de archivos e insertar una entrada para el nuevo archivo en el directorio
- Borrar: Se busca archivo y se libera el espacio que ocupa.
- Truncar: Se busca el archivo y se elimina el contenido de este, dejando el directorio ocupado.
- Reubicar: Es una reubicacion logica, es decir, no se mueve, solo se remapea.




# CASO FINAL 1:
Se tiene X servidor y Y servidor, estos pertenecen a una empresa que es datawharehouse en la que todas las noches se
hace un backup de la informacion de sus usuarios, indique que pasa en este proceso?
## Interbloqueo
El problema en este caso, es que, como todas las transacciones se hacen al mismo tiempo y que los servidores solo operan
durante la noche, llegará un momento en que el servidor se llegue a saturar por muchas transacciones si es que este no
se amplia su capacidad, intebloqueo de apropiacion.
Ya que los archivos necestian cerrarse antes de que estos vuelvan a abrirse, por lo que si un archivo es muy grande o se modifica contantemente, este genera latencia y hacer que la cola de transacciones vaya aumentando.
Tambien, si de este archivo dependen otros, generaria espera circular, esperando a que se libere el recurso padre. 


## Semaforos
En este caso serviría mejor un semaforo con múltiples variables ya que hay muchos procesos similares que buscan ejecu-
tarse al mismo tiempo y buscan los mismos recursos.

## Planificador de procesos
En cuanto al plafinicador de procesos, este es el que se encargará de llevar a cabo los procesos que serán ejecutados,
para llevar un mejor orden y un otorgar un minimo tiempo de respuesta. 
Tambien es necesario un paradigma multiprogramacion para que el CPU pueda llevar a cabo multiples planificaciones de los procesos entrantes.
Por lo que necesitaremos un Core que sea multiinucleo (entre mas, mejor) para que este pueda soportar la carga masiva de transacciones entrantes. Y distribuya las colas.

## Segmentación (bicho)
Este se adapta mejor ya que, al asignar los segmentos a la memoria física, estos no necesariamente deben ir de forma
contigua, ahorrando así tiempos de asignación de información.
## Fragmentación (bicho)
Aqui es de gran utiidad ya que también se podría ahorrar tiempo de respuesta al implementar la fragmentación interna.

## **Paginacion**
La paginacion  de nemoria seria mas util, ya que estamos llevando muchos procesos en paralelo, por lo que paginarlos nos daria mas estabilidad de memoria principal y menor tiempo de respuesta. Como nos encontramos en un DH, los consumos de lectura y escritra son masivos. Por lo que paginar estos procesos es lo ideal.


## **Memoria virtual**
Utilizaria paginacion en demanda, por que necesitamos traer las paginas basicas de el proceso, y podremos "adivinar" las posibles paginas que necesitemos mas adelante. Cargara las necesarias para arrancar y las mas probables.

## **Disco**
Optaria por un raid 5, ya que si alguna de nuestras unidades de almacenamiento falla, podemos recuperarla por mediio de la partidad.