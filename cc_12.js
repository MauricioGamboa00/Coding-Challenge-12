// Task 1 Business Dashboard – DOM Element Selection and Creation

const dashboardId = document.getElementById("dashboard"); // Using getElementById to select dashboard
const dashboardQuery = document.querySelector("#dashboard"); // Using Query Selector to select dashboard

const revenueCard = document.createElement("div"); // Creating a new metric card in "div" called Revenue

revenueCard.setAttribute("class", "metric-card"); // Added class attribute for Revenue metric cards
revenueCard.setAttribute("id", "revenue-card"); // Added Id attribute to Revenue metric card

revenueCard.innerHTML = `
<h3>Revenue</h3>
<p>$ 0 </p>
`; // Populating the Revenue metric card

dashboardId.appendChild(revenueCard); // appending the Revenue metric card to the dashboard container

// Task 2 Updating Dashboard Metrics – Working with NodeLists and Arrays

const metricCards = document.querySelectorAll(".metric-card"); // Selecting all elements within metric card class

const metricCardsArray = [...metricCards]; // Converting Nodelist to an array

metricCardsArray.forEach(card => {
    card.innerText += " - Updated"; // added Updated text to metric cards
    card.style.backgroundColor = `green`; // Changing background color for each metric card to green
})

// Task 3 Dynamic Inventory Management – Adding and Removing Ite

const inventoryList = document.getElementById("inventoryList"); // Selecting inventory list

function addInventoryItem(productName) {
    const newItem = document.createElement("li"); // Creating a new list item
 

newItem.setAttribute("class", "product-item"); // Adding class attribute to new item
newItem.innerHTML = `${productName}` ; // Creating Inner HTML for new product

inventoryList.appendChild(newItem); // Appending new item to Inventory List

newItem.addEventListener("click", (event) => {
    inventoryList.removeChild(newItem);
}); // Adding an event listener to remove new items when it is clicked

}

// Task 4 Business Customer Section – Handling Event Bubbling

const CustomerSection = document.getElementById("customerSection"); // Selecting the customer section

CustomerSection.addEventListener("click", (event) => {
    console.log("Customer card Has been clicked")
}); // Added Event Listener to customer section

const customerCards = document.querySelectorAll(".customer-card"); // Used query selector to select customer cards
customerCards.forEach((card) => {
    card.style.backgroundColor = "blue"; // Changed background color to blue
    card.addEventListener("click", (event) => {
        console.log("Customer card Has been clicked"); // Added Event Listener to customer cards
        event.stopPropagation(); // Used stop propagation to prevent console logging from both customer section and customer cards
    });
})

