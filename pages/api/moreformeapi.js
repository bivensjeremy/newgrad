import { moreForMeInfo } from "../../data/moreformedata"

export default function handler(req, res) {
    res.status(200).json(moreForMeInfo)
  }