import { expect } from 'chai';
import Sinon from 'sinon';

import { Schema, model as createModel, Document } from 'mongoose';

import MongoModel from '../../../models/MongoModel';

type TestType = { name: string; };

interface TestDocument extends TestType, Document { }

const testSchema = new Schema<TestDocument>({ name: String });

class TestModel extends MongoModel<TestType> {
  constructor(model = createModel('TestModel', testSchema)) {
    super(model);
  }
}

const testMock: TestType = {  name: 'test' };
const testMockResult = { ...testMock, _id: '123' }

describe('MongoModel', () => {
  const testModel = new TestModel() as any;
    
  describe('#create()', () => {
    before(() => {
      Sinon.stub(testModel.model, 'create').resolves(testMockResult);
    });
  
    after(() => {
      Sinon.restore();
    })

    it('cria um novo documento com os dados passados e id', async () => {
      const test = await testModel.create(testMock);

      expect(testModel.model.create.calledWith(testMock)).to.be.true;
      expect(test).to.be.deep.equal(testMockResult);
    });
  });

  describe('#read()', () => {
    before(() => {
      Sinon.stub(testModel.model, 'find').resolves([testMockResult]);
    });
  
    after(() => {
      Sinon.restore();
    })

    it('retorna um array com todos os documentos', async () => {
      const test = await testModel.read();

      expect(test).to.be.deep.equal([testMockResult]);
    });
  });

  describe('#readOne()', () => {
    before(() => {
      Sinon.stub(testModel.model, 'findOne').resolves(testMockResult);
    });
  
    after(() => {
      Sinon.restore();
    })

    it('retorna o documento referenciado pela id', async () => {
      const { _id } = testMockResult;
      const test = await testModel.readOne(_id);

      expect(testModel.model.findOne.calledWith({ _id })).to.be.true;
      expect(test).to.be.deep.equal(testMockResult);
    });
  });

  describe('#update()', () => {
    const updatedMockResult = { ...testMockResult, name: 'newName' };
    
    before(() => {
      Sinon.stub(testModel.model, 'findByIdAndUpdate').resolves(updatedMockResult);
    });
  
    after(() => {
      Sinon.restore();
    })

    it('retorna o documento atualizado referenciado pela id', async () => {
      const { _id } = testMockResult;
      const test = await testModel.update(_id, updatedMockResult);

      expect(test).to.be.deep.equal(updatedMockResult);
    });
  });
});
