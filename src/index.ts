import {
  BeforeProvideCompletionsEvent,
  BscFile,
  CompilerPlugin,
  isXmlFile,
  OnFileValidateEvent,
  Program,
  ProvideCompletionsEvent,
  XmlFile,
} from 'brighterscript';
import { SGXmlCompletionProvider } from './SGXmlCompletionProvider';
import { SGXmlValidator } from './SGXmlValidator';

export class BscXmlPlugin implements CompilerPlugin {
  name: string = 'bsc-xml-plugin';
  provider: SGXmlCompletionProvider | undefined
  validator: SGXmlValidator | undefined

  getValidator(validateEvent: OnFileValidateEvent<BscFile>) {
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

  beforeProvideCompletions(event: BeforeProvideCompletionsEvent<BscFile>) {
    if (isXmlFile(event.file)) {
      this.getProvider(event.program).process(event as ProvideCompletionsEvent<XmlFile>)
    }
  }

  onFileValidate(event: OnFileValidateEvent<BscFile>) {
    if (isXmlFile(event.file)) {
      this.getValidator(event).validateXmlFile(event)
    }
  }
}

export default () => {
  return new BscXmlPlugin();
};
