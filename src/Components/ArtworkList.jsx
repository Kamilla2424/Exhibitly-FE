import ArtworkCard from "./ArtworkCard"
import { useEffect, useState } from "react";

const ArtworkList = ({allArtwork, onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearch = () => {
      setLoading(true)
      onSearch(searchTerm);
      setSearchTerm('');
    };

    useEffect(() => {
      if(allArtwork.length > 0){
        setLoading(false)
      }
    }, [allArtwork])

    return (
        <>
        <input
        className="search-input"
        type="text"
        placeholder="Search artworks..."
        value={searchTerm}
        onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
        {loading ? (
          <p>Loading...</p>
        ) : (
        <div className="artwork-list">
        {allArtwork.map((artwork) => {
          return (
            <ArtworkCard key={artwork.id} thisArtwork={artwork}/>
            )
        })}
        </div>
        )}
        </>
    )
}

export default ArtworkList
