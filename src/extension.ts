import { type ExtensionContext, commands, window } from 'vscode'

export function activate(context: ExtensionContext) {
  globalThis.console.log('Congratulations, your extension "vscode-component-demo-comments" is now active!')

  const disposable = commands.registerCommand('vscode-component-demo-comments.helloWorld', () => {
    window.showInformationMessage('Hello World from vscode-component-demo-comments!')
  })

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() { }
