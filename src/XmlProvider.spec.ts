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

function componentWithoutChildren() {
  return `<component name="Test" extends="Group">
  <interface>
    <field id="someField" type="string" />
  </interface>
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
    program = builder.program!;
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
      file.parser.parse(componentWithChildren('         '));
    } catch (e) { }
    const completions = program.getCompletions(path, util.createPosition(2, 5));
    const labels = completions.map((e) => e.label);
    expect(labels).to.include('RowList');
    expect(labels).to.include('ItemView');
  });

  it('suggests project components for children', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(componentWithChildren('<'));
    } catch (e) { }
    const completions = program.getCompletions(path, util.createPosition(2, 5));
    const labels = completions.map((e) => e.label);
    expect(labels).to.include('RowList');
    expect(labels).to.include('ItemView');
  });

  it('suggests fields for component', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(componentWithChildren('<RowList '));
    } catch (e) { }
    const completions = program.getCompletions(
      path,
      util.createPosition(2, 13)
    );
    expect(completions.find((e) => e.label === 'rowItemSize')).to.not.be
      .undefined;
    expect(completions.find((e) => e.label === 'id')).to.not.be.undefined;
  });

  it('suggests fields for component with end tag', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(componentWithChildren('<RowList >'));
    } catch (e) { }
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
      file.parser.parse(componentWithChildren('<RowList />'));
    } catch (e) { }
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
        componentWithChildren(`<RowList
      
      
      />`)
      );
    } catch (e) { }
    const completions = program.getCompletions(path, util.createPosition(3, 4));
    expect(completions.find((e) => e.label === 'rowItemSize')).to.not.be
      .undefined;
    expect(completions.find((e) => e.label === 'id')).to.not.be.undefined;
  });

  it('suggests TimeGrid own fields in completions', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(path, componentWithChildren('<TimeGrid '));
    } catch (e) {}
    const completions = program.getCompletions(path, util.createPosition(2, 14));
    const labels = completions.map((e) => e.label);
    expect(labels).to.include('content');
    expect(labels).to.include('nowNextMode');
    expect(labels).to.include('programTitleColor');
    expect(labels).to.include('channelInfoWidth');
  });

  it('suggests TimeGrid inherited Group and Node fields in completions', () => {
    const path = 'components/TestNode.xml';
    const file = program.setFile(path, componentWithChildren(``)) as XmlFile;
    try {
      file.parser.parse(path, componentWithChildren('<TimeGrid '));
    } catch (e) {}
    const completions = program.getCompletions(path, util.createPosition(2, 14));
    const labels = completions.map((e) => e.label);
    // inherited from Group
    expect(labels).to.include('translation');
    expect(labels).to.include('visible');
    expect(labels).to.include('opacity');
    // inherited from Node
    expect(labels).to.include('id');
  });

  it('does not raise SG1002 for id and translation on TimeGrid', () => {
    const path = 'components/TestNode.xml';
    program.setFile(
      path,
      componentWithChildren('<TimeGrid id="scheduleGrid" translation="[0,600]" />')
    );
    program.validate();
    const diags = program
      .getDiagnostics()
      .filter((d) => d.file?.srcPath?.includes('TestNode') && d.code === 'SG1002');
    expect(diags).to.have.lengthOf(0);
  });
});

describe('SGXmlValidator', () => {
  let program: Program;

  beforeEach(async function () {
    const builder = new ProgramBuilder();
    const options = JSON.parse(readFileSync('sample/bsconfig.json').toString());

    builder.plugins.add(new BscXmlPlugin());
    await builder.run({
      ...options,
      cwd: join(__dirname, '../sample'),
      validate: false,
    });
    program = builder.program;
  });

  afterEach(() => {
    program.dispose();
  });

  it('does not throw or produce diagnostics for a component with no <children> block', () => {
    const path = 'components/TestNode.xml';
    program.setFile(path, componentWithoutChildren());
    expect(() => program.validate()).to.not.throw();
    const diags = program.getDiagnostics().filter(
      (d) => (d as any).file?.pkgPath?.includes('TestNode')
    );
    expect(diags).to.have.length(0);
  });

  it('produces no diagnostics for a valid component with a <children> block', () => {
    const path = 'components/TestNode.xml';
    program.setFile(path, componentWithChildren('<LayoutGroup layoutDirection="vert" />'));
    program.validate();
    const diags = program.getDiagnostics().filter(
      (d) => (d as any).file?.pkgPath?.includes('TestNode')
    );
    expect(diags).to.have.length(0);
  });

  it('produces a BSSG2001 warning for an attribute name case mismatch inside <children>', () => {
    const path = 'components/TestNode.xml';
    // layoutdirection is the wrong case, layoutDirection is correct
    program.setFile(path, componentWithChildren('<LayoutGroup layoutdirection="vert" />'));
    program.validate();
    const diags = program.getDiagnostics().filter(
      (d) => (d as any).file?.pkgPath?.includes('TestNode')
    );
    expect(diags).to.have.length.at.least(1);
    expect(diags[0].code).to.equal('SG2001');
    expect(diags[0].message).to.include('layoutdirection');
    expect(diags[0].message).to.include('layoutDirection');
  });
});
