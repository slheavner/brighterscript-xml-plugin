import { describe } from 'mocha';
import { join } from 'path';
import { Program, ProgramBuilder, XmlFile, util } from 'brighterscript';
import { readFileSync } from 'fs';
import { BscXmlPlugin } from '.';
import { expect } from 'chai';

function componentWithChildren(children: string) {
  return `<component name="Test" extends="Group">
  <children>
    ${children}
  </children>
</component>`;
}

describe('XmlProvider class', () => {
  let program: Program;
  beforeEach(async function () {
    const builder = new ProgramBuilder();
    const options = JSON.parse(readFileSync('sample/bsconfig.json').toString());

    builder.plugins.add(new BscXmlPlugin());
    await builder.run({
      ...options,
      cwd: join(__dirname, '../sample'),
    });
    program = builder.program;
  });

  afterEach(() => {
    program.dispose();
  });

  it('suggests component for empty file', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, '');
    program.validate();
    const result = program.getCompletions(
      file.srcPath,
      util.createPosition(0, 0)
    );
  });

  it('suggests components in whitespace inside children tags', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(path, componentWithChildren('         '));
    } catch (e) {}
    const completions = program.getCompletions(path, util.createPosition(2, 5));
    const labels = completions.map((e) => e.label);
    expect(labels).to.include('RowList');
    expect(labels).to.include('ItemView');
  });

  it('suggests project components for children', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(path, componentWithChildren('<'));
    } catch (e) {}
    const completions = program.getCompletions(path, util.createPosition(2, 5));
    const labels = completions.map((e) => e.label);
    expect(labels).to.include('RowList');
    expect(labels).to.include('ItemView');
  });

  it('suggests fields for component', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(path, componentWithChildren('<RowList '));
    } catch (e) {}
    const completions = program.getCompletions(
      path,
      util.createPosition(2, 13)
    );
    expect(completions.find((e) => e.label === 'rowItemSize')).to.not.be
      .undefined;
    expect(completions.find((e) => e.label === 'id')).to.not.be.undefined;
  });

  it('suggests fields for component with end tag', () => {
    console.log('Asdfasdfasdfadsfdsf');
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(path, componentWithChildren('<RowList >'));
    } catch (e) {}
    const completions = program.getCompletions(
      path,
      util.createPosition(2, 13)
    );
    expect(completions.find((e) => e.label === 'rowItemSize')).to.not.be
      .undefined;
    expect(completions.find((e) => e.label === 'id')).to.not.be.undefined;
  });

  it('suggests fields for component with end tag closing', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(path, componentWithChildren('<RowList />'));
    } catch (e) {}
    const completions = program.getCompletions(
      path,
      util.createPosition(2, 13)
    );
    expect(completions.find((e) => e.label === 'rowItemSize')).to.not.be
      .undefined;
    expect(completions.find((e) => e.label === 'id')).to.not.be.undefined;
  });

  it('suggests fields for component with end tag closing but lots of returns', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(
        path,
        componentWithChildren(`<RowList
      
      
      />`)
      );
    } catch (e) {}
    const completions = program.getCompletions(path, util.createPosition(3, 4));
    expect(completions.find((e) => e.label === 'rowItemSize')).to.not.be
      .undefined;
    expect(completions.find((e) => e.label === 'id')).to.not.be.undefined;
  });
});
