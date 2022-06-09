export function main(): void{
    console.log("CentWong Program's v1.0");
    console.log("=========================");
    let isValid: boolean = false;
    let itemName: string = "";
    do{
        itemName = prompt("Input item's name [5-30 characters] : ");
        isValid = itemName.length >= 5 && itemName.length <= 30;
    }
    while(!isValid);
    isValid = false;
    let itemPrice: number = 0;
    do{
        itemPrice = parseFloat(prompt("Input item's price [10-2000] : "));
        isValid = itemPrice >= 10 && itemPrice <= 2000;
    }
    while(!isValid);
    menu(itemName, itemPrice, 50);
}

export function menu(itemName: string, itemPrice: number, itemStock: number){
    console.log("Welcome to CentWong's Menu ^-^");
    console.log("=========================");
    console.log("1. Sell item");
    console.log("2. Restock item");
    console.log("3. Exit");
    let choice: number = 0;
    try{
        choice =  parseInt(prompt("Your choice : "));
    }
    catch(exception){
        console.log("Input must be number! ");
    }
    switch(choice){
        case 1:
            choiceOne();
            break;
        case 2:
            choiceTwo();
            break;
        case 3:
            console.log("=======EXITING SYSTEM=======");
    }
}

export function choiceOne(){

}

export function choiceTwo(){

}
main();