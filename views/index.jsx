const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/default')

function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        {/* <p>I have {breads[0].name} bread!</p> */}
        <ul>
          {
            breads.map((bread, id) => {
              return (<li key={id} >
                <a href={`/breads/${bread.id}`}>
                  {bread.name}
                </a>
              </li>)
            })
          }
        </ul>
        <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
      </Default>
    )
}

module.exports = Index