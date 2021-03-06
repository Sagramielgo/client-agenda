
import clientsService from '../services/clients';

 /* interface ClientProperties {
 
  name: string;
  lastName: string;
  email: string;
  country: string;
  id: string
};  */
 


const clients= [
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

//Test get function from localStorage
describe('clients services > get method', () => {
  test('When there are no clients must return undefined', () => {
    const clientFound:any = clientsService.get([], '1');
    expect(clientFound).toBeUndefined();
  });

  test("When the id doesn't exist must return undefined", () => {
    const clientFound: any = clientsService.get(clients, '0');
    expect(clientFound).toBeUndefined();
  });

  test('When teh id exists must return the client', () => {
    const clientFound:any = clientsService.get(clients, '1');
    expect(clientFound.name).toBe('Sagra');
    expect(clientFound.lastName).toBe('Mielgo');
    expect(clientFound.email).toBe('sagramielgo@hotmail.com');
    expect(clientFound.country).toBe('AE');
    expect(clientFound.id).toBe('1');
  });
});
