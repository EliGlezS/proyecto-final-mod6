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
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit porttitor, feugiat etiam risus metus eu integer vehicula mi ornare, vel dapibus potenti dictum rhoncus donec at est. Habitasse interdum pellentesque lacinia sodales curae libero hendrerit suspendisse venenatis, suscipit quis mus ac turpis ullamcorper aliquam pretium, urna tellus neque vitae vel fusce aliquet dignissim. Vestibulum fringilla cubilia lacus vehicula in dictumst eros ultricies congue, himenaeos mus et sodales auctor risus euismod turpis etiam, iaculis cras at praesent eu libero integer facilisis.</p>
                </div>
                <div className='nosotras-name'>
                    <a href='https://github.com/EliGlezS'>Eli</a>
                    <a href='https://github.com/ElenaDelHer'>Elena</a>
                    <a href='https://github.com/tinadanit'>Ifara</a>
                </div>
            </div>
        </section>
    )
}

export default Nosotras