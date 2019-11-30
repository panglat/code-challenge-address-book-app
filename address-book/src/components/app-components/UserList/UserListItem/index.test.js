import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import UserListItem from './index';

const userMock = {
  gender: 'female',
  name: {
    title: 'Ms',
    first: 'Linnea',
    last: 'Winger',
  },
  location: {
    street: {
      number: 4991,
      name: 'Hasselhaugveien',
    },
    city: 'Otnes',
    state: 'Sogn og Fjordane',
    country: 'Norway',
    postcode: '0593',
    coordinates: {
      latitude: '48.1335',
      longitude: '84.7051',
    },
    timezone: {
      offset: '+2:00',
      description: 'Kaliningrad, South Africa',
    },
  },
  email: 'linnea.winger@example.com',
  login: {
    uuid: '9fb8759b-7b53-4c6f-a576-4da66090f156',
    username: 'happyfish875',
    password: 'hippie',
    salt: 'UwpXA9lw',
    md5: '09a4c93e81535265ef97db8b99226efd',
    sha1: 'e49c281420f6e76007ec1c105a2c2c0fb1d85bab',
    sha256: 'f4864d7e057f9df1cea2885ec83a600b0c39a65bc2924ce07e9c792992215486',
  },
  dob: {
    date: '1979-05-11T21:17:59.720Z',
    age: 40,
  },
  registered: {
    date: '2008-12-13T14:09:30.914Z',
    age: 11,
  },
  phone: '26090335',
  cell: '91127411',
  id: {
    name: 'FN',
    value: '11057917662',
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/40.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/40.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
  },
  nat: 'NO',
};

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders UserListItem', () => {
  act(() => {
    render(<UserListItem user={userMock} />, container);
  });
  expect(container.querySelector('img').src).toBe(userMock.picture.thumbnail);
  expect(container.querySelector('.user-list-item__full-name').textContent).toBe(`Name: ${userMock.name.first} ${userMock.name.last}`);
  expect(container.querySelector('.user-list-item__user-name').textContent).toBe(`Username: ${userMock.login.username}`);
  expect(container.querySelector('.user-list-item__email').textContent).toBe(`Email: ${userMock.email}`);
});
