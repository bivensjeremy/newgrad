import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Welcome from '../comps/Homepage/Welcome'
import MoreforMeSection from '../comps/Homepage/MoreforMeSection'
import RecruiterSection from '../comps/Homepage/RecruiterSection'
import BenefitsSection from '../comps/Homepage/BenefitsSection'
import { server } from '../config'
import PathtoRN from '../comps/Homepage/PathtoRN'
import JobFairSection from '../comps/Homepage/JobFairSection'

export async function getServerSideProps() {
  const [jobFairRes, moreforMeRes, benefitsRes, recruiterRes] = await Promise.all([
    fetch(`${server}/api/jobfairapi`),
    fetch(`${server}/api/moreformeapi`),
    fetch(`${server}/api/benefitsapi`),
    fetch(`${server}/api/recruiterapi`)
  ]);
  const [jobFairData, moreForMeInfo, benefitsInfo, recruiterInfo] = await Promise.all([
    jobFairRes.json(),
    moreforMeRes.json(),
    benefitsRes.json(),
    recruiterRes.json()
  ]);
  return { props: { jobFairData, moreForMeInfo, benefitsInfo, recruiterInfo }};
}

export default function Home( { jobFairData, moreForMeInfo, benefitsInfo, recruiterInfo }) {
  return (
    <div className={styles.container}>
		<Head>
			<title>New Grad Recruitment Portal</title>
		</Head>
		
		<Welcome />

		<MoreforMeSection moreForMeInfo={moreForMeInfo} />

		<PathtoRN />
		
		<BenefitsSection benefitsInfo={benefitsInfo} />

    <JobFairSection jobFairData={jobFairData} />
		
    <RecruiterSection recruiterInfo={recruiterInfo} />
    
    </div>
  )
}
