document.getElementById('DepositSubmit').addEventListener('click', function(){
    const DepositInput = document.getElementById('depoinput');
    const DepositString = DepositInput.value;
    const DepositAmmount = parseFloat(DepositString);

    DepositInput.value = '';

    const PreviousDepo = document.getElementById('Deposit-balance');
    const PreviousDepoString = PreviousDepo.innerText;
    const PreviousDepositAmmount = parseFloat(PreviousDepoString);

    const NewDepositAmmount = DepositAmmount + PreviousDepositAmmount ;
    PreviousDepo.innerText = NewDepositAmmount;


    const InitialBalance = document.getElementById('Initial-balance');
    const InitialBalanceString = InitialBalance.innerText;
    const InitialBalanceAmmount = parseFloat(InitialBalanceString);
    
    const NewInitialBalance = DepositAmmount + InitialBalanceAmmount ;
    InitialBalance.innerText = NewInitialBalance; 
    
})
