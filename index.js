const myName = 'Илья';
const proframmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен Минин';
const reasonText = 'Мне это нравится и я хочу работать в этой сфере';
const numberOfMonth = '3'

console.log(`Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${proframmingLanguage} на курсе по ${proframmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${proframmingLanguage}, ${numberOfMonth} месяца. Я уверен что пройду данный курс до конца`)

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${proframmingLanguage} на курсе по ${proframmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${proframmingLanguage}, ${numberOfMonth} месяца. Я уверен что пройду данный курс до конца`

myInfoText = myInfoText.replaceAll(proframmingLanguage, 'javascript')
console.log(myInfoText)

myInfoText = myInfoText.replaceAll('курс', 'КУРС')
console.log(myInfoText)

console.log(myInfoText[0])
console.log(myInfoText[myInfoText.length - 1])
