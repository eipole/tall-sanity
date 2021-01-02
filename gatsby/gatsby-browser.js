import React from 'react'
import "./src/styles/global.css"
import "typeface-source-code-pro"
import "typeface-source-sans-pro"
import Layout from './src/components/layout'
import Provider from './src/components/provider'


export function  wrapPageElement({ element, props }){
    return <Layout {...props}>{element}</Layout>
  }

  export function wrapRootElement({element}){
    return <Provider>{element}</Provider>
  }