import { useStep } from "react-hooks-helper";
import { useFormik } from 'formik'
import { server } from '../config'
import { newGradSchema } from "../Validations/newgradregvalidation";
import Step_00 from "../comps/NewGradRegistration/Step_00";
import Step_01 from "../comps/NewGradRegistration/Step_01";
import Step_02 from "../comps/NewGradRegistration/Step_02";
import Step_03 from "../comps/NewGradRegistration/Step_03";
import Step_04 from "../comps/NewGradRegistration/Step_04";
import Step_05 from "../comps/NewGradRegistration/Step_05";
import Step_06 from "../comps/NewGradRegistration/Step_06"
import NewGradProfile from "../comps/NewGradRegistration/NewGradProfile";
import Router from 'next/router'

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/nursingareasapi`)
  const nursingAreas = await res.json()
  return { props: { nursingAreas }}
}

const steps = [
    {id: 'step_00'},
    {id: 'step_01'},
    {id: 'step_02'},
    {id: 'step_03'},
    {id: 'step_04'},
    {id: 'step_05'},
    {id: 'step_06'},
    {id: 'review'},
    {id: 'submit'}
]

const RegisterNewGrad = ({nursingAreas}) => {
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    })

      const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            school: '',
            graduationYear: '',
            program: '',
            extern: false,
            department: {
                AcuteCare: '',
                BehavioralHealth: '',
                CardiacStepDown: '',
                CancerCenter: '',
                CCU: '',
                GenSurg: '',
                LaborAndDelivery: '',
                MICU: '',
                MotherBaby: '',
                NICU: '',
                Oncology: '',
                OrthoNeuro: '',
                Pediatrics: '',
                Rehab: '',
                SICU: '',
                WoundCare: '',
            },
            takenNCLEX: '',
            passedNCLEX: '',
            nclexScheduled: '',
            nclexDate: '',
            takenExitExam: '',
            exitExamScheduled: '',
            exitExamDate: '',
            nclexScores: '',
            exitExamScores: '',
            exitExamTest: '',
            position: '',
        },
        onSubmit: async(values) => {
            // alert(JSON.stringify(values, null, 2));
            const response = await fetch('/api/newgradapi', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json' 
                },
                body: JSON.stringify(values),
            });
                
            const resData = await response.json();
            if (resData.status === 'success'){
                Router.push('/confirmation')
            } else if (resData.status === 'fail'){
                alert('Something went wrong. Please email admin@bivensblueprint.com for troubleshooting')
            }
        },
         validationSchema: newGradSchema
    })
    
    const props = { nursingAreas, newGradSchema, navigation, formik, step }

    switch (step.id){
      case 'step_00':
          return <Step_00 {...props} />
      case "step_01":
          return <Step_01 {...props} />
      case "step_02":
          return <Step_02 {...props} /> 
      case 'step_03':
          return <Step_03 {...props} />
      case "step_04":
          return <Step_04 {...props} />
      case "step_05":
          return <Step_05 {...props} /> 
      case "step_06":
          return <Step_06 {...props} /> 
        case "review":
            return <NewGradProfile {...props} />
    }
      
    return (
        <div></div>
    );
}

export default RegisterNewGrad;