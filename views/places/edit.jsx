const React = require('react')
const Def = require('../default.jsx')

function edit_form({place, index}) {
    return (
        <Def>
            <main>
                <h1>Edit {place.name}</h1>
                <form method="POST" action={`/places/${index}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" defaultValue={place.name} required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" type="url" id="pic" name="pic" defaultValue={place.pic} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" defaultValue={place.city} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" defaultValue={place.state} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" id="cuisines" name="cuisines" defaultValue={place.cuisine} required />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
