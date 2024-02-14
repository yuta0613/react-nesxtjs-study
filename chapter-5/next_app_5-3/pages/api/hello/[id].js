import apiData from '../../../components/data'

export default function handler(req, res) {
    const {
        query: {id}
    } = req

    res.json(apiData[id])
}