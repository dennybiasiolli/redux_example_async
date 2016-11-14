import React, { PropTypes } from 'react'

const Quote = ({quote}) => (
  <div>
    <blockquote><i>{quote.frase}</i></blockquote>
    <div>{quote.autore}</div>
  </div>
)

Quote.propTypes = {
  quote: PropTypes.object.isRequired
}

export default Quote
