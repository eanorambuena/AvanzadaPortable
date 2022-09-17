"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const LEVELS = ['Error', "Warn", "Info", "Hint"];
let disposables;
let diagCollection;
function activate() {
    var _a, _b, _c;
    let config = vscode.workspace.getConfiguration('line-length-checker');
    let max = config.lineLength;
    let level = LEVELS.indexOf(config.level);
    let workspaceOnly = config.workspaceOnly;
    let blacklist = config.blacklist;
    let blacklistFilters = ((_b = (_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a.flatMap(folder => blacklist.map(pattern => ({
        pattern: new vscode.RelativePattern(folder, pattern)
    })))) !== null && _b !== void 0 ? _b : []).concat({ scheme: 'git' }, { scheme: 'vscode' }, { scheme: 'vscode-userdata' });
    let workspaceFilters = (_c = vscode.workspace.workspaceFolders) === null || _c === void 0 ? void 0 : _c.map(folder => ({ pattern: new vscode.RelativePattern(folder, '**') }));
    diagCollection = vscode.languages.createDiagnosticCollection('overlength');
    vscode.workspace.textDocuments.forEach(document => {
        checkOverlength(document);
    });
    disposables = [
        vscode.commands.registerCommand('line-length-checker.reload', reload),
        vscode.workspace.onDidChangeTextDocument(event => {
            if (event.document !== undefined) {
                checkOverlength(event.document);
            }
        }),
        vscode.workspace.onDidOpenTextDocument(document => {
            checkOverlength(document);
        })
    ];
    function reload() {
        const config = vscode.workspace.getConfiguration('line-length-checker');
        max = config.lineLength;
        workspaceOnly = config.workspaceOnly;
        blacklist = config.blacklist;
        level = LEVELS.indexOf(config.level);
        console.log(level);
        diagCollection.clear();
        vscode.workspace.textDocuments.forEach(document => {
            checkOverlength(document);
        });
    }
    function checkOverlength(document) {
        var _a;
        if (((workspaceOnly && workspaceFilters
            && !vscode.languages.match(workspaceFilters, document))) || vscode.languages.match(blacklistFilters, document)) {
            console.log("Skipped: " + document.uri.toString());
            return;
        }
        console.log("Checking: " + document.uri.toString());
        let diags = [];
        let tabSize = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.options.tabSize;
        tabSize = typeof tabSize === 'number' ? tabSize : 1;
        let i = 0;
        while (i < document.lineCount) {
            const text = document.lineAt(i).text;
            const rawLength = text.length;
            const length = text.replaceAll('\t', " ".repeat(tabSize)).length;
            if (length > max) {
                diags.push(new vscode.Diagnostic(new vscode.Range(new vscode.Position(i, max - (length - rawLength)), new vscode.Position(i, rawLength)), `Overlength line: ${length} columns`, level));
            }
            i++;
        }
        diagCollection.set(document.uri, diags);
    }
}
exports.activate = activate;
function deactivate() {
    diagCollection.clear();
    disposables.forEach(disp => disp.dispose());
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map