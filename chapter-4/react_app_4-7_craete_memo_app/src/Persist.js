import {useState} from "react";

function  usePersist(ky, initVal) {
    const key = 'hooks: ' + ky
    const value =  () => {
        try{
            const  item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initVal
        } catch (err) {
            console.log(err)
            return initVal;
        }
    }

    const setValue= (val) => {
        try {
            setSavedValue(val)
            window.localStorage.setItem(key, JSON.stringify(val))
        } catch (e){
            console.log(e)
        }
    }
    const [savedVale, setSavedValue] = useState(value)
    return [savedVale, setValue]
}

export default usePersist