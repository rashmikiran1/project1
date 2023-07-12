const expenseForm = document.querySelector('form');
const expenseTable = document.querySelector('#expense-list');

let expenses = JSON.parse(localStorage.getItem('expenses')) || []; 

function addExpense(expense, amount) {
  expenses.push({
    expense: expense,
    amount: amount
  });
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses();
  expenseForm.reset();
}

function displayExpenses() {
  expenseTable.innerHTML = '';
  expenses.forEach(function(expense, index) {
    expenseTable.innerHTML += `
      <tr>
        <td>${expense.expense}</td>
        <td>${expense.amount}</td>
        <td>
          <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
          <button class="btn btn-sm btn-primary edit-btn" data-index="${index}">Edit</button>
        </td>
      </tr>
    `;
  });
  
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const index = this.dataset.index;
      deleteExpense(index);
    });
  });
  
  const editButtons = document.querySelectorAll('.edit-btn');
  editButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const index = this.dataset.index;
      editExpense(index);
    });
  });
}

displayExpenses();

function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses();
}

function editExpense(index) {
  const expense = expenses[index];
  const expenseInput = document.querySelector('#expense');
  const amountInput = document.querySelector('#amount');
  expenseInput.value = expense.expense;
  amountInput.value = expense.amount;
  
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses();
  
  expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newExpense = expenseInput.value;
    const newAmount = parseFloat(amountInput.value);
    if (newExpense !== '' && !isNaN(newAmount)) {
      addExpense(newExpense, newAmount);
      expenseForm.reset();
    }
  });
}

expenseForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const expense = document.querySelector('#expense').value;
  const amount = parseFloat(document.querySelector('#amount').value);
  if (expense !== '' && !isNaN(amount)) {
    addExpense(expense, amount);
    expenseForm.reset();
  }
});

