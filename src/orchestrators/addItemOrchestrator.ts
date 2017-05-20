import {orchestrator} from 'satcheljs';
import addItem from '../actions/addItem';
import localAddItem from '../actions/localAddItem';

orchestrator(addItem, async(actionMessage) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => { 
            console.log("RESOLVED");
            resolve(); 
        }, 100);
    });

    localAddItem(actionMessage.id, actionMessage.text);
});
