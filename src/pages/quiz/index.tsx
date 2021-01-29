import React, { useState, useEffect } from 'react'

import Widget from '../../components/Widget'
import QuizLogo from '../../components/QuizLogo'
import QuizBackground from '../../components/QuizBackground'
import QuizContainer from '../../components/QuizContainer'
import Button from '../../components/Button'
import AlternativesForm from '../../components/AlternativesForm'

import db from '../../../db.json'

function LoadingWidget() {
    return (
    <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header>
  
        <Widget.Content>
          [Desafio do Loading]
        </Widget.Content>
      </Widget>
    );
}

function ResultWidget({ results }) {
    return (
    <Widget>
        <Widget.Header>
          Tela de resultado
        </Widget.Header>
  
        <Widget.Content>
            <div>Você acertou {results.filter(x => x === true).length} questões, parabéns!</div>
            <ul>
                {results.map((result, resultIndex) => 
                    <li key={resultIndex}>#0{resultIndex + 1} Resultado: {result === true ? 'Correta' : 'Errada'}</li>
                )}
            </ul>
        </Widget.Content>
      </Widget>
    );
}

function QuizWidget ({
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
                                onChange={() => setSelectedAlternative(alternativeIndex)}
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
            {isQuestionSubmited && isCorrect && <p>Você acertou</p>}
            {isQuestionSubmited && !isCorrect && <p>Você errou</p>}
            </AlternativesForm>
        </Widget.Content>
    </Widget>
    )
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function QuizPage () {
    const [screenState, setScreenState] = useState(screenStates.LOADING)
    const [results, setResults] = useState([]);
    const totalQuestions = db.questions.length;
    const [questionIndex, setQuestionIndex] = useState(0);
    const question = db.questions[questionIndex];

    function addResult (result) {
        setResults([...results, result])
    }

    useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ)
        }, 1 * 1000)
    }, [])

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1
        if(nextQuestion < totalQuestions) {
            setQuestionIndex(nextQuestion)
        } else {
            setScreenState(screenStates.RESULT)
        }
    }

    return (
        <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
        <QuizLogo className />
        {screenState === screenStates.QUIZ && (
          <QuizWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === 'LOADING' && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
    )
}