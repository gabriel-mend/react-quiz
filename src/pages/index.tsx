import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from  'next/link'

import Widget from '../components/Widget'
import QuizLogo from '../components/QuizLogo'
import QuizBackground from '../components/QuizBackground'
import Footer from '../components/Footer'
import GitHubCorner from '../components/GitHubCorner'
import QuizContainer from '../components/QuizContainer'

import db from '../../db.json'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo className />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`)
            }}>
              <Input
                name="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
              <Button
                type="submit"
                disabled={name === ''}
              >
                Jogar {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Nextjs fez:</p>
            <Link href="https://aluraquiz-base-git-main.alura-challenges.vercel.app">
              <a>The legend of zelda</a>
            </Link>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/loadingGabriel/" />
    </QuizBackground>
  );
}