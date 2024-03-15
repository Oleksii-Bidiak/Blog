import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const isAbsolutePath = (value: string) => {
    const layers = ['app', 'entities', 'features', 'pages', 'widgets', 'shared']
    return layers.some(layer => value.startsWith(layer))
}

files.forEach(sourceFile => {
    const importDeclaretions = sourceFile.getImportDeclarations()
    importDeclaretions.forEach(importDeclaretion => {
        const value = importDeclaretion.getModuleSpecifierValue()

        if (isAbsolutePath(value)) {
            importDeclaretion.setModuleSpecifier(`@/${value}`)
        }
    })
})

project.save()
