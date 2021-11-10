import { benefitsInfo } from "../../data/benefitsdata"

export default function handler(req, res) {
    res.status(200).json(benefitsInfo)
  }