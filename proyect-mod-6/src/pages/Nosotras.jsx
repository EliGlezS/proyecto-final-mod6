import '../styles/nosotras.css'
import perfil1 from '../img/nosotras/perfil01.svg'
import perfil2 from '../img/nosotras/perfil02.svg'
import perfil4 from '../img/nosotras/perfil04.svg'

const Nosotras = () => {

    return (
        <section className='nosotras'>
            <div className='nosotras-container'>
                <div className='nosotras-image'>
                    <img src={perfil1} className='img-eli' alt='Eli'/>
                    <img src={perfil2} className='img-elena' alt='Elena'/>
                    <img src={perfil4} className='img-ifara' alt='Ifara'/>
                </div>
                <div className='nosotras-info'>
                    <h1>Nosotras</h1>
                    <p>Somos Elena, Ifara y Elizabeth, tres apasionadas del desarrollo web que, tras completar el bootcamp de Front-End de <a href='https://codespaceacademy.com/'>Codespace</a>, hemos creado algo que al inicio parecía inimaginable: una editorial digital funcional y atractiva. Venimos de mundos distintos, pero unimos fuerzas, creatividad y conocimientos para dar vida a este proyecto. Ha sido un viaje desafiante y gratificante, que nos ha impulsado aún más a seguir aprendiendo y creciendo en este apasionante camino tecnológico. ¡Esto es solo el comienzo!</p>
                </div>
                <div className='nosotras-name'>
                    <a href='https://github.com/ElenaDelHer'>Elena</a>
                    <a href='https://github.com/EliGlezS'>Eli</a>
                    <a href='https://github.com/tinadanit'>Ifara</a>
                </div>
            </div>
        </section>
    )
}

export default Nosotras