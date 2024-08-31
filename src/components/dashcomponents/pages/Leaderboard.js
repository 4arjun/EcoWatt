import React from 'react';

const Leaderboard = () => {


  const data = [
    { name: 'Alice', usage: 120 },
    { name: 'Bob', usage: 95 },
    { name: 'Charlie', usage: 130 },
    { name: 'David', usage: 110 },
    { name: 'Eve', usage: 105 },
    {name:"dev",usage:45  }
  ];

  // Sort the data based on usage in ascending order (lowest usage first)
  const sortedData = data.sort((a, b) => a.usage - b.usage);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
  <div className="w-10/12 md:w-8/12 lg:w-6/12 h-auto mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
    <h1 className="text-3xl font-extrabold text-center text-white p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      Leaderboards
    </h1>
    <table className="w-full text-left table-auto">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 text-indigo-600">Rank</th>
          <th className="px-6 py-3 text-indigo-600">Name</th>
          <th className="px-6 py-3 text-indigo-600">Usage (Units)</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            } border-b hover:bg-indigo-100 transition-colors duration-150`}
          >
            <td className="px-6 py-3 text-gray-700">{index + 1}</td>
            <td className="px-6 py-3 text-gray-700">{item.name}</td>
            <td className="px-6 py-3 text-gray-700">{item.usage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default Leaderboard;
