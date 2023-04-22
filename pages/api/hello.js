import DB from '../../utils/db'


export default function handler(req, res) {
  DB.disconnectDb()
  res.status(200).json({ name: 'John Doe' })
}
