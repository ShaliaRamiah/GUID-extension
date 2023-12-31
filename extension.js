const vscode = require('vscode');

function generateGUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	  const r = (Math.random() * 16) | 0;
	  const v = c === 'x' ? r : (r & 0x3) | 0x8;
	  return v.toString(16);
	});
  }

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerTextEditorCommand(
        'extension.generateGUID',
        (textEditor, edit) => {
            const position = textEditor.selection.active;
            const guid = generateGUID();
            edit.insert(position, guid);
        }
    );
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
