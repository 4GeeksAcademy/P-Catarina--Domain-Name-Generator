let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];


let generator = "";

for (a of pronoun){
    for (b of adj){
        for (c of noun){
            for (d of extensions){
            console.log(generator = a + b + c + d)
            }
        }
    }
}
