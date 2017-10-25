
const jobs =document.querySelectorAll('.job input');
const activeDay =document.querySelectorAll('tr');
const day =document.querySelectorAll('.day');
const done = document.querySelectorAll('.done');

let todoList = [];


jobs.forEach((job,i)=>{
    //sukuriam 7 tuscius objektus
    // vienas obj vienai dienai

    // paimu objekta is localstorage
    let todoHistory=JSON.parse(localStorage.getItem('todo'));

    // jei objekto nera, tai todHistory bus undefined, ir salyga nebus vykdoma
    if(todoHistory){
        console.log('loca exists');
        job.value=todoHistory[i].todo;
        jobs[i].style.textDecoration=todoHistory[i].decor;
        done[i].textContent=todoHistory[i].done;
        done[i].style.color=todoHistory[i].color;
        todoList.push(todoHistory[i]);
        
    }else{
        console.log('loca  does not exist');
        todoList.push({
            day:day[i].textContent,
            todo:'',
            done:'X',
            color:'black',
            decor:'',
        });
    }

    //uzdaam event listenerius ant inputu
    job.addEventListener('input', function () {

        // irasom property toodo su imputo verte
        todoList[i].todo=jobs[i].value;

        //set JSON i localstorage
        localStorage.setItem('todo', JSON.stringify(todoList))
    })
});
let counter=0;
done.forEach((item, i)=>{
    item.addEventListener('click', function () {
        counter++
        if(counter%2==0){
        item.textContent='V';
        item.style.color='red';
        todoList[i].color='red';
        todoList[i].decor=jobs[i].style.textDecoration='line-through';
        todoList[i].done='V';
        
        console.log(todoList)
        localStorage.setItem('todo', JSON.stringify(todoList))
           }else {
        item.textContent='X';
        item.style.color='black';
        todoList[i].color='black';
        todoList[i].decor=jobs[i].style.textDecoration='none';
        todoList[i].done='X';
        console.log(todoList)
        localStorage.setItem('todo', JSON.stringify(todoList))
           }

    })
});



let now = new Date();
let weekDay = now.getDay()-1;

activeDay[weekDay].style.backgroundColor='lightgreen';
jobs[weekDay].style.backgroundColor='lightgreen';


// uzsaugoti info i localstorage
localStorage.setItem('raktas', '💩💩💩');
