import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (contact, number) => {
    const newContact = {
      id: nanoid(),
      name: contact,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
