import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Loader = () => (
  <div style={{display: 'flex', justifyContent: 'center', paddingTop: '2rem'}}>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
)
