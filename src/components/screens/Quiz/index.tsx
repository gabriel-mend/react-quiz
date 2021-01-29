import React, { useState, useEffect } from 'react'

import QuizLogo from '../../QuizLogo'
import QuizBackground from '../../../styles/QuizBackground'
import QuizContainer from '../../../styles/QuizContainer'
import LoadingWidget from '../../LoadingWidget'
import ResultWidget from '../../ResultWidget'
import QuizWidget from '../../QuizWidget'

import { questionProps } from '../../../types'

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function QuizScreen ({ data }) {
    const [screenState, setScreenState] = useState(screenStates.LOADING)
    const [results, setResults] = useState([]);
    const totalQuestions = data.questions.length;
    const [questionIndex, setQuestionIndex] = useState(0);
    const question: questionProps = data.questions[questionIndex];

    function addResult (result) {
        setResults([...results, result])
    }

    useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ)
        }, 1 * 2020)
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
        <QuizBackground backgroundImage={data.bg}>
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