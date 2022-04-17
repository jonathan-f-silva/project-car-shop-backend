import { expect } from 'chai';
import Sinon from 'sinon';
import { 
  TestGenericService,
  testMockResult,
  TestMongoModel,
  testMock,
  notFoundError,
} from '../../mocks/TestMocks';

describe('GenericService', () => {
  const testModel = new TestMongoModel() as any;
  const testService = new TestGenericService(testModel) as any;
  
  describe('#create()', () => {
    before(() => {
      Sinon.stub(testModel.model, 'create').resolves(testMockResult);
    });
  
    after(() => {
      Sinon.restore();
    })

    it('cria um novo documento com os dados passados e id', async () => {
      const test = await testService.create(testMock);

      expect(test).to.deep.equal(testMockResult);
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
      const test = await testService.read();

      expect(test).to.be.deep.equal([testMockResult]);
    });
  });

  describe('#readOne()', () => {
    describe('ao passar um id de documento existente', () => {
      before(() => {
        Sinon.stub(testModel.model, 'findOne').resolves(testMockResult);
      });
    
      after(() => {
        Sinon.restore();
      })

      it('retorna o documento referenciado pela id', async () => {
        const { _id } = testMockResult;
        const test = await testService.readOne(_id);

        expect(testModel.model.findOne.calledWith({ _id })).to.be.true;
        expect(test).to.be.deep.equal(testMockResult);
      });
    });

    describe('ao passar um id de documento inexistente', () => {
      before(() => {
        Sinon.stub(testModel.model, 'findOne').resolves(null);
      });
    
      after(() => {
        Sinon.restore();
      })

      it('retorna o erro "Item not found"', async () => {
        const result = await testService.readOne(99999);

        expect(result).to.be.deep.equal(notFoundError);
      });
    });
  });

  describe('#update()', () => {
    describe('ao passar um id de documento existente', () => {
      const updatedMockResult = { ...testMockResult, name: 'newName' };
      
      before(() => {
        Sinon.stub(testModel.model, 'findByIdAndUpdate').resolves(updatedMockResult);
      });
    
      after(() => {
        Sinon.restore();
      })

      it('retorna o documento atualizado referenciado pela id', async () => {
        const { _id } = testMockResult;
        const test = await testService.update(_id, updatedMockResult);

        expect(test).to.be.deep.equal(updatedMockResult);
      });
    });

    describe('ao passar um id de documento inexistente', () => {
      const updatedMockResult = { ...testMockResult, _id: 99999, name: 'newName' };
      
      before(() => {
        Sinon.stub(testModel.model, 'findByIdAndUpdate').resolves(null);
      });
    
      after(() => {
        Sinon.restore();
      })

      it('retorna o erro "Item not found"', async () => {
        const { _id } = updatedMockResult;
        const result = await testService.update(_id, updatedMockResult);

        expect(result).to.be.deep.equal(notFoundError);
      });
    });
  });

  describe('#delete()', () => {
    describe('ao passar um id de documento existente', () => {
      before(() => {
        Sinon.stub(testModel.model, 'findByIdAndDelete').resolves(testMockResult);
      });
    
      after(() => {
        Sinon.restore();
      })

      it('retorna o documento removido referenciado pela id', async () => {
        const { _id } = testMockResult;
        const test = await testService.delete(_id);

        expect(test).to.be.deep.equal(testMockResult);
      });
    });

    describe('ao passar um id de documento inexistente', () => {
      before(() => {
        Sinon.stub(testModel.model, 'findByIdAndDelete').resolves(null);
      });
    
      after(() => {
        Sinon.restore();
      })

      it('retorna o erro "Item not found"', async () => {
        const result = await testService.delete(99999);
        
        expect(result).to.be.deep.equal(notFoundError);
      });
    });
  });
});
