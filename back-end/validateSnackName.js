const validateSnackName = (snack) => {
    if(!snack.image){
        snack.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
    }

    let splitName = snack.name.split(" ");
    let adjustedName = splitName.map((word) => {
        if(word.length> 2){
            return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
        }else{
            return word.toLowerCase();
        }
    }).join(" ");
    return adjustedName;
}

module.exports = validateSnackName;