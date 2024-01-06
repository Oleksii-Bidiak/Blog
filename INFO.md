# Info

## WebpackBuild

### Plugins

 - webpack.WebpackPluginInstance[]: типи для плагінів (повертається масив плагінів)

1. HTMLWebpackPlugin
Робота із html файлами

2. ProgressPlugin
Плагін для налаштування звітування про прогрес під час компіляції

### Loaders

 - webpack.RuleSetRule[]: типи для лоадерів 

### Resolvers

 - ResolveOptions: типи для resolve

### DevServer

 - Для налаштування читати [тут](https://github.com/webpack/webpack-dev-server)

### React

	Бібліотеки react & react-dom встановлюються як реальні
	@types/react & @types/react-dom як devDependencies

### Typescript
 - Для роботи із typescript необхідно встановити пакети 
	[typescript та ts-loader](https://webpack.js.org/guides/typescript/)
 - Про те, як конфігурувати webpack на typescript можна почитати [тут](https://webpack.js.org/configuration/configuration-languages/)

```typescript
// Імпорт типів для файлу конфігурації
import { Configuration as WebpackConfiguration } from 'webpack'
```