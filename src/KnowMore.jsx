import React from "react";
import Navbar from "./components/Navbar";
const KnowMore = () => {
  return (
    <>
    <div className="bg-gray-300">

    <Navbar />
    <div className="max-w-5xl mx-auto p-6 space-y-10 font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Know More About Rainwater Harvesting</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Introduction: Why Rainwater Matters</h2>
        <p>
          Water is fundamental to life, yet accessible freshwater is an increasingly scarce resource in many regions.
          Rainwater, a key aspect of the global water cycle, offers an opportunity to augment supplies and preserve groundwater,
          particularly as urbanization and erratic climate patterns put ecosystems under stress. Harvesting rainwater helps 
          communities become more resilient and self-sufficient during shortages, floods, or infrastructure failures.
        </p>
      </section>

      {/* Fast Facts */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Fast Facts & Key Stats</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>The Earth’s average annual rainfall is about 990 mm, but less than 30% falls on land.</li>
          <li>In India, almost 70% of annual rainfall occurs during the monsoon; harvesting even a fraction could meet much of the country's domestic water needs.</li>
          <li>Well-designed rainwater harvesting systems can lower urban water bills by up to 40%.</li>
          <li>Collected rainwater is often free from chemical salts and can be suitable for many uses after basic filtration.</li>
        </ul>
      </section>

      {/* What is Rainwater Harvesting */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">What is Rainwater Harvesting?</h2>
        <p>
          Rainwater harvesting is the process of collecting and storing rainwater for reuse, typically from rooftops or land surfaces. 
          This ancient practice can be easily implemented in both rural and urban areas and is recognized worldwide as a low-cost, sustainable 
          approach to water management. Applications range from gardening and washing to groundwater recharge or, after treatment, even drinking.
        </p>
      </section>

      {/* Modern Methods */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Modern Rainwater Harvesting Methods</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Rooftop Harvesting:</strong> Rainwater is captured from building roofs and conveyed into storage tanks, sumps, or recharge pits via gutters and downpipes. Filters remove debris, and first-flush devices divert initial polluted runoff.</li>
          <li><strong>Surface Runoff Harvesting:</strong> Collects water flowing over land or open surfaces, channeling it into ponds, percolation tanks, or recharge structures.</li>
          <li><strong>Recharge Wells/Pits:</strong> Specialized pits or wells allow rainwater to infiltrate into the ground, enhancing aquifers.</li>
          <li><strong>Rain Barrels/Water Butts:</strong> Small home systems popular for garden watering and secondary uses.</li>
          <li><strong>Urban Stormwater Management:</strong> Larger city systems collect, filter, and reuse rainfall, reducing flooding and supplementing supply.</li>
        </ul>
      </section>

      {/* Traditional Methods */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Traditional Methods Adopted in India</h2>
        <div className="overflow-x-auto border-1 border-gray-500">
          <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 font-semibold text-left">Method</th>
                <th className="px-4 py-2 font-semibold text-left">Region & Description</th>
              </tr>
            </thead>
            <tbody className="bg-gray-300 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-medium">Guls/Kuls</td>
                <td className="px-4 py-2">Channels in Himalayan areas diverting stream water to irrigate farms.</td>
              </tr>
              <tr className="bg-gray-400">
                <td className="px-4 py-2 font-medium">Rooftop Tankas</td>
                <td className="px-4 py-2">Underground tanks collecting rooftop rainwater in Rajasthan and Gujarat.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Khadins</td>
                <td className="px-4 py-2">Earthen embankments trap surface runoff for slow percolation and water use, common in Rajasthan.</td>
              </tr>
              <tr className="bg-gray-400">
                <td className="px-4 py-2 font-medium">Johads</td>
                <td className="px-4 py-2">Earthen check dams and ponds used for water storage and groundwater recharge in Rajasthan and Haryana.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Kunds</td>
                <td className="px-4 py-2">Circular underground tanks fed by catchment slopes, used in arid regions for water storage.</td>
              </tr>
              <tr className="bg-gray-400">
                <td className="px-4 py-2 font-medium">Ahar Pynes</td>
                <td className="px-4 py-2">Reservoir-canal systems in Bihar storing monsoon runoff for agriculture.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Eris</td>
                <td className="px-4 py-2">Large interconnected tanks in Tamil Nadu collecting rain for irrigation and aquifer recharge.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Research Highlights */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Research Highlights & Real-World Impact</h2>
        <p>
          Studies confirm that rainwater harvesting raises groundwater levels and provides a reliable backup during dry spells. 
          These systems reduce dependence on stressed water sources, delivering environmental, economic, and social benefits. 
          Widespread adoption has curbed urban flooding and restored wells in rural communities. Filtration and proper maintenance 
          make harvested rainwater suitable for most domestic and irrigation needs.
        </p>
      </section>

      {/* Did You Know */}
      <section className="bg-blue-50 p-5 rounded border border-blue-200">
        <h3 className="text-xl font-semibold mb-3">Did You Know?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Ancient Indian water harvesting structures like johads and eris have UNESCO heritage status and remain functional.</li>
          <li>Rooftop tankas in Rajasthan can keep water fresh for months, serving families through drought.</li>
          <li>Collecting just 1mm of rainfall from a 100 sqm roof yields 100 liters of water.</li>
          <li>Many Indian cities mandate rainwater harvesting for new buildings to promote sustainability.</li>
        </ul>
      </section>

      {/* Further Reading */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Further Reading & Resources</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-700 underline cursor-pointer">
          <li>Central Ground Water Board: Manuals and guidelines on rainwater harvesting</li>
          <li>Government rainfall and water conservation dashboards</li>
          <li>Ministry of Jal Shakti water resource reports</li>
          <li>International Rainwater Catchment Systems Association (IRCSA) resources</li>
        </ul>
      </section>
    </div>
    </div>
    </>
  );
};

export default KnowMore;
