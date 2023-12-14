# Nextflow: React TypeScript Starter (with ViteJS)

## Debuggin via VSCode

1. Install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension
2. Create a new launch configuration in `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome against localhost",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

3. Start the app in debug mode: `npm run dev`
4. Start the debugger in VSCode