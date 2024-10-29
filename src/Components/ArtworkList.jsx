import { fetchArtworks1 } from "../../utils";
import ArtworkCard from "./ArtworkCard"
import { useState } from "react";

const ArtworkList = ({allArtwork, onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(searchTerm);
      setSearchTerm('');
    };

    if(!allArtwork){
        return <p>Loading...</p>
    }

    return (
        <>
        <input
        type="text"
        placeholder="Search artworks..."
        value={searchTerm}
        onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
        {allArtwork.map((artwork) => {
            return (
                    <ArtworkCard key={artwork.id} thisArtwork={artwork}/>
            )
        })}
        </>
    )
}

export default ArtworkList
