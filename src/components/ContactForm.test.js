import React from 'react'
import ContactForm from './ContactForm'
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test("form renders", () => {
    render(<ContactForm />)
});

test("Form is succesfully filled in and submitted", async () => {
    render(<ContactForm/>);

    const first = screen.getByLabelText(/first name/i);
    const last = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
    
   
    userEvent.type(first, "Sarah");
    userEvent.type(last, "Rose");
    userEvent.type(email, "rosiemeow@aol.com");
    userEvent.type(message, "Chicago");

    expect(first).toHaveValue("Sarah");
    expect(last).toHaveValue("Rose");
    expect(email).toHaveValue("rosiemeow@aol.com");
    expect(message).toHaveValue("Chicago");
    
   

});