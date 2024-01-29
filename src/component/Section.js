
import CardList from './CardList'

const Section = () => {
  return (
    <>
        <div className="container">
          <div className="folderMovies">
            <h2>Kame House</h2>
            <h3>Aquí encontraras todas las pelis de tus guerreros favoritos!</h3>
          </div>
          <div>
            <CardList />
          </div>
        </div>
      </>
      )
}

      export default Section
