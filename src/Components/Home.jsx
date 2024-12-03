import image from '../images/artgallery.jpeg'

const Home = () => {

    return (
        <>
        <div className='home-banner'>
        <img className="home-image" src={image}/>
        <div className='home-text'>
        <p> Search for artworks to add to your own personal exhibition</p>
        </div>
        </div>
        </>
    )
}

export default Home