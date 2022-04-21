import { expect } from 'chai';
import sinon from 'sinon';

import { testController, testService } from '../../mocks/TestMocks';

describe('Controller', () => {
  beforeEach(sinon.restore);

  describe('#create()', () => {
    it('gera erro caso o service gere erro', async () => {
      sinon.stub(testService, 'create').rejects();
      try {
        await testController.create({});
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna o documento criado', async () => {
      sinon.stub(testService, 'create').resolves({});
      const test = await testController.create({});
      expect(test).to.be.deep.equal({});
    });
  });

  describe('#read()', () => {
    it('gera erro caso o service gere erro', async () => {
      sinon.stub(testService, 'read').rejects();
      try {
        await testController.read();
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna um array com todos os documentos', async () => {
      sinon.stub(testService, 'read').resolves([]);
      const test = await testController.read();
      expect(test).to.be.deep.equal([]);
    });
  });

  describe('#readOne()', () => {
    it('gera erro caso o service gere erro', async () => {
      sinon.stub(testService, 'readOne').rejects();
      try {
        await testController.readOne('1');
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna null caso o service não tenha o documento', async () => {
      sinon.stub(testService, 'readOne').resolves(null);
      const test = await testController.readOne('1');
      expect(test).to.be.equal(null);
    });

    it('retorna o documento na DB', async () => {
      sinon.stub(testService, 'readOne').resolves({} as any);
      const test = await testController.readOne('1');
      expect(test).to.be.deep.equal({});
    });
  });

  describe('#update()', () => {
    it('gera erro caso o service gere erro', async () => {
      sinon.stub(testService, 'update').rejects();
      try {
        await testController.update('1', {});
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna null caso o service não tenha o documento', async () => {
      sinon.stub(testService, 'update').resolves(null);
      const test = await testController.update('1', {});
      expect(test).to.be.equal(null);
    });

    it('retorna o documento atualizado da DB', async () => {
      sinon.stub(testService, 'update').resolves({} as any);
      const test = await testController.update('1', {});
      expect(test).to.be.deep.equal({});
    });
  });

  describe('#delete()', () => {
    it('gera erro caso o service gere erro', async () => {
      sinon.stub(testService, 'delete').rejects();
      try {
        await testController.delete('1');
        expect('não gerou erro').to.be.false;
      }
      catch (error) { expect(error).to.be.an('Error') }
    });

    it('retorna null caso o service não tenha o documento', async () => {
      sinon.stub(testService, 'delete').resolves(null);
      const test = await testController.delete('1');
      expect(test).to.be.equal(null);
    });

    it('retorna o documento removido da DB', async () => {
      sinon.stub(testService, 'delete').resolves({} as any);
      const test = await testController.delete('1');
      expect(test).to.be.deep.equal({});
    });
  });
});
