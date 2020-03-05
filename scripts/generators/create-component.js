const fs = require('fs')
const { kebabToPascalCase } = require('./utils')

const componentName = process.argv[2]

if (!componentName) {
  console.log('The component name is required.')
  process.exit(1)
}

const folderPath = `./src/ui/components/${componentName}`
const filePath = `${folderPath}/${componentName}.component.jsx`
const stylePath = `${folderPath}/${componentName}.style.scss`

const className = kebabToPascalCase(componentName)

const functionalComponentFileContent = `import React from 'react'
import PropTypes from 'prop-types'

import './${componentName}.style.scss'

export const ${className} = ({}) => {
  return (
    <div className="${componentName}">

    </div>
  )
}

${className}.defaultProps = {}
${className}.propTypes = {}
`

const styleFileContent = `
.${componentName} {
  
}
`

fs.mkdirSync(folderPath)
fs.writeFileSync(filePath, functionalComponentFileContent)
fs.writeFileSync(stylePath, styleFileContent)
fs.appendFileSync(
  './src/ui/components/index.js',
  `\nexport { ${className} } from './${componentName}/${componentName}.component'`,
  function(err) {
    if (err) return console.log(err)

    console.log(`Component created in ${filePath}`)
  }
)
