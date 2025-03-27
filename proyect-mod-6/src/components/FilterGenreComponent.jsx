import '../styles/FilterGenre.css'


const FilterGenre = () => {

    return (
        <div className='select-container'>
        <div className="box">
            <select className='select'>
                <option value="0">Selecciona por género</option>
                <option value="1">Fantasía</option>
                <option value="2">Ciencia ficción</option>
                <option value="3">Misterio</option>
                <option value="4">Drama</option>
                <option value="5">Terror</option>
                <option value="6">Aventura</option>
                <option value="7">Romántico</option>
                <option value="8">Histórico</option>
                <option value="9">Thriller</option>
                <option value="10">Novela negra</option>
                <option value="11">Cuentos cortos</option>
                <option value="12">Ficción contemporánea</option>
            </select>
        </div>
        </div>
    )
}

export default FilterGenre