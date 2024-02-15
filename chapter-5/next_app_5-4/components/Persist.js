import {useState} from "react";

function usePersist(ky, initVal) {
    const key = 'hooks: ' + ky;

    // useStateの初期値設定を関数でラッピングして、実行タイミングを遅らせる
    const [savedValue, setSavedValue] = useState(() => {
        if (typeof window !== "undefined") {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initVal;
            } catch (err) {
                console.log(err);
            }
        }
        return initVal;
    });

    // 実際の値の保存処理
    const setValue = (val) => {
        try {
            setSavedValue(val);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(val));
            }
        } catch (e) {
            console.log(e);
        }
    };

    return [savedValue, setValue];
}

export default usePersist;