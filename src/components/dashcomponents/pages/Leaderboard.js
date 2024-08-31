import React from 'react';

const Leaderboard = () => {
  const data = [
    { name: 'Alice', usage: 120 },
    { name: 'Bob', usage: 95 },
    { name: 'Charlie', usage: 130 },
    { name: 'David', usage: 110 },
    { name: 'Eve', usage: 105 },
  ];

  // Sort the data based on usage in ascending order (lowest usage first)
  const sortedData = data.sort((a, b) => a.usage - b.usage);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-2xl font-bold text-center text-gray-700 p-4">Leaderboard</h1>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Usage (Units)</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } border-b hover:bg-gray-50 transition-colors duration-200`}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
