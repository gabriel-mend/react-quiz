import QuizScreen from "../../components/screens/Quiz"
import { ThemeProvider } from 'styled-components'
import { dbProps } from "../../types"

export default function QuizDaGaleraPage({ db }: dbProps) {
    return (
        <ThemeProvider theme={db.theme}>
            <QuizScreen data={db} />
        </ThemeProvider>
    )
}

export async function getServerSideProps({ query }) {
    const db = await fetch(`https://${query.id}.vercel.app/api/db`).then(response => response.json())
    return {
      props: {
          db
      }, 
    }
}