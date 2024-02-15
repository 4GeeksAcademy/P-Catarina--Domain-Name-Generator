let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];


//Method 1
for (a of pronoun){
    for (b of adj){
        for (c of noun){
            for (d of extensions){
            console.log(/*'Method 1: ' +*/ a + b + c + d)
            }
        }
    }
}

//Method 2
pronoun.forEach(a => adj.forEach(b => noun.forEach(c => extensions.forEach(d => console.log(/*'Method 2: '+*/ a+b+c+d)))))