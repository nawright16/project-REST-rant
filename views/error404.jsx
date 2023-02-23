const React = require('react')
const Def = require('./default')

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!
          Photo by Tirza van Dijk on Unsplash
          <img src="images/tirza-van-dijk-hbwdmqcmP6k-unsplash.jpg" alt="fire" />
        </p>
      </main>
    </Def>
  )
}


module.exports = error404

