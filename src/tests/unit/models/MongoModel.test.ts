import { expect } from 'chai';
import sinon from 'sinon';

import { testModel } from '../../mocks/TestMocks';

describe('MongoModel', () => {
  beforeEach(sinon.restore);

  describe('#create()', () => {
    it('gera erro caso a DB gere erro', async () => {
      sinon.stub(testModel.dao, 'create').rejects();
      try {
        await testModel.create({});
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna o documento criado', async () => {
      sinon.stub(testModel.dao, 'create').resolves({});
      const test = await testModel.create({});
      expect(test).to.be.deep.equal({});
    });
  });

  describe('#read()', () => {
    it('gera erro caso a DB gere erro', async () => {
      sinon.stub(testModel.dao, 'find').rejects();
      try {
        await testModel.read();
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna um array com todos os documentos', async () => {
      sinon.stub(testModel.dao, 'find').resolves([]);
      const test = await testModel.read();
      expect(test).to.be.deep.equal([]);
    });
  });

  describe('#readOne()', () => {
    it('gera erro caso a DB gere erro', async () => {
      sinon.stub(testModel.dao, 'findOne').rejects();
      try {
        await testModel.readOne('1');
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna null caso a DB não tenha o documento', async () => {
      sinon.stub(testModel.dao, 'findOne').resolves(null);
      const test = await testModel.readOne('1');
      expect(test).to.be.equal(null);
    });

    it('retorna o documento na DB', async () => {
      sinon.stub(testModel.dao, 'findOne').resolves({} as any);
      const test = await testModel.readOne('1');
      expect(test).to.be.deep.equal({});
    });
  });

  describe('#update()', () => {
    it('gera erro caso a DB gere erro', async () => {
      sinon.stub(testModel.dao, 'findByIdAndUpdate').rejects();
      try {
        await testModel.update('1', {});
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna null caso a DB não tenha o documento', async () => {
      sinon.stub(testModel.dao, 'findByIdAndUpdate').resolves(null);
      const test = await testModel.update('1', {});
      expect(test).to.be.equal(null);
    });

    it('retorna o documento atualizado da DB', async () => {
      sinon.stub(testModel.dao, 'findByIdAndUpdate').resolves({} as any);
      const test = await testModel.update('1', {});
      expect(test).to.be.deep.equal({});
    });
  });

  describe('#delete()', () => {
    it('gera erro caso a DB gere erro', async () => {
      sinon.stub(testModel.dao, 'findByIdAndDelete').rejects();
      try {
        await testModel.delete('1');
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna null caso a DB não tenha o documento', async () => {
      sinon.stub(testModel.dao, 'findByIdAndDelete').resolves(null);
      const test = await testModel.delete('1');
      expect(test).to.be.equal(null);
    });

    it('retorna o documento removido da DB', async () => {
      sinon.stub(testModel.dao, 'findByIdAndDelete').resolves({} as any);
      const test = await testModel.delete('1');
      expect(test).to.be.deep.equal({});
    });
  });
});
