
Definición del producto 

Hipótesis:
Existen muchos jóvenes y adultos jóvenes que les gustaría jugar por primera vez Pokemon Go o retomar la aplicación que alguna vez usaron por corto tiempo y luego, por distintas razones, dejaron de jugar. 

Escenario:
Un adulto joven quiere volver a jugar Pokemón Go, aplicación que tiene instalada hace mucho tiempo en su dispositivo móvil. Solo alcanzó a jugar algunas veces y por tiempo dejó de jugar. Pero para retomar el juego necesita manejar la información básica de la serie de Pokemón, de tal forma, de introducirse a la aplicación, y también nuevamente conocer aquellos aspectos importantes relativos a la dinámica de Pokemon Go.

Principales usuarios
Personas jóvenes de cualquier sexo que sean principiantes en la app Pokemon Go.

Objetivo principal.
Lograr que los jugadores principiantes eligan nuestro sitio web como plataforma para introducirse a la app Pokemon Go.

Investigación

Como breve introducción a la app Pokemon Go, los usuarios del juego se convierten en "Maestros/entrenadores de Pokémon" y pueden:
- Descubrir el mundo Pokémon explorando y descubriendo nuevos Pokémon allá donde vayan.
- Atrapar distintos Pokémon para completar su Pokédex.
- Pelear contra Pokémon de otros entrenadores y conquistar un gimnasio.
- Competir en épicos combates contra otros entrenadores.
- Hacer equipos con otros entrenadores para atrapar poderosos Pokémon
  durante las incursiones.

A partir de una research entregada se seleccionaron algunos hallazgos correspondientes a necesidades complementarias que tenían los usuarios respecto de la app Pokemon Go:

- Los Pokémon tienen características únicas que determinan las decisiones que
  toma el usuario (tipo, debilidad, peso, multiplicador, etc.)

- Los Pokémon tienen distintos tipos y debilidades de combate. Estas
  características son importantes cuando un maestro Pokémon elige al Pokémon
  más adecuado para su batalla. Hay veces que tiene que elegir a los que
  tienen menos cantidad de debilidades y saber de que tipo son. Por ello, es
  importante para un maestro Pokémon poder ordenarlos por estas 2
  características.

- Los Pokémon evolucionan y es importante para un
  maestro Pokémon saber cuántas y cuáles son las evoluciones que tienen antes y después.

- Los Pokémon se alimentan de caramelos y un maestro Pokémon necesita saber
  cuántos caramelos necesita un Pokémon para evolucionar.

Entrevista a potencial usuario
Se realizó una entrevista a un usuario objetivo para identificar sus necesidades y contrastarlas con los hallazgos del research, para posteriormente, dar origen a las historias de usuario.

![entrevista](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/entrevista%20pokemon.m4a)

Historias de usuario
Se realizó una historia de usuario por cada interfaz del sitio web, para planificar mejor la división de tareas y el desarrollo del código. La herramienta de planificación utilizada fue Trello.

[Ver Trello aquí:](https://trello.com/b/qEpWP7k9/laboratoria)

Objetivos del usuario en relación al producto
- El usuario satisfacerá su necesidad como principiante de introducirse a la app Pokemon Go en forma simple, rápida y eficaz.
- El usuario contará con un menú de navegación que le permitirá: acceder a la función de filtrar por tipo de pokemones, conocer los 10 pokemones que más aparecen y encontrar información general sobre la captura de los pokemones.
- El usuario podrá elegir su perfil de juego según preferencia, conociendo los aspectos relevantes de un maestro guerrero y un maestro recolector. 
- El usuario cuando se sitúe en el perfil de maestro recolector podrá buscar por nombre del pokemon y podrá conocer las evoluciones de él, además de los kms y caramelos que necesita para evolucionar.
- El usuario cuando acceda al perfil de maestro guerrero podrá ordenar los pokemones en: los más fuertes y los más débiles. Además, encontrará un enlace que lo llevará a conocer los pokemones más ganadores, atacantes y defensivos dentro del contexto de las batallas.

Nivel de experiencia y de interfaz
Lo primero fue identificar los aspectos relevantes para los usuarios, es decir, aquella información que les gustaría ver en la app. Luego, se distribuyó esa contenido en diversas secciones, de tal forma, que hubiese una coherencia en la experiencia del viaje. Para concretar esas ideas se páso a la siguiente fase:

1. Etapa del prototipado

a) Prototipos de baja fidelidad (wireframes) 

- Sketch a mano alzada
Fue el primer acercamiento a la ideal producto y se realizó en conjunto con un usuario, de tal forma de ir iterando desde el momento inicial. Fue así como se consiguió un sketch que satisfacía, en gran parte, sus requerimientos en cuanto a, contenido, aspecto visual y funcionalidad.

![Sketch](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/boseto1.png)
![Sketch](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/boseto2.png)

- Balsamiq
El sketch de lápiz y papel fue llevado a Balsamiq, en donde de, forma simple y muy rápida se logró un diseño estático más acabado, en blanco y negro y que mostraba el orden y estructura de los contenidos. En la iteración no hubo cambios, porque era una simple copia del sketch.

![balsamiq](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/balsamiq1.png)
![balsamiq](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/balsamiq2.png)
![balsamiq](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/balsamiq3.png)
![balsamiq](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/balsamiq4.png)
![balsamiq](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/balsamiq5.png)
![balsamiq](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/balsamiq6.png)
![balsamiq](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/balsamiq7.png)

a) Prototipos de alta fidelidad (mockup)

- Figma 
Se utilizó esta herramienta para potenciar el diseño visual y el nivel de interacción. Se simuló el flujo de interacción entre los botones y páginas.

[Ver prototipo aquí](https://www.figma.com/proto/Qf9DYVCBkgFyztVUMr0ixT/pokemon?node-id=5%3A5&scaling=scale-down)

2. Iteración de Prototipo de alta fidelidad: 
Antes de presentar el proyecto digital al usuario, se iteró el diseño visual con las compañeras de squad, quienes evaluaron aspectos técnicos como: proximidad, repetición, alineación, contraste, tipografía y color. Las observaciones entregadas fueron: que el header (logo y menú de navegación) tuviese el ancho de la interfaz, que transformar el acceso a "maestro recolector" y "maestro guerrero" en botones y que alineara el contenido hacia la izquierda.

![paginainicioantes](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/pagina%20de%20inicio%201.png)
![paginainiciodespues](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/pagina%20de%20inicio%20final.png)

Posteriormente, se iteró con el usuario, quien solo realizó el requerimiento de cambiar el color del menú de navegación a un color claro que armonizase con los colores ya presentes. Por lo que se escogió una tonalidad del color turquesa. 

Una vez realizadas todas las modificaciones en Figma, se entregó la propuesta final al usuario, quien aprobó el diseño visual en su totalidad.

3. Diseño de interfaz: 
A continuación se irán describiendo los aspectos de diseño visual respecto del futuro producto digital.

- Proximidad: 
Los elementos que comparten relación estan próximos entre sí. Se proporciona una coherencia entre los diferentes contenidos.

- Repetición: 
El contenido más importante como: la introducción a la app Pokemon Go y la elección del perfil de jugador en la página de inicio comparten jerarquía, ya la finalidad del sitio web es introducir a la app a jugadores principiantes y que se perfilen como jugadores. Por lo que se observa una consistencia visual externa.

- Alineación: 
Existe alineación izquierda del contenido.

- Contraste: 
El uso del contraste no interfiere en la legibilidad del sitio web. La imagen de fondo es clara en la parte superior, que es donde si sitúan los títulos y páginas, por lo que el color de fondo (claro) y el de la tipografía (azul) son lo suficientemente distintos para evitar forzar la vista. El color de los botones (amarillo) también contrasta con el color de fondo. Se observa una armonía en el contraste a nivel general.

- Tipografía: 
Para el logo se utilizó tipografía solid con estilo Pokemon para evocar la recordada serie. En los títulos se usó la fuente Bungee regular, que se utiliza bastante en el contexto urbano, por lo que se relaciona con el ambiente en donde se da la dinámica del juego Pokemon Go. En el menú de navegación de empleó la fuente sans serif de tipo gótica llamada JejuGothic en color blanco y minúscula, ya que esta parte del sitio web se comporta solo como un complemento de información general. Para los subtítulos y párrafos también se utilizó JejuGothic en color azul para fomentar una fácil lectura. Los títulos al tener una fuente distinta al demás contenido adquieren el protagonismo deseado.

- Color: 
Se eligieron los tonos bases (azul y amarillo) por ser los colores característicos de la serie Pokemon, y de acuerdo a ellos se buscó una paleta cromática similar a ésta: 

![Paleta de colores](https://github.com/vicencio-tech/SCL012-data-lovers/blob/master/img/paleta%20de%20colores.png)

El logo tiene los colores distintivos de Pokemon. El menú de navegación posee un tono turquesa para ir en armonía con el fondo y su fuente está en color blanco para robar el protagonismo del contenido principal. Los textos de la sección principan están en azul para lograr un contraste con el fondo. Y se le designó color amarillo a los botones, para marcar la funcionalidad, a modo de estimular la interacción. Con respecto a la psicología del color, el tono turquesa y azul en conjunto, crean un ambiente de calma, seguridad, confianza y armonía que invita a un jugador principiante a adentrase a la app Pokemon Go haciendo uso de nuestro sitio web. Todos los colores empleados no fatigan visualmente y reafirman el mensaje que se quiere trasmitir, que es contagiar de entusiasmo y energía positiva a la hora de aprender a jugar Pokemon Go. 

4.  Test de usabilidad

(No se realiza test de usabilidad por no alcanzar a terminar la página web)

Introducción de la aplicación
Existen numerosos potenciales jugadores de Pokemon Go, que corresponden a personas que aún no comienzan a usar a jugar o que tienen la app instalada pero no la usan, siendo este grupo los usuarios objetivo. La app "MaestroPoke" es de carácter informativa, ya que otorga una introducción al mundo Pokemon. Le permite al jugador principiante acceder mediante un menú de navegación a diversa información básica para comenzar a jugar y en caso, de ya manejar estos conocimientos, puede ir directamente a conocer los dos perfiles de jugador que tiene la app Pokemon Go, siendo ésta sección el enfoque del sitio web. La idea es dirigir la dinámica de juego del jugador principiante, ya que según la elección del perfil, el usuario conocerá qué aspectos técnicos son relevantes para cada uno.

Funcionalidad
La aplicación web "MaestroPoke" fue implementada utilizando las tecnologías: HTML5, CSS, flexbox, mediaquery y JS ECMA6.
Permite que el jugador principiante eliga un perfil de juego, y en base a eso obtener información útil para adquirir mejores habilidades que lo distingan como un buen maestro recolector o maestro guerrero. Además, el sitio web cuenta con una sección de información general complementaria para obtener y/o reforzar conocimientos sobre la app Pokemon Go.

Intrucciones de uso
La página de inicio tiene un menú de navegación con 4 botones: el primer botón sitúa al usuario en inicio, el segundo botón lleva a la sección de "tipos de pokemones" en donde se puede filtrar mediante un select (menú desplegable) que muestra todos los tipos de pokemones y al seleccionar uno de ellos, arroja en una tabla el nombre e imagen de los pokemones correspondientes a ese tipo. En el tercer botón lleva a conocer los 10 pokemones que más aparecen en el exterior y el último botón permite conocer información ,a grandes rasgos, sobre la captura de los pokemones.
Luego sigue la parte principal del sitio web, en donde se invita al usuario a seleccionar un perfil de juego mediante dos botones: maestro recolector y maestro guerrero. Al acceder a "maestro recolector", el usuario podrá buscar por nombre del pokemon para conocer sus evoluciones, y la cantidad de kms y caramelos que necesita para evolucionar. Si opta por el perfil de "maestro guerrero" podrá ordenar los pokemones en: los más fuertes y más débiles; y además existe un botón que lo dirige a una página donde aparecen los pokemones más ganadores, atacantes y defensores, con su respectivo nombre y foto.

Solución del problema
El producto digital creado satisface las necesidades del usuario que fueron pesquizadas en la entrevista y que se ciñen a los hallazgos de la investigación. El usuario efectivamente puede obtener información útil para comenzar a jugar Pokemon Go.


























