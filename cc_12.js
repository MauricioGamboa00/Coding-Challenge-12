// Task 1 Business Dashboard – DOM Element Selection and Creation

const dashboardId = document.getElementById("dashboard"); // Using getElementById to select dashboard
const dashboardQuery = document.querySelector("#dashboard"); // Using Query Selector to select dashboard

const revenueCard = document.createElement("div"); // Creating a new metric card in "div" called Revenue

revenueCard.setAttribute("class,", "metric-card"); // Added class attribute for Revenue metric cards
revenueCard.setAttribute("id", "revenue-card"); // Added Id attribute to Revenue metric card

revenueCard.innerHTML = `
<h3>Revenue</h3>
<p>$ 0</p>
`; // Populating the Revenue metric card

dashboardId.appendChild(revenueCard); // appending the Revenue metric card to the dashboard container