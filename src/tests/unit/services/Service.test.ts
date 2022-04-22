import { expect } from 'chai';
import sinon from 'sinon';

import { testModel, testService } from '../../mocks/TestMocks';

describe('Service', () => {
  beforeEach(sinon.restore);

  describe('#create()', () => {
    it('gera erro caso o model gere erro', async () => {
      sinon.stub(testModel, 'create').rejects();
      try {
        await testService.create({});
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna o documento criado', async () => {
      sinon.stub(testModel, 'create').resolves({});
      const test = await testService.create({});
      expect(test).to.be.deep.equal({});
    });
  });

  describe('#read()', () => {
    it('gera erro caso o model gere erro', async () => {
      sinon.stub(testModel, 'read').rejects();
      try {
        await testService.read();
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna um array com todos os documentos', async () => {
      sinon.stub(testModel, 'read').resolves([]);
      const test = await testService.read();
      expect(test).to.be.deep.equal([]);
    });
  });

  describe('#readOne()', () => {
    it('gera erro caso o model gere erro', async () => {
      sinon.stub(testModel, 'readOne').rejects();
      try {
        await testService.readOne('1');
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna null caso o model não tenha o documento', async () => {
      sinon.stub(testModel, 'readOne').resolves(null);
      const test = await testService.readOne('1');
      expect(test).to.be.equal(null);
    });

    it('retorna o documento na DB', async () => {
      sinon.stub(testModel, 'readOne').resolves({} as any);
      const test = await testService.readOne('1');
      expect(test).to.be.deep.equal({});
    });
  });

  describe('#update()', () => {
    it('gera erro caso o model gere erro', async () => {
      sinon.stub(testModel, 'update').rejects();
      try {
        await testService.update('1', {});
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna null caso o model não tenha o documento', async () => {
      sinon.stub(testModel, 'update').resolves(null);
      const test = await testService.update('1', {});
      expect(test).to.be.equal(null);
    });

    it('retorna o documento atualizado da DB', async () => {
      sinon.stub(testModel, 'update').resolves({} as any);
      const test = await testService.update('1', {});
      expect(test).to.be.deep.equal({});
    });
  });

  describe('#delete()', () => {
    it('gera erro caso o model gere erro', async () => {
      sinon.stub(testModel, 'delete').rejects();
      try {
        await testService.delete('1');
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna null caso o model não tenha o documento', async () => {
      sinon.stub(testModel, 'delete').resolves(null);
      const test = await testService.delete('1');
      expect(test).to.be.equal(null);
    });

    it('retorna o documento removido da DB', async () => {
      sinon.stub(testModel, 'delete').resolves({} as any);
      const test = await testService.delete('1');
      expect(test).to.be.deep.equal({});
    });
  });
});