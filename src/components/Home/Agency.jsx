import React from 'react';

const  Agency = () => {
  return (
    <section className="bg-black text-white py-12 mb-5 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-10">
        Agency Performance Overview
      </h2>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Clients Served */}
        <div className="border rounded-2xl p-6 text-center space-y-3">
          <div className="text-4xl">🌐</div>
          <h3 className="text-3xl font-bold">5240+</h3>
          <p className="text-lg font-semibold">Clients Served</p>
          <p className="text-sm text-gray-400">
            The number of clients currently served by the agency.
          </p>
        </div>

        {/* Employees */}
        <div className="border rounded-2xl p-6 text-center space-y-3">
          <div className="text-4xl">🧑‍💼</div>
          <h3 className="text-3xl font-bold">200+</h3>
          <p className="text-lg font-semibold">Employees</p>
          <p className="text-sm text-gray-400">
            The total number of employees currently in our team.
          </p>
        </div>

        {/* Client Retention Rate */}
        <div className="border rounded-2xl p-6 text-center space-y-3">
          <div className="text-4xl">🏅</div>
          <h3 className="text-3xl font-bold">90%</h3>
          <p className="text-lg font-semibold">Client Retention Rate</p>
          <p className="text-sm text-gray-400">
            The total number of Rate our agency has won.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white text-black rounded-3xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
        <div>
          <p className="font-semibold">Years in Business</p>
          <h3 className="text-xl font-bold">15 years</h3>
          <p className="text-sm">Established in 2009, providing exceptional.</p>
        </div>

        <div>
          <p className="font-semibold">Headquarters</p>
          <h3 className="text-xl font-bold">1 location</h3>
          <p className="text-sm">Located in Bhopal, serving as our main.</p>
        </div>

        <div>
          <p className="font-semibold">Projects Completed</p>
          <h3 className="text-xl font-bold">500+</h3>
          <p className="text-sm">Successfully completed over 500 projects across.</p>
        </div>

        <div>
          <p className="font-semibold">Services Offered</p>
          <h3 className="text-xl font-bold">5+</h3>
          <p className="text-sm">Offering a diverse range of services including</p>
        </div>

        <div>
          <p className="font-semibold">Awards and Recognition</p>
          <h3 className="text-xl font-bold">10+</h3>
          <p className="text-sm">Awarded over 10 industry accolades for excellence.</p>
        </div>
      </div>
    </section>
  );
};

export default Agency;
