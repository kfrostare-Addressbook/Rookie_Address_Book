const storage = window.localStorage;

// Creates contact list from form
const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem("contacts"));

  let div = document.querySelector("#contact-list");
  if (contacts) {
    div.innerHTML = "";
    const ul = document.createElement("ul");

    contacts.forEach(contact => {
      let li = document.createElement("li");

       li.innerHTML = `
		  <span class="input">${contact.name}</span> |
		  <span class="input">${contact.email}</span> |
		  <span class="input">${contact.phone}</span> |
		  <span class="input">${contact.company}</span> |
		  <span class="input">${contact.notes}</span> |
      <button id="edit-button" button class="edit-button">Edit</button>
      <button id="remove-button" button class="remove-button" data-email=${contact.email}>Remove</button>
      `;
     
      // Creates an edit button for each contact in the contact list
      let editButtons = li.querySelectorAll(".edit-button");
      editButtons.forEach(button => {
        button.addEventListener("click", () => {
          li.innerHTML = `
    <form id="contact">
      <span class="input"><input name="name" type="text" placeholder="name" value=${contact.name}></input></span> |
      <span class="input"><input name="email" type="text" placeholder="email" value=${contact.email}></input></span>|
      <span class="input"><input name="phone" type="text" placeholder="phone" value=${contact.phone}></input></span>|
      <span class="input"><input name="company" type="text" placeholder="company" value=${contact.company}></input></span>|
      <span class="input"><input name="notes" type="text" placeholder="notes" value=${contact.notes}></input></span> |
      <input id="submit" type="submit" value="Update">
      </form>

      `;  // Assigns a value/id to each added contact
          const updateContact = document.getElementById("contact");
          updateContact.addEventListener("submit", event => {
            event.preventDefault();

            const contact = {
              name: updateContact.elements[0].value,
              email: updateContact.elements[1].value,
              phone: updateContact.elements[2].value,
              company: updateContact.elements[3].value,
              notes: updateContact.elements[4].value
            };
            storage.setItem("contacts", JSON.stringify(contact));
            console.log(contact);
          
            li.innerHTML = `
            <span class="input">${contact.name}</span> |
            <span class="input">${contact.email}</span> |
            <span class="input">${contact.phone}</span> |
            <span class="input">${contact.company}</span> |
            <span class="input">${contact.notes}</span> |
        <button id="edit-button" button class="edit-button">Edit</button>
        <button id="remove-button" button class="remove-button" data-email=${contact.email}>Remove</button>
        `;
        storage.clear()
          });
        });
      });

      // Adds a remove button next to each added contact
      let buttons = li.querySelectorAll(".remove-button");
      buttons.forEach(button => {
        button.addEventListener("click", () => {
          var contacts = JSON.parse(localStorage.contacts);
          let newContacts = contacts.filter(
            contact => contact.email !== event.target.dataset.email
          );
          storage.setItem("contacts", JSON.stringify(newContacts));
          renderContacts();
        });
      });

      ul.appendChild(li);
    });

    div.appendChild(ul);
  } else {
    div.innerHTML = "<p>you have no contacts in your address book</p>";
  }
};

// Toggles the visibility of the form by clicking "ad contact"
document.addEventListener("DOMContentLoaded", () => {
  renderContacts();
  const contactForm = document.getElementById("new-contact-form");
  const toggleFormVisibilityButton = document.getElementById("add-contact");
  contactForm.style.display = "none";

  toggleFormVisibilityButton.addEventListener("click", () => {
    if (contactForm.style.display === "") {
      contactForm.style.display = "none";
    } else {
      contactForm.style.display = "";
    }
  });

  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const { name, email, phone, company, notes } = contactForm.elements;
  });
});

// Stores the contacts
document.addEventListener("DOMContentLoaded", () => {
  renderContacts();
  const contactForm = document.getElementById("new-contact-form");
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    // Read all the input fields and get their values
    const { name, email, phone, company, notes } = contactForm.elements;

    const contact = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value
    };

    console.log(contact);

    let contacts = JSON.parse(storage.getItem("contacts")) || [];

    contacts.push(contact);

    // Save contacts to storage (not working at the moment)
    storage.setItem("contacts", JSON.stringify(contacts));
    renderContacts();
    contactForm.reset();
  });
});
