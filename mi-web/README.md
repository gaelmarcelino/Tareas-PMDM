#  Portal Hogar

---

##  ¿Qué es el proyecto?

Aplicación web de viviendas desarrollada con **React** y **Vite**.  
Utiliza **json-server** para servir los datos de prueba.

---

##  Instalación

Para instalar las dependencias del proyecto, ejecutar:

```bash
npm install
```

Comprobar que **Node.js** está instalado.

---

##  Arranque

Para iniciar React, ejecutar:

```bash
npm run dev
```

Para iniciar json-server en el puerto `3001`, ejecutar:

```bash
npm start
```

Finalmente, abrir en el navegador la dirección indicada por Vite.


#### Cambiamos el valor html "lang html en" por "es" ya que tenemos el texto en español





## 2.1 ¿Qué hay dentro de los datos?

| Campo | Tipo de dato | Uso |
|---|---|---|
| `id` | Texto | Identificar la vivienda. |
| `referencia` | Texto | Identificar la vivienda mediante una referencia única. |
| `convocatoriaId` | Número | Relacionar la vivienda con su convocatoria. |
| `provincia` | Texto | Filtrar viviendas por provincia. |
| `municipio` | Texto | Buscar viviendas por municipio. |
| `codigoPostal` | Texto | Identificar la zona postal de la vivienda. |
| `tipologia` | Texto | Indicar el tipo de vivienda, por ejemplo, estudio. |
| `dormitorios` | Número | Filtrar por número de dormitorios. |
| `superficie` | Número | Consultar y ordenar por metros cuadrados. |
| `renta` | Número | Consultar y comparar el alquiler. |
| `planta` | Número | Indicar la planta en la que está la vivienda. |
| `ascensor` | Booleano (`true`/`false`) | Indicar si tiene ascensor. |
| `accesibilidad` | Texto | Indicar las características de accesibilidad. |
| `eficiencia` | Texto | Mostrar la clasificación energética. |
| `adjudicada` | Booleano (`true`/`false`) | Indicar si la vivienda ya ha sido adjudicada. |
| `descripcion` | Texto | Mostrar información adicional sobre la vivienda. |



##  Valor null

El valor `null` significa que no hay ningún dato disponible. Por ejemplo, si no sabemos si una vivienda está adaptada, puede aparecer `null` en el campo `accesibilidad`. Esto no significa que no esté adaptada, sino que no tenemos esa información.

##  ConvocatoriaID de la vivienda

La vivienda 1 está relacionada con la convocatoria 5, que tiene estos datos:

- **Código:** 26-6-LUG.
- **Estado:** resuelta.
- **Fecha de cierre:** 29/08/2026.

No se puede solicitar porque la convocatoria ya está resuelta y el plazo terminó.