import heroes from '../../../static/data.json'

export default async (req, res) => {
    res.status(200).json(heroes)
}