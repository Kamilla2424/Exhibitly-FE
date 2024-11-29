import ArtworkCard from "./ArtworkCard"
import { useEffect, useState } from "react";

const ArtworkList = ({allArtwork, onSearch, handleShow}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false)
    const [searched, setSearched] = useState(false)

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearch = () => {
      if(searchTerm.length === 0) return;
      setSearched(true)
      setLoading(true)
      onSearch(searchTerm);
      setSearchTerm('');
    };

    useEffect(() => {
      if(allArtwork.length > 0 || searched){
        setLoading(false)
      }
    }, [allArtwork, searched])

    return (
        <>
        <div className="search">
        <input
        className="search-input"
        type="text"
        placeholder="Search artworks..."
        value={searchTerm}
        onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
        {loading ? (
          <p>Loading...</p>
          ) : searched && allArtwork.length === 0 ? (
            <p>No results found. Try another search.</p>
          ) : (
        <div className="artwork-list">
        {allArtwork.map((artwork) => {
          return (
            <ArtworkCard key={artwork.id} thisArtwork={artwork} handleShow={handleShow}/>
            )
        })}
        </div>
        )}
        </>
    )
}

export default ArtworkList
