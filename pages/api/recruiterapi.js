import { recruiterBioInfo } from "../../data/recruiterbiodata"

export default function handler(req, res) {
    res.status(200).json(recruiterBioInfo)
  }