
const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']


function generateRubbish(people) {
    // 誰進來了 隨機取出task中對應值
    const peopleLength = task[people].length
    const taskRandomIndex = Math.floor(Math.random() * peopleLength)
    const taskRubbish = task[people][taskRandomIndex]
 
    // 隨機取出phrase 一個值
    const phraswLength = phrase.length
    const phraseRandomIndex = Math.floor(Math.random() * phraswLength)
    const phraseRubbish = phrase[phraseRandomIndex]

    // 兩個家再一起
    const rubbish = taskRubbish + phraseRubbish
    return rubbish
}
module.exports = generateRubbish
