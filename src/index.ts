import {
  CompilerPlugin,
  isXmlFile,
  ProvideCompletionsEvent,
  XmlFile,
} from 'brighterscript';
import { SGXmlCompletionProvider } from './SGXmlCompletionProvider';
import { randomUUID } from 'crypto';

export class BscXmlPlugin implements CompilerPlugin {
  name: string = 'bsc-xml-plugin';
  id: string = randomUUID();

  constructor() {
    // console.log('creating bsc xml plugin');
  }

  provideCompletions(completionEvent: ProvideCompletionsEvent) {
    if (isXmlFile(completionEvent.file)) {
      return new SGXmlCompletionProvider(completionEvent.program).process(
        completionEvent as ProvideCompletionsEvent<XmlFile>
      );
    }
  }
  // provideHover(event: ProvideHoverEvent) {}
}

export default () => {
  return new BscXmlPlugin();
};
