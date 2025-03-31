import '../styles/nosotras.css'
import Logo from "../img/logos/LuzDeTinta-letras-azules.svg";


const Nosotras = () => {

    return (
        <section className='nosotras'>
            <div className='nosotras-container'>
                <div className='nosotras-logo'>
                    <img src={Logo} alt="logotipo"/>
                </div>
                <div className='nosotras-info'>
                    <h1>Nosotras</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit porttitor, feugiat etiam risus metus eu integer vehicula mi ornare, vel dapibus potenti dictum rhoncus donec at est. Habitasse interdum pellentesque lacinia sodales curae libero hendrerit suspendisse venenatis, suscipit quis mus ac turpis ullamcorper aliquam pretium, urna tellus neque vitae vel fusce aliquet dignissim. Vestibulum fringilla cubilia lacus vehicula in dictumst eros ultricies congue, himenaeos mus et sodales auctor risus euismod turpis etiam, iaculis cras at praesent eu libero integer facilisis.</p>
                </div>
            </div>
        </section>
    )
}

export default Nosotras