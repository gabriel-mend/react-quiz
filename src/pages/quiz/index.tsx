import QuizScreen from "../../components/screens/Quiz"
import { ThemeProvider } from 'styled-components'
import db from '../../../db.json'

export default function QuizPage () {
    return (
        <ThemeProvider theme={db.theme}>
            <QuizScreen data={db} />
        </ThemeProvider>
    )
}