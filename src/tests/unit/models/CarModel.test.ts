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

describe('CarModel', () => {
  const carModel = new CarModel() as any;
    
  describe('#create()', () => {
    before(() => {
      Sinon.stub(carModel.model, 'create').resolves({ ...carMock, _id: '123' });
    });
  
    after(() => {
      Sinon.restore();
    })
    
    it('cria um novo carro com os dados passados e id', async () => {
      const car = await carModel.create(carMock);

      expect(car).to.have.property('_id');
      expect(car).to.have.property('model', carMock.model);
      expect(car).to.have.property('year', carMock.year);
      expect(car).to.have.property('color', carMock.color);
      expect(car).to.have.property('buyValue', carMock.buyValue);
      expect(car).to.have.property('seatsQty', carMock.seatsQty);
      expect(car).to.have.property('doorsQty', carMock.doorsQty);
    });
  });
});
