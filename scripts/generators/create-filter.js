const fs = require('fs')
const { kebabToPascalCase } = require('./utils')

const componentName = process.argv[2]

if (!componentName) {
  console.log('The component name is required.')
  process.exit(1)
}

const folderPath = `./src/ui/segmentations/${componentName}`
const filePath = `${folderPath}/${componentName}.component.jsx`
const stylePath = `${folderPath}/${componentName}.style.js`

const className = kebabToPascalCase(componentName)

const functionalComponentFileContent = `import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { Div } from 'app-atoms'

import styles from './${componentName}.style'

const ${className} = ({ classes }) => {
  return (
    <Div>

    </Div>
  )
}

${className}.propTypes = {}

const ${className}Styled = withStyles(styles)(${className})
export { ${className}Styled as ${className} }
`

const styleFileContent = `export default {
  
}
`

fs.mkdirSync(folderPath)
fs.writeFileSync(filePath, functionalComponentFileContent)
fs.writeFileSync(stylePath, styleFileContent)
fs.appendFileSync(
  './src/ui/segmentations/index.js',
  `\nexport { ${className} } from './${componentName}/${componentName}.component'`,
  function(err) {
    if (err) return console.log(err)

    console.log(`Component created in ${filePath}`)
  }
)
