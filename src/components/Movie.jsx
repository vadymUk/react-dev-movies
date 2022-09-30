function Movie(props) {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props;

    return (
        <div id={imdbID} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {Poster === 'N/A' ? (
                    <img
                        className='activator'
                        src={`https://via.placeholder.com/300x420?text=${Title}`}
                        alt="card"
                    />
                ) : (
                    <img className='activator' 
                        src={Poster}
                        alt="card" />
                )}
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}</span>
                <p>{Year} <span>{Type}</span></p>
            </div>
        </div>
    )

};

export { Movie };