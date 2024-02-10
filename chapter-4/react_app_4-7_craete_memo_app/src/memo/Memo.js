import React from "react";
import usePersist from "../Persist";

import Item from './Item'

function Memo (props)  {
    const [memo, setMemo] = usePersist("memo", [])
    const [fmemo, setFMemo]  = usePersist("findMemo", [])
    const [mode] = usePersist('mode', 'default')

    let data = []

    switch (mode) {
        case 'default':
            data = memo.map((value, key) => (<Item key={value.message} value={value} index={key+1} />))
            break

        case 'find':
            data = fmemo.map((value, key) => (<Item key={value.message} value={value} index={key+1} />))
            break

        default:
            data = memo.map((value, key)=>(
                < Item key={value.message} value={value} index={key+1} />
                ))
    }

    return (
        <table className="table mt-4">
            <tbody>{data}</tbody>
        </table>
    )
}

export default Memo