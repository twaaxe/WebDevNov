function checkLuhn(cardNo)
{
    let nDigits = cardNo.length;

    let nSum = 0;
    let isSecond = false;
    for (let i = nDigits - 1; i >= 0; i--)
    {

        let d = cardNo[i].charCodeAt() - '0'.charCodeAt();

        if (isSecond == true)
            d = d * 2;

        // We add two digits to handle
        // cases that make two digits
        // after doubling
        nSum += parseInt(d / 10, 10);
        nSum += d % 10;

        isSecond = !isSecond;
    }
    return (nSum % 10 == 0);
}

// 543210abcdef1234


// Lunh algorithm brute forcing 6 numbers
function LunhAlghorithm(){
    let combinations=[]
    // 10^6
    Array.from({length:10},(_,i)=>i).forEach((i)=>{
        Array.from({length:10},(_,j)=>j).forEach((j)=>{
            Array.from({length:10},(_,k)=>k).forEach((k)=>{
                Array.from({length:10},(_,l)=>l).forEach((l)=>{
                    Array.from({length:10},(_,m)=>m).forEach((m)=>{
                        Array.from({length:10},(_,n)=>n).forEach((n)=>{
                            let cardNo = `543210${i}${j}${k}${l}${m}${n}1234`
                            console.log(checkLuhn(cardNo)?cardNo:null);
                        })
                    })
                })
            })
        })
    })

    return combinations
    
}

console.log(LunhAlghorithm());

// console.log(checkLuhn("543210******1234"));