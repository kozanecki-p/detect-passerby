import {MyClassificationPipeline} from './pipeline.js';

async function testText(text) {
    const classifier = await MyClassificationPipeline.getInstance();
    const result = await classifier(text);
    return result;
} 

console.log("Hello")
testText("I like you").then(resp => console.log(resp));
testText("I hate you").then(resp => console.log(resp));