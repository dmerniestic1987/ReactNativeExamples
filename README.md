# React Native.

**await** solo se utiliza con funciones asincrónicas y sirve para 
resolve una promesa.


# Componentes de Listas
Se pueden armar listas de items con: 

- **FlatList**: Toda la lista sin secciones. 
- **SectionList**: Similar al listado de los contactos con un título 
(La primera letra del contacto).

## FlatList
Las flatList aceptan al menos 3 props:

- data: Un array con los datos para mostrar. 
- renderItem: Es una función que permite renderizar los datos.
- keyExtractor: Es una función para sacar la Key de la lista. El nombre por 
default es **key** que es del tipo String. 

```js
  <FlatList
    data={users}
    renderItem={({item}) => (
      <Text style={styles.item}>
        {item.id} : {item.email}{' '}
      </Text>
    )}
    keyExtractor={item => String(item.id)}
  />
```
[Documentación oficila de FlatList](https://reactnative.dev/docs/flatlist)

## SectionList
Las SectionList aceptan al menos 3 props: 

- sections: Un array de objetos {title: "Titulo", data: []}
- renderItem: Es una función para renderizar los items. 
- renderSectionHeader: Para renderizar los títulos que separan a las listas 
agrupadas.

[Documentación oficial de SectionList](https://reactnative.dev/docs/sectionlist)

## Consumir datos desde nuestra API. 
Se usan los hooks: 

- useState: Permite leer y actualizar el estado de un componente. 
- useEffect: Para traernos los datos desde nuestra api. Utiliza **efectos**.

Un **efecto** es cualquier cosa asincrónica que pueda ocurrir  cuyo resultado no
conocemos. Ejemplos: Escribir en un base de datos, leer o escribir los datos de 
una API. 

Usamos useEffect para consultar la API con **fetch**. Con el primer then se obtiene
la respuesta http y con el segundo obtenemos el cuerpo del JSON.

```js
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Text>Loading</Text>;
  }
```

## ActivityIndicator
El ActivityIndicator es un spinner que se muestra cuando realizamos alguna llamada
asincrónica, por ejemplo cuando esperamos la respuesta de una consulta a una api REST.
Admite dos parámetros:

- size: Que puede ser **large** o **small**.
- color: El color en hexa
```js
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }
```
[Documentación oficial de ActivityIndicator](https://reactnative.dev/docs/activityindicator)

# Modales
Tenemos que importar **Modal** de react-native.
Usamos el hook **useState** para saber si el modal se debe mostrar o no. 
```js
  const [ modal, setModal ] = useState(false);
```

Luego creamos otra función que servirá para mostrar el modal, y dibujará
un título y un texto. 

```js
	const showModal = (title, text) => {
		setModal(true);
		setModalTitle(title);
		setModalText(text);
	};
```
Modal admite al menos 3 props: 

- animationType: Es el tipo de animación que se va a mostrar el modal. los valores posibles son: __slide__, __fade__ y __none__.
- transparent: True si el modal es transparente.
- visible: True si se debe mostrar el modal.
- onRequestClose: Función que se invoca cuando el usuario quiere cerrar el modal. 

```js
  <Modal transparent={true} visible={modal}>
    <View style={styles.modalContent}>
      <Text style={styles.title}>{modalTitle}</Text>
      <Text style={styles.modalText}>{modalText}</Text>
      <Button title="Cerrar" onPress={() => setModal(!modal)} />
    </View>
  </Modal>
```
[Documentación oficial de Modal](https://reactnative.dev/docs/modal).

# Hooks
Los hooks se utiliza en componentes funcionales, no en clases, por ejemplo: 
```js
  export default function ComponenteFuncion() {
    return(
      <View><Text>Hola Manona, componente con función.</Text></View>
    );
  }
```
La mayoría de los hooks devuelve un array. 

## useState
El hook se utiliza para agregarle estado al componente funcional. Cuando se usa
devuelve un array con dos componentes:

- El primero es un valor de solo lectura del estado de la variable. 
- El segundo es una función que permite cambiar dicho estado. 

```js
const FlatListExampleWithApi: () => React$Node = (props) => {
  const [ users, setUsers ] = useState([]);
  const [ loading, setLoading ] = useState(true);
...
}
```

## useEffect
Este hook se utiliza para realizar llamadas asincrónicas como leer o escribir recursos (por ejemplo API, archivo, BD, etc). Por lo general se llama cada vez que se renderiza el 
componente.
El hook admite dos parámetros: 

- Una función con el código a ejecutar.
- Un arreglo que se actualiza con los datos. Si se pasa vacío se ejecuta una sola vez, 
si se pasa null, se ejecuta cada vez que se renderiza el componente. 

```js
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    setUsers(data);
    setLoading(false);
  });
}, []);
```

useEffect por default no permite funciones asincrónicas. Si necesitamos
esa situación podemos crear una función afuera del hook y llamarla.

```js
const fetchUsers = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await response.json();
  setUsers(json);
  setLoading(false);
}
useEffect(() => { fetchUsers() }, []);
```

## useReducer
Permite utilizar funciones reductoras de manera similar a Redux. 
La idea es manejar un estado inicial de sólo lectura que se puede actualizar
solamente con una función reductora y se pueden despachar acciones con **dispatch**.

## useMemo
Se utiliza cuando se tiene que hacer un cálculo muy pesado para los componentes, 
por ejemplo traer muchos resultados o algún cálculo muy difícil.

## useCallback
Hay veces que los componentes se debe renderizar muchas veces. Cada vez que ocurre
este se instancian muchas funciones, pero puede ser problemático para la performance. useCallback es similar a useMemo, pero instancia una única función.

**useMemo** y **useCallback** solo se deben utilizar si hay problemas de rendimientos, 
sino hay que tratar de no usarlos.

[Documetación oficial de Hooks](https://es.reactjs.org/docs/hooks-intro.html)