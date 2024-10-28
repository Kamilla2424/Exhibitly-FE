import ArtworkCard from "./ArtworkCard"

const ArtworkList = ({allArtwork}) => {

    console.log(allArtwork)
    return (
        <>
        {allArtwork.map((artwork) => {
            return (
                    <ArtworkCard key={artwork.id} artwork={artwork}/>
            )
        })}
        </>
    )
}

export default ArtworkList
