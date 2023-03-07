// Buatlah sebuah object constant bernama steamAccount
// Attribute steamAccount: email, password, isVerified, wallet, games (array of objects), friends (array of object steamAccount)
// Attribute setiap object games: name, rank (string)
// Tampilkan (console log) rank game pertama dari teman pertama


const steamAccount = {
    email : "andri@example.com",
    password : 123456,
    isVerified : true,
    wallet : 1000,
    games : [
        {
            name: "PUBG",
            rank: "Diamond"
        },
        {
            name: "CS-GO",
            rank: "Master"
        },
    ],
    friends : [
        {
            email: "burhan@example.com",
            password : 123456,
            isVerified : true,
            wallet : 1000,
            games : [
                {
                    name : "PUBG",
                    rank : "Diamond"
                },
                {
                    name : "CS-GO",
                    rank : "master"
                }
            ]
        },

    ]
};

console.log(steamAccount.friends[0].games[0]);


// const accountPrint = steamAccount;
// accountPrint.games = steamAccount.games[0];
// accountPrint.friends = steamAccount.friends[0];

// console.log(accountPrint)

// console.log(accountPrint);
// console.log(steamAccount.games[0]);

// const print = Object.keys(steamAccount)
//     .filter((key,value) => {
//         if(key === "games" || key === "friends") {
//             steamAccount.key = steamAccount.key[0]  
//         }
//     }
//     ).reduce ((steamAccount,))