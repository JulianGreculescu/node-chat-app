const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var user = {id: '123', name: 'Julian', room: 'node js training'};
    var users = new Users();
    var retUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return the node course users', () => {
    var usersList = users.getUsersList('Node Course');
    expect(usersList).toEqual(['Mike', 'Julie'])
  });

  it('should return the react course users', () => {
    var usersList = users.getUsersList('React Course');
    expect(usersList).toEqual(['Jen'])
  });

  it('should return the user by id', () => {
    var user = users.getUser('2');
    expect(user).toBe(users.users[1]);
  });

  it('should return undefined for non existing id', () => {
    var user = users.getUser('4');
    expect(user).toNotExist();
  });

  it('should remove user by id', () => {
    var expected = users.users[1];
    var user = users.removeUser('2');
    expect(user).toBe(expected);
    expect(users.users.length).toBe(2);
  });

  it('should remove nothing for no n existing id', () => {
    var user = users.removeUser('4');
    expect(user).toNotExist;
    expect(users.users.length).toBe(3);
  });
});
