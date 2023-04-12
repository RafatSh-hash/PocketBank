document.getElementById('WithdrawSubmit').addEventListener('click', function(){
    const WithdrawInput = document.getElementById('Withinput');
    const WithdrawInputString = WithdrawInput.value;
    const WithdrawAmmount = parseFloat(WithdrawInputString);

    WithdrawInput.value = '';
    
    const PreviousWith = document.getElementById('Withdraw-balance');
    const PreviousWithString = PreviousWith.innerText;
    const PreviousWithdrawAmmount = parseFloat(PreviousWithString);

    const NewWithdrawAmmount = PreviousWithdrawAmmount + WithdrawAmmount;
    PreviousWith.innerText = NewWithdrawAmmount; 

    const InitialBalance = document.getElementById('Initial-balance');
    const InitialBalanceString = InitialBalance.innerText;
    const InitialBalanceAmmount = parseFloat(InitialBalanceString);

    const NewInitialBalance = InitialBalanceAmmount - WithdrawAmmount;
    InitialBalance.innerText = NewInitialBalance;
})