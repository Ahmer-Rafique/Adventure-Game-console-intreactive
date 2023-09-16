import inquirer from "inquirer";
import chalk from "chalk";
class Player{
    name:string
    fule:number=100
       constructor(name:string){
        this.name=name
       }
       fuleDecrease(){
        let fule = this.fule - 25;
        this.fule = fule
       };
       fuleIncrease(){
        this.fule=100;
       }
};
class Opponent{
    name:string
    fule:number=100
       constructor(name:string){
        this.name=name
       }
       fuleDecrease(){
        let fule = this.fule - 25;
        this.fule = fule
       };
       
};
let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"please Enter your Name :"
});
let opponent = await inquirer.prompt({
    type:"list",
    name:"slect",
    message:"Please Select Your Opponent",
    choices:["Anas", "Abdul-Basit", "Fayaz","Puma"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.slect);
do{
    //Anas
    if(opponent.slect=="Anas")
    {
    let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select your Task",
        choices:["Attack", "Drink Portion" ,"Run for your Life....." ]
    });
    if(ask.opt=="Attack"){
        let num = Math.floor(Math.random() * 2);
        if(num > 0){
            p1.fuleDecrease();
            console.log(chalk.bold.red(`${p1.name} fule is ${p1.fule}`));
            console.log(chalk.bold.green(`${o1.name} fule is ${o1.fule}`));
            if(p1.fule<=0){
                console.log(chalk.bold.yellow.italic("You loss , Better Luck next Time..."))
                process.exit();
         } };
        if(num <= 0){
            o1.fuleDecrease();
            console.log(chalk.bold.red(`${o1.name} fule is ${o1.fule}`));
            console.log(chalk.bold.green(`${p1.name} fule is ${p1.fule}`));
            if(o1.fule<=0){
                console.log(chalk.bold.green.italic("You Win...."))
                process.exit();
            }
            
        };
    };
    if(ask.opt=="Drink Portion"){
        p1.fuleIncrease();
        console.log(chalk.bold.italic.green(`You drink Health portion your Fule is ${p1.fule}`))
    };
    if(ask.opt=="Run for your Life....."){
        console.log(chalk.bold.yellow.italic("You loss , Better Luck next Time..."))
        process.exit();
    };
    
    };
    //Abdul-Basit
    if(opponent.slect=="Abdul-Basit")
    {
    let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select your Task",
        choices:["Attack", "Drink Portion" ,"Run for your Life....." ]
    });
    if(ask.opt=="Attack"){
        let num = Math.floor(Math.random() * 2);
        if(num > 0){
            p1.fuleDecrease();
            console.log(chalk.bold.red(`${p1.name} fule is ${p1.fule}`));
            console.log(chalk.bold.green(`${o1.name} fule is ${o1.fule}`));
            if(p1.fule<=0){
                console.log(chalk.bold.yellow.italic("You loss , Better Luck next Time..."))
                process.exit();
         } };
        if(num <= 0){
            o1.fuleDecrease();
            console.log(chalk.bold.red(`${o1.name} fule is ${o1.fule}`));
            console.log(chalk.bold.green(`${p1.name} fule is ${p1.fule}`));
            if(o1.fule<=0){
                console.log(chalk.bold.green.italic("You Win...."))
                process.exit();
            }
            
        };
    };
    if(ask.opt=="Drink Portion"){
        p1.fuleIncrease();
        console.log(chalk.bold.italic.green(`You drink Health portion your Fule is ${p1.fule}`))
    };
    if(ask.opt=="Run for your Life....."){
        console.log(chalk.bold.yellow.italic("You loss , Better Luck next Time..."))
        process.exit();
    };
    
    };
    //Fayaz
    if(opponent.slect=="Fayaz")
    {
    let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select your Task",
        choices:["Attack", "Drink Portion" ,"Run for your Life....." ]
    });
    if(ask.opt=="Attack"){
        let num = Math.floor(Math.random() * 2);
        if(num > 0){
            p1.fuleDecrease();
            console.log(chalk.bold.red(`${p1.name} fule is ${p1.fule}`));
            console.log(chalk.bold.green(`${o1.name} fule is ${o1.fule}`));
            if(p1.fule<=0){
                console.log(chalk.bold.yellow.italic("You loss , Better Luck next Time..."))
                process.exit();
         } };
        if(num <= 0){
            o1.fuleDecrease();
            console.log(chalk.bold.red(`${o1.name} fule is ${o1.fule}`));
            console.log(chalk.bold.green(`${p1.name} fule is ${p1.fule}`));
            if(o1.fule<=0){
                console.log(chalk.bold.green.italic("You Win...."))
                process.exit();
            }
            
        };
    };
    if(ask.opt=="Drink Portion"){
        p1.fuleIncrease();
        console.log(chalk.bold.italic.green(`You drink Health portion your Fule is ${p1.fule}`))
    };
    if(ask.opt=="Run for your Life....."){
        console.log(chalk.bold.yellow.italic("You loss , Better Luck next Time..."))
        process.exit();
    };
    
    };
    //puma
    if(opponent.slect=="Puma")
    {
    let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select your Task",
        choices:["Attack", "Drink Portion" ,"Run for your Life....." ]
    });
    if(ask.opt=="Attack"){
        let num = Math.floor(Math.random() * 2);
        if(num > 0){
            p1.fuleDecrease();
            console.log(chalk.bold.red(`${p1.name} fule is ${p1.fule}`));
            console.log(chalk.bold.green(`${o1.name} fule is ${o1.fule}`));
            if(p1.fule<=0){
                console.log(chalk.bold.yellow.italic("You loss , Better Luck next Time..."))
                process.exit();
         } };
        if(num <= 0){
            o1.fuleDecrease();
            console.log(chalk.bold.red(`${o1.name} fule is ${o1.fule}`));
            console.log(chalk.bold.green(`${p1.name} fule is ${p1.fule}`));
            if(o1.fule<=0){
                console.log(chalk.bold.green.italic("You Win...."))
                process.exit();
            }
            
        };
    };
    if(ask.opt=="Drink Portion"){
        p1.fuleIncrease();
        console.log(chalk.bold.italic.green(`You drink Health portion your Fule is ${p1.fule}`))
    };
    if(ask.opt=="Run for your Life....."){
        console.log(chalk.bold.yellow.italic("You loss , Better Luck next Time..."))
        process.exit();
    };
    
    };
}
while(true)




