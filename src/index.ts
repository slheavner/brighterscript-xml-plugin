import {
  BscFile,
  isAssetFile,
  isXmlFile,
  Plugin,
  Program,
  ProvideCompletionsEvent,
  ValidateFileEvent,
  XmlFile,
} from 'brighterscript';
import { SGXmlCompletionProvider } from './SGXmlCompletionProvider';
import { SGXmlValidator } from './SGXmlValidator';
import SGParser from 'brighterscript/dist/parser/SGParser';

//@ts-ignore
SGParser.prototype._mapNode = SGParser.prototype.mapNode
//@ts-ignore
SGParser.prototype.mapNode = function (node: ElementCstNode) {
  if (!node.children.Name) {
    node.children.Name = []
  }
  //@ts-ignore
  return this._mapNode(node)
}

export class BscXmlPlugin implements Plugin {
  name: string = 'bsc-xml-plugin';
  provider: SGXmlCompletionProvider | undefined
  validator: SGXmlValidator | undefined

  getValidator(validateEvent: { program: Program }) {
    if (!this.validator) {
      this.validator = new SGXmlValidator(validateEvent.program)
    }
    return this.validator
  }

  getProvider(program: Program) {
    if (!this.provider) {
      this.provider = new SGXmlCompletionProvider(program)
    }
    return this.provider
  }

  provideCompletions(event: ProvideCompletionsEvent<BscFile>) {
    console.log('provideCompletions', event.file.constructor.name)
    if (isXmlFile(event.file)) {
      console.log(event.completions)
      this.getProvider(event.program).process(event as ProvideCompletionsEvent<XmlFile>)
    }
  }

  validateFile(event: ValidateFileEvent<BscFile>) {
    if (isXmlFile(event.file)) {
      this.getValidator(event).validateXmlFile(event)
    }
  }
}

export default () => {
  return new BscXmlPlugin();
};
