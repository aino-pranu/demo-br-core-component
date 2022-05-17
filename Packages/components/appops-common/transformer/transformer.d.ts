import * as ts from 'typescript';
export default function myTransformerPlugin(program: ts.Program, pluginOptions: {}): {
    before(context: ts.TransformationContext): (sourceFile: ts.SourceFile) => ts.SourceFile;
};
