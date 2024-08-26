import React from 'react';

const complaints = [
  { id: 1, title: 'Wi-Fi Issue', description: 'Wi-Fi is not working in the library.', status: 'Pending' },
  { id: 2, title: 'Mess Food', description: 'Quality of food in the mess is poor.', status: 'Resolved' },
];

function ComplaintList() {
  return (
    <div>
      <h3>Your Complaints</h3>
      <ul>
        {complaints.map(complaint => (
          <li key={complaint.id}>
            <h4>{complaint.title}</h4>
            <p>{complaint.description}</p>
            <p>Status: {complaint.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default app;
