'use strict'

import React from 'react'
import ReactDom from 'react-dom'
// import Lazyman from '../action/Lazyman'
// require('../action/findMost')
require('../action/ObjectProxy')

var App = React.createClass({
  render: function() {
    return <div />
  }
})

//最终渲染
ReactDom.render(<App />, document.getElementById('app'))
