const answers = [];

answers[0] = prompt('Куда перейти?', '');

const category1 = 'trending'

if (answers[0] == 'тренды'){
    console.log('https://www.youtube.com/feed/' + category1)
}

const category2 = 'subscriptions'
if (answers[0] == 'субскрипции'){
    console.log('https://www.youtube.com/feed/' + category2)
}




