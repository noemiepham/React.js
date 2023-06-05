import React from "react";
import Card from './Card'
import contacts from "../contacts";
import Arvata from "./Avatar";

function App() {
    return (
      <div>
        <h1 className="heading">My Contacts</h1>
        <Arvata img="https://media.licdn.com/dms/image/C5603AQE3qo6A9YusyA/profile-displayphoto-shrink_800_800/0/1625598656309?e=1691625600&v=beta&t=iml2mYFrl1nppl8lxywQXoRKfGHXIxoqnSmeeDg9D2w" />
        <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
        />
        <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        email={contacts[1].email}
        tel={contacts[1].phone}
        />
        <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
        />
      </div>
    );
  }
export default App;
