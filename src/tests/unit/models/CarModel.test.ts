import { expect } from 'chai';
import Sinon from 'sinon';

import { Car } from '../../../interfaces/CarInterface';
import CarModel from '../../../models/CarModel';


const carMock: Car = {
  model: 'Gol',
  year: 2010,
  color: 'Azul',
  buyValue: 30000,
  seatsQty: 4,
  doorsQty: 4,
};

const carMockResult = { ...carMock, _id: '123' }

describe('CarModel', () => {
  const carModel = new CarModel() as any;
    
  describe('#create()', () => {
    before(() => {
      Sinon.stub(carModel.model, 'create').resolves(carMockResult);
    });
  
    after(() => {
      Sinon.restore();
    })

    it('cria um novo carro com os dados passados e id', async () => {
      const car = await carModel.create(carMock);

      expect(car).to.be.deep.equal(carMockResult);
    });
  });
});
