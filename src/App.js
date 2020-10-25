import Comentario from './components/Comentario'
import Saludo from './components/Saludo'

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Pepito' edad={20}/>
      <Saludo persona='Juanito' edad={56}/>
      <Saludo persona='Manolito' edad={10}/>
      <hr/>
      <h3>Caja de comentarios</h3>
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Pepito'
        texto='asdasdasdaeweasdasd'
      />
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Juanito'
        texto='hghghghghghghghghghg'
      />
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Manolito'
        texto='ytytytytytytytytytyty'
      />
    </div>
  );
}

export default App;
