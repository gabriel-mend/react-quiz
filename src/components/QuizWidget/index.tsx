import { useState } from 'react'

import Widget from '../../styles/Widget';
import AlternativesForm from '../../styles/AlternativesForm'
import Button from '../Button'

import { XCircle, CheckCircle } from 'react-feather'

export default function QuizWidget ({
    question,
    totalQuestions,
    questionIndex,
    onSubmit,
    addResult
}) {
    const questionId = `question__${questionIndex}`
    const [selectedAlterntive, setSelectedAlternative] = useState(undefined)
    const [isQuestionSubmited, setIsQuestionSubmited] = useState(false)
    const isCorrect = selectedAlterntive === question.answer;
    
    return (
    <Widget>
        <Widget.Header>
            <h3>Pergunta {questionIndex + 1} de {totalQuestions}</h3>
        </Widget.Header>
        <Widget.Banner src={question.image} />
        <Widget.Content>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
            <AlternativesForm onSubmit={(e) => {
                e.preventDefault()
                setIsQuestionSubmited(true)
                setTimeout(() => {
                    addResult(isCorrect)
                    onSubmit()
                    setIsQuestionSubmited(false)
                    setSelectedAlternative(undefined)
                }, 1 * 1000)
            }}>
                {question.alternatives.map((alternative, alternativeIndex) => {
                    const alternativeId = `alternative__${alternativeIndex}`
                    const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                    const isSelected = selectedAlterntive === alternativeIndex
                    return (
                        <Widget.Topic 
                            key={alternativeId}
                            as="label"
                            hmtlFor={alternativeId}
                            data-selected={isSelected}
                            data-status={isQuestionSubmited && alternativeStatus}
                        >
                            <input 
                                type="radio"
                                style={{ display: 'none'}}
                                onClick={() => setSelectedAlternative(alternativeIndex)}
                                value={selectedAlterntive}
                                id={alternativeId}
                                name={questionId}
                            />
                            {alternative}
                        </Widget.Topic>
                    )
                })}
            <Button type="submit" disabled={selectedAlterntive === undefined}>
                Confirmar
            </Button>
            {isQuestionSubmited && isCorrect && <CheckCircle className="icon" size={40} color="#4CAF50" />}
            {isQuestionSubmited && !isCorrect && <XCircle className="icon" size={40} color="#f44336" />}
            </AlternativesForm>
        </Widget.Content>
    </Widget>
    )
}