import { use, expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

import { testModel, validID, validObject } from '../../mocks/TestMocks';

use(sinonChai);
use(chaiAsPromised);

describe('MongoModel', function () {
  beforeEach(sinon.restore);

  describe('#create()', function () {
    it('gera erro caso a DB gere erro', async function () {
      sinon.stub(testModel.dao, 'create').rejects();
      expect(testModel.create(validObject)).eventually.be.rejected;
    });

    it('retorna o documento criado', async function () {
      sinon.stub(testModel.dao, 'create').resolves(validObject);
      const test = await testModel.create(validObject);
      expect(test).to.be.deep.equal(validObject);
    });
  });

  describe('#read()', function () {
    it('gera erro caso a DB gere erro', async function () {
      sinon.stub(testModel.dao, 'find').rejects();
      expect(testModel.read()).eventually.be.rejected;
    });

    it('retorna um array com todos os documentos', async function () {
      sinon.stub(testModel.dao, 'find').resolves([]);
      const test = await testModel.read();
      expect(test).to.be.deep.equal([]);
    });
  });

  describe('#readOne()', function () {
    it('gera erro caso a DB gere erro', async function () {
      sinon.stub(testModel.dao, 'findOne').rejects();
      expect(testModel.readOne(validID)).eventually.be.rejected;
    });

    it('retorna null caso a DB não tenha o documento', async function () {
      sinon.stub(testModel.dao, 'findOne').resolves(null);
      const test = await testModel.readOne(validID);
      expect(test).to.be.equal(null);
    });

    it('retorna o documento na DB', async function () {
      sinon.stub(testModel.dao, 'findOne').resolves(validObject as any);
      const test = await testModel.readOne(validID);
      expect(test).to.be.deep.equal(validObject);
    });
  });

  describe('#update()', function () {
    it('gera erro caso a DB gere erro', async function () {
      sinon.stub(testModel.dao, 'findByIdAndUpdate').rejects();
      expect(testModel.update(validID, validObject)).eventually.be.rejected;
    });

    it('retorna null caso a DB não tenha o documento', async function () {
      sinon.stub(testModel.dao, 'findByIdAndUpdate').resolves(null);
      const test = await testModel.update(validID, validObject);
      expect(test).to.be.equal(null);
    });

    it('retorna o documento atualizado da DB', async function () {
      sinon.stub(testModel.dao, 'findByIdAndUpdate').resolves(validObject as any);
      const test = await testModel.update(validID, validObject);
      expect(test).to.be.deep.equal(validObject);
      expect(testModel.dao.findByIdAndUpdate).to.have.been.calledWith(validID, validObject, { new: true });
    });
  });

  describe('#delete()', function () {
    it('gera erro caso a DB gere erro', async function () {
      sinon.stub(testModel.dao, 'findByIdAndDelete').rejects();
      expect(testModel.delete(validID)).eventually.be.rejected;
    });

    it('retorna null caso a DB não tenha o documento', async function () {
      sinon.stub(testModel.dao, 'findByIdAndDelete').resolves(null);
      const test = await testModel.delete(validID);
      expect(test).to.be.equal(null);
    });

    it('retorna o documento removido da DB', async function () {
      sinon.stub(testModel.dao, 'findByIdAndDelete').resolves(validObject as any);
      const test = await testModel.delete(validID);
      expect(test).to.be.deep.equal(validObject);
    });
  });
});
