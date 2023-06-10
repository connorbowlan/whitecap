import React from "react";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-blue-500 to-green-700 p-4 rounded-lg shadow-xl">
          Welcome to Whitecap Energy
        </h1>
        <p className="text-lg text-dark-1000 bg-white bg-opacity-80 p-4 rounded-lg shadow-xl">
          We are a leading provider of natural gas solutions, committed to <em style={{ fontStyle: 'italic', transform: 'skew(-10deg)' }}>sustainability and customer satisfaction</em>.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 underline">Our Story</h2>
        <p className="mb-4 text-dark-700 bg-white bg-opacity-80 p-4 rounded-lg shadow-xl">
          Whitecap Energy was founded in 20XX with a mission to provide affordable and sustainable natural gas solutions to residential and commercial customers. Our journey began with a small team of passionate individuals who recognized the potential of natural gas in creating a greener future. Over the years, we have grown into a trusted provider, serving thousands of customers with reliable and environmentally friendly energy solutions.
        </p>
        <p className="mb-4 text-dark-700 bg-white bg-opacity-80 p-4 rounded-lg shadow-xl">
          Today, we continue to innovate and expand our services, ensuring that our customers receive the best possible experience. We are proud to be at the forefront of the natural gas industry, driving positive change and contributing to a more sustainable world.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 underline">Why Choose Natural Gas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-500 to-green-700 text-white p-4 rounded-lg shadow-xl">
            <h3 className="text-xl font-medium mb-2">Cleaner Energy</h3>
            <p className="text-gray-300">
              Natural gas is a cleaner energy source with lower carbon emissions. It is widely used for electricity generation and is environmentally friendly.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-700 to-blue-500 text-white p-4 rounded-lg shadow-xl">
            <h3 className="text-xl font-medium mb-2">Saving Money</h3>
            <p className="text-gray-300">
              Natural gas is cost-effective, saving money on energy bills. It is abundant, domestically produced, and has long-lasting appliances.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 underline">Why Choose Whitecap Energy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-500 to-red-700 text-white p-4 rounded-lg shadow-xl">
            <h3 className="text-xl font-medium mb-2">Reliable Service</h3>
            <p className="text-gray-300">
              At Whitecap Energy, we prioritize reliability and ensure that our customers receive consistent and uninterrupted natural gas supply.
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-700 to-green-500 text-white p-4 rounded-lg shadow-xl">
            <h3 className="text-xl font-medium mb-2">Exceptional Customer Support</h3>
            <p className="text-gray-300">
              Our dedicated customer support team is available 24/7 to assist you with any inquiries or concerns regarding your natural gas service.
            </p>
          </div>
         
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 underline">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-700 to-red-600 text-white p-4 rounded-lg shadow-xl">
            <blockquote className="italic text-gray-300">
              "Whitecap Energy has been an excellent natural gas provider. Their service is reliable and their prices are competitive. Highly recommended!"
              <cite className="block mt-4 text-gray-400 font-medium">- John Smith</cite>
            </blockquote>
          </div>
          <div className="bg-gradient-to-r from-red-700 to-yellow-600 text-white p-4 rounded-lg shadow-xl">
            <blockquote className="italic text-gray-300">
              "Switching to natural gas with Whitecap Energy has been a game-changer. Not only am I saving money, but I also feel good about reducing my carbon footprint."
              <cite className="block mt-4 text-gray-400 font-medium">- Emily Johnson</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mb-12">
  <h2 className="text-2xl font-bold mb-6 underline">Fun Facts About Natural Gas</h2>
  <ul className="list-disc list-inside ml-6 text-black-700 space-y-2">
    <li className="flex items-center hover:text-blue-500">
      <svg className="w-4 h-4 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="8"></line>
      </svg>
      Natural gas is odorless and colorless in its pure form.
    </li>
    <li className="flex items-center hover:text-blue-500">
      <svg className="w-4 h-4 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="8"></line>
      </svg>
      Addition of odorants, such as mercaptan, gives natural gas its distinctive smell for detection purposes.
    </li>
    <li className="flex items-center hover:text-blue-500">
      <svg className="w-4 h-4 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="8"></line>
      </svg>
      Natural gas is lighter than air, which makes it dissipate quickly in case of a leak.
    </li>
    <li className="flex items-center hover:text-blue-500">
      <svg className="w-4 h-4 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="8"></line>
      </svg>
      Natural gas is highly versatile and used not only for heating and cooking but also in industrial processes and transportation.
    </li>
  </ul>
</section>



      <section className="mb-12">
  <h2 className="text-2xl font-bold mb-6 underline">Contact Us</h2>
  <div className="flex flex-col items-center text-center">
    <div className="relative bg-gradient-to-r from-blue-500 to-green-700 text-white p-4 rounded-lg shadow-xl transform perspective-left-20">
      <p className="text-lg text-dark-700 italic mb-4">
        If you have any questions or would like to learn more about our natural gas services, feel free to reach out to us.
      </p>
      <p className="font-medium">
        <span className="underline">Phone:</span> +1 123-456-7890
      </p>
      <p className="font-medium">
        <span className="underline">Email:</span> info@whitecapenergy.com
      </p>
      <div className="absolute inset-0 bg-white opacity-25 rounded-lg"></div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;











