import React from 'react';

const ResultsTable = () => {
  const results = [
    { id: 1, firstName: 'Brynne', lastName: 'Henderson', team: 'Tech' },
    { id: 2, firstName: 'Michael', lastName: 'Saulls', team: 'Tech' },
    { id: 3, firstName: 'Bryce', lastName: 'Lasson', team: 'Tech' },
    { id: 4, firstName: 'Cade', lastName: 'Loar', team: 'Tech' },
    { id: 5, firstName: 'Ryan', lastName: "O'Reilly", team: 'Tech' },
    { id: 6, firstName: 'Suhyun', lastName: 'Baik', team: 'Tech' },
    { id: 7, firstName: 'Calvin', lastName: 'Shaw', team: 'Tech' },
  ];

  return (
    <div className="bg-white p-6 rounded shadow-md m-6">
      <h2 className="text-lg font-semibold mb-4">Results</h2>
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">First Name</th>
            <th className="p-3 border">Last Name</th>
            <th className="p-3 border">Team</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              <td className="p-3 border">{row.id}</td>
              <td className="p-3 border">{row.firstName}</td>
              <td className="p-3 border">{row.lastName}</td>
              <td className="p-3 border">{row.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
