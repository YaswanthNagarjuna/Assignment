import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const cardData = [
    {
      title: "Earnings",
      value: "$189K",
      imageUrl: "./assets/earnings.png",
      change: 37,
    },
    {
      title: "Orders",
      value: "$2.4K",
      imageUrl: "./assets/orders.png",
      change: -2,
    },
    {
      title: "Balance",
      value: "$2.4K",
      imageUrl: "./assets/balance.png",
      change: -2,
    },
    {
      title: "Total Sales",
      value: "$89K",
      imageUrl: "./assets/sales.png",
      change: 11,
    },
  ];

  const productData = [
    {
      productName: "Abstract 3D",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: 150,
      imageUrl: "./assets/product1.jpg",
    },
    {
      productName: "Sarphens Illustration",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: 150,
      imageUrl: "./assets/product2.jpg",
    },
  ];

  const [selectedDuration, setSelectedDuration] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const incomeChartRef = useRef(null);
  const customersChartRef = useRef(null);

  useEffect(() => {
    const incomeChart = new Chart(incomeChartRef.current, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Monthly Income",
            data: [
              9000, 12000, 15000, 22000, 14000, 20000, 18000, 25000, 22000,
              28000, 21000, 17000,
            ],
            backgroundColor: [
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "#00008b",
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
              "rgba(169, 169, 169, 0.7)", // Grey for other bars
            ],
            borderWidth: 0, // Remove the bar border
            borderRadius: 10,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true, // Show x-axis
            beginAtZero: true,
            grid: {
              display: false, // Hide the scale
            },
          },
          y: {
            display: false, // Hide y-axis
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    });

    // Create the customers pie chart
    const customersChart = new Chart(customersChartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Abstreact 3D", "Sarphens Illustration", "Both books"],
        datasets: [
          {
            data: [15, 30, 35], // Modify with actual data
            backgroundColor: ["#9D446E", "#4B0082", "#59788E"],
            borderWidth: [5, 3, 1],
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    });

    // Ensure proper cleanup when the component unmounts
    return () => {
      incomeChart.destroy();
      customersChart.destroy();
    };
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold">Hello Sharukh</div>
        <div className="relative overflow-auto">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded p-2 w-40 pl-10" // Add left padding for the search icon
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute top-3 left-3 text-gray-400" // Adjust top and left positions as needed
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md flex items-center"
          >
            <div className="mr-4">
              <img src={card.imageUrl} alt={card.title} className="h-16 w-16" />
            </div>
            <div>
              <div className="text-sm">{card.title}</div>
              <div className="text-2xl font-bold">{card.value}</div>
              {card.change > 0 ? (
                <span className="text-green-500 font-medium">
                  &#8593; +{card.change}%
                </span>
              ) : (
                <span className="text-red-500 font-medium">
                  &#8595; {card.change}%
                </span>
              )}
              &nbsp;This month
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-8 gap-10 w-full">
        {/* Monthly Income Bar Chart Card */}

        <div className="p-2 bg-white rounded-lg shadow-md flex-1 relative w-fit">
          <div className="ml-4">
            <div className="text-lg font-bold">Overview</div>
            <div className="text-xs font-light">Monthly Income</div>
          </div>
          <div className="absolute top-0 right-0 mr-4">
            <select
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="p-2"
            >
              <option value="quaterly">Quaterly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <canvas ref={incomeChartRef}></canvas>
        </div>

        {/* New Customers Pie Chart Card */}
        <div className="p-2 bg-white rounded-lg shadow-md">
          <div className="text-lg font-bold">Customers</div>
          <div className="text-xs font-light">Customer that buy products</div>
          <canvas ref={customersChartRef}></canvas>
        </div>
      </div>
      <div className="w-full p-2 bg-white rounded-t-lg shadow-md flex-grow mt-8">
        <div className="flex justify-between items-center font-bold p-2">
          <div>Product Sell</div>
          <div className="flex flex-wrap items-center space-x-2">
            <div className="relative overflow-auto">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded p-2 w-40 pl-10" // Add left padding for the search icon
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-3 left-3 text-gray-400" // Adjust top and left positions as needed
              />
            </div>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              <option value="30days">Last 30 Days</option>
              <option value="10days">Last 10 Days</option>
            </select>
          </div>
        </div>
        <div className="flex text-sm font-bold p-2">
          <div className="w-2/5">Product Name</div>
          <div className="w-1/5 text-right">Stock</div>
          <div className="w-1/5 text-right">Price</div>
          <div className="w-1/5 text-right">Total Sales</div>
        </div>
      </div>
      <div className="w-full p-2 bg-white shadow-md flex-grow mt-1">
        {productData
          .filter((product) =>
            product.productName
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
          .map((product, index) => (
            <div key={index} className="p-2 flex">
              <div className="w-2/5">
                <div className="flex flex-wrap items-center">
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-16 h-12 object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold">{product.productName}</div>
                    <div className="text-xs">{product.summary}</div>
                  </div>
                </div>
              </div>
              <div className="w-1/5 text-right">{product.stock}</div>
              <div className="w-1/5 text-right font-semibold">
                {product.price}
              </div>
              <div className="w-1/5 text-right">{product.totalSales}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
