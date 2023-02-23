const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
        <p>Photo by Aron Visuals on Unsplash<img src="/images/aron-visuals-4zxSWESyZio-unsplash.jpg" alt="moon"/></p>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>

      </main>
    </Def>
  )
}


module.exports = home

