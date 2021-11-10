import { jobFairData } from "../../data/jobfairdata"

export default function handler(req, res) {
    res.status(200).json(jobFairData)
}