function updateAccountBalance() {
    var current_balance_el = document.getElementById('current-balance'); // Adjust the ID as necessary  
    var entered_amount_el = document.getElementById('entered-amount'); // Adjust the ID as necessary  

    // Parse the current balance and entered amount  
    var account_balance = parseInt(current_balance_el.innerText) + parseInt(entered_amount_el.value);

    // Check if the parsed values are numbers  
    if (isNaN(account_balance)) {
        alert("Please enter a valid amount.");
        return;
    }

    // Update the UI  
    current_balance_el.innerText = account_balance;
}

// Add event listener for a button click (adjust according to your UI)  
document.getElementById('update-button').addEventListener('click', updateAccountBalance);  