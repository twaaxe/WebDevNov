// username which startwidth 'a' endwith 'n'
let twitter_users = [{
    "user": "Amkissell0n"
}, {
    "user": "eroseblade1"
}, {
    "user": "llevy2"
}, {
    "user": "fsarath3"
}, {
    "user": "dcarss4"
}, {
    "user": "chilldrup5"
}, {
    "user": "absparry6N"
}, {
    "user": "hbearne7"
}, {
    "user": "gmaccrie8"
}, {
    "user": "Aacurteis9N     "
}]

twitter_users.map(function(item,index){
    
    // if(item.user.toLowerCase().trim().startsWith('a') && item.user.toLowerCase().trim().endsWith('n')){
    //     console.log(item)
    // }
    // console.log(item.user[0])
    // console.log(item.user[item.user.length-1])
    // console.log(item.user[item.user.length-1],"last letter")
    // "Aacurteis9N      " >   .trim()
    let userName = item.user.trim() // removed space from username
    // if(item.user[0].toLowerCase().trim() =='a' && userName[userName.length-1] =='n'){
    //     console.log(item.user)
    // }
    // console.log(item.user, item.user[item.user.length-1])

})