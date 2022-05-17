"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = __importStar(require("typescript"));
function myTransformerPlugin(program, pluginOptions) {
    return {
        before: function (context) {
            return function (sourceFile) {
                var visitor = function (node) {
                    // console.log(node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`);
                    //Check if the node is Interface Decleration
                    if (ts.isInterfaceDeclaration(node)) {
                        return [
                            ts.createImportDeclaration(undefined, undefined, ts.createImportClause(undefined, ts.createNamedImports([ts.createImportSpecifier(undefined, ts.createIdentifier("HttpServiceInvoker"))])), ts.createStringLiteral("@ainosoft/appops-core-components/components/appops-common/fetch-br/dist/http-service-invoker.js")),
                            ts.createClassDeclaration(undefined, [ts.createModifier(ts.SyntaxKind.ExportKeyword)], ts.createIdentifier(node.name["escapedText"].toString()), undefined, undefined, memberDeclaration(node.members))
                        ];
                    }
                    /**
                     * Create class method.
                     * @param members Information about members
                     */
                    function memberDeclaration(members) {
                        var memberArray = [];
                        //  memberArray.push(createConstructor());
                        for (var i = 0; i < members.length; i++) {
                            memberArray.push(ts.createMethod(undefined, undefined, undefined, ts.createIdentifier(members[i].name["escapedText"].toString()), undefined, undefined, createParameterList(members[i].parameters), 
                            //For creating the type
                            ts.createTypeReferenceNode(ts.createIdentifier(members[i].type.typeName['escapedText']), [ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)]), ts.createBlock([ts.createReturn(ts.createNew(ts.createIdentifier("HttpServiceInvoker"), undefined, methodBody(members[i].parameters)))], true)));
                        }
                        return memberArray;
                    }
                    /**
                     * Create Parameter List
                     * @param param Imformation about parameters
                     */
                    function createParameterList(param) {
                        var paramaterArray = [];
                        for (var i = 0; i < param.length; i++) {
                            //console.log("In param", param[i].name['escapedText'])
                            paramaterArray.push(ts.createParameter(undefined, undefined, undefined, ts.createIdentifier(param[i].name['escapedText']), undefined, ts.createTypeReferenceNode(ts.createIdentifier("String"), undefined), undefined));
                        }
                        return paramaterArray;
                    }
                    /**
                     * Create identifier for metho body.
                     * @param param
                     */
                    function methodBody(param) {
                        var paramaterArray = [];
                        for (var i = 0; i < param.length; i++) {
                            paramaterArray.push(ts.createIdentifier(param[i].name['escapedText']));
                        }
                        return paramaterArray;
                    }
                    /**
                     * Create the constructor for the class
                     */
                    function createConstructor() {
                        return ts.createConstructor(undefined, undefined, [ts.createParameter(undefined, undefined, undefined, ts.createIdentifier("fetchBr"), undefined, undefined, undefined)], ts.createBlock([ts.createExpressionStatement(ts.createBinary(ts.createPropertyAccess(ts.createThis(), ts.createIdentifier("fetchBr")), ts.createToken(ts.SyntaxKind.EqualsToken), ts.createIdentifier("fetchBr")))], true));
                    }
                    /**
                     * Get the type is httppost or httpget
                     * @param param
                     */
                    function setRequestType(param) {
                        return param[param.length - 1].name["escapedText"];
                    }
                    return ts.visitEachChild(node, visitor, context);
                };
                return ts.visitNode(sourceFile, visitor);
            };
        }
    };
}
exports.default = myTransformerPlugin;
