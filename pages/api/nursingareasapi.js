import { nursingAreasData } from "../../data/nursingareasdata"

export default function handler(req, res) {
    res.status(200).json(nursingAreasData)
  }