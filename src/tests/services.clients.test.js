import clientsService from '../services/clients';

const clients = [
  {
    name: 'Sagra',
    lastName: 'Mielgo',
    email: 'sagramielgo@hotmail.com',
    country: 'AE',
    id: '1',
  },
  {
    name: 'Leo',
    lastName: 'González',
    email: 'leo.gonzalez@hotmail.com',
    country: 'ES',
    id: '2',
  },
];
describe('clients services > get method', () => {
  test('Cuando los clientes están vacíos debe devolver undefined', () => {
    const clientFound = clientsService.get([], '1');
    expect(clientFound).toBeUndefined();
  });

  test('Cuando el id no existe debe devolver undefined', () => {
    const clientFound = clientsService.get(clients, '0');
    expect(clientFound).toBeUndefined();
  });

  test('Cuando el id existe debe devolver el cliente', () => {
    const clientFound = clientsService.get(clients, '1');
    expect(clientFound.name).toBe('Sagra');
    expect(clientFound.lastName).toBe('Mielgo');
    expect(clientFound.email).toBe('sagramielgo@hotmail.com');
    expect(clientFound.country).toBe('AE');
    expect(clientFound.id).toBe('1');
  });
});
