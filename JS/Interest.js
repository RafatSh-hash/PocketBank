document.getElementById('CouponButton').addEventListener('click', function(){
    const CouponArea = document.getElementById('CouponArea');
    const CouponAreaString = CouponArea.value;

    CouponArea.value = '';

    const InitialBalance = document.getElementById('Initial-balance');
    const InitialBalanceString = InitialBalance.innerText;
    const InitialBalanceAmmount = parseFloat(InitialBalanceString);

    if(CouponAreaString === 'ABCDEF8'){
        const InterestedInitialBalance = InitialBalanceAmmount + InitialBalanceAmmount*(8/100);
        InitialBalance.innerText = InterestedInitialBalance;
    }
})