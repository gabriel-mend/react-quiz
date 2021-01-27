import React, { useState, useEffect } from 'react'
import Widget from '../components/Widget'
import QuizLogo from '../components/QuizLogo'
import QuizBackground from '../components/QuizBackground'
import QuizContainer from '../components/QuizContainer'
import Button from '../components/Button'

import db from '../../db.json'

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

function QuizWidget ({
    question,
    totalQuestions,
    questionIndex,
    onSubmit
}) {
    const questionId = `question__${questionIndex}`
    const [answer, setAnswer] = useState(0);
    function handleClickAnswer() {

    }
    return (
    <Widget>
        <Widget.Header>
            <h3>Pergunta {questionIndex + 1} de {totalQuestions}</h3>
        </Widget.Header>
        <Widget.Banner src={question.image} />
        <Widget.Content>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
            <form onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }}>
                {question.alternatives.map((alternative, alternativeIndex) => {
                    const alternativeId = `alternative__${alternativeIndex}`
                    return (
                        <Widget.Topic 
                            key={alternativeId}
                            as="label"
                            hmtlFor={alternativeId}
                        >
                            <input 
                                type="radio"
                                value={answer}
                                //style={{ display: 'none'}}
                                id={alternativeId}
                                name={questionId}
                                onChange={(e) => {
                                    setAnswer(alternativeIndex)
                                    console.log(answer)
                                }}
                            />
                            {alternative}
                        </Widget.Topic>
                    )
                })}
            <Button type="submit">
                Confirmar
            </Button>
            </form>
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
    const totalQuestions = db.questions.length;
    const [questionIndex, setQuestionIndex] = useState(0);
    const question = db.questions[questionIndex];

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
          />
        )}
        {screenState === 'LOADING' && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
      </QuizContainer>
    </QuizBackground>
    )
}