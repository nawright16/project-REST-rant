const React = require('react')
const Def = require('../default')

function show({place}) {
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <img src={place.pic} alt={place.name} /> 
                <h3>Located in {place.city},{place.state}</h3>
            </main>
            <body>
                <h2>Rating</h2>
                <p>Not Rated</p>
                <h2>Description</h2>
                <h3>{place.showEstablished()}</h3>
                <h4>
                    Serving {place.cuisines}
                </h4>
                <h2>Comments</h2>
                <p>No Comments</p>
                <a href={`/places/${place.id}/edit`} className="btn btn-warning">
                    Edit
                </a>

                <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </body>
        </Def>
    )
}

module.exports = show
