import React from 'react'
import "./src/styles/global.css"
import "typeface-source-code-pro"
import "typeface-source-sans-pro"
import Layout from './src/components/layout'

export function  wrapPageElement({ element, props }){
    return <Layout {...props}>{element}</Layout>
  }