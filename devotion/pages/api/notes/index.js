import dbConnect from '../../../utils/dbConnect'
import Note from '../../../models/Note'

dbConnect();

export default async (req, res) => {
	const { method } = req;
	
	switch (method) {
		case 'GET':
		try{
			const notes = await Note.find({})

			res.status(200).json({success: true, data:notes})
			console.log(res.json())
		}catch (error) {
			res.status(400).json({success: false})
			console.log(res.json())
		}
		case 'POST':
		try{
			const note = await Note.create(req.body)

			res.status(201).json({success: true, data: note })
			console.log(res.json())
		}catch (error) {
			res. status(400).json({success: false})
			console.log(res.json())
		}
		break;
		default:
			res.status(400).json({success: false})
	
	}







}