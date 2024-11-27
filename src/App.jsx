import React from 'react'
import Chart from './components/Chart'
import Main from './components/Main'
import Header from './components/Header'
import Section from './components/Section'
import ChartTwo from './components/ChartTwo'
import FooterChart from './components/FooterChart'

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Chart />
      <ChartTwo/>
      <Section/>
      <FooterChart/>
    </div>
  )
}

export default App
