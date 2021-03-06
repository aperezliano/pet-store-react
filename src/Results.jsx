import React from 'react';
import Pet from './Pet.jsx';

const Results = ({ pets }) => (
  <div className="search">
    {pets.length === 0 ? (
      <h1>No Pets founds</h1>
    ) : (
      pets.map(({ type, id, name, breeds, photos, contact }) => (
        <Pet
          animal={type}
          key={id}
          name={name}
          breed={breeds.primary}
          media={photos}
          location={`${contact.address.city}, ${contact.address.state}`}
          id={id}
        />
      ))
    )}
  </div>
);

export default Results;
