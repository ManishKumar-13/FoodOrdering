const orderButton = document.getElementById('orderButton');
const orderCompleteMessage = document.getElementById('orderComplete');
const orderQueue = document.getElementById('orderQueue');

let orderIdCounter = 100;

orderButton.addEventListener('click', () => {
    const orderId = orderIdCounter++;
    const foodItems = document.querySelectorAll('.foodItems input[type="checkbox"]:checked');
    const foodItemNames = Array.from(foodItems).map(item => item.value).join(', ');

    if (foodItems.length === 0) {
        alert('Please select at least one food item.');
        return;
    }

     const orderElement = document.createElement('div');
    //orderElement.textContent = `Order ID: ${orderId} - Items: ${foodItemNames} - Status: Processing`;
    orderElement.innerHTML = `
    <span>Order ID: ${orderId}</span> 
    <span>Items: ${foodItemNames}</span>
    <span>Status: Processing</span>
    `;

    orderQueue.appendChild(orderElement);

    new Promise((resolve, reject) => {
        console.log(1);
        setTimeout(() => {
            resolve(orderId);
            console.log(2);
        }, Math.floor(Math.random() * 5000) + 2000); // Resolve after a random time between 2 to 7 seconds
    }).then((orderId) => {
        orderElement.innerHTML = `
        <span><b>Order ID:</b>${orderId}</span>

        <span><b>Items:</b> ${foodItemNames}</span>
        <span><b>Status:</b> Done</span>
        `;
    
        orderElement.style.backgroundColor = 'lightgreen'; // Change background color to green
        alert(`Order ID: ${orderId} completed.`);
        console.log(4);
    });
});






