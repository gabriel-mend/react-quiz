import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from  'next/link'
import { motion } from 'framer-motion'

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
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: {opacity: 1, y: '0'},
            hidden: {opacity: 0, y: '100%'}
          }}
          initial="hidden"
          animate="show"
        >
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

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0}
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Nextjs fez:</p>
            <ul>
              {db.external.map((link) => {
                const linkName = link
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '');

                return (
                  <li key={linkName}>
                    <Link href={`/quiz/${linkName}`}>
                      <a>{linkName}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer 
          as={motion.section}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0}
          }}
          initial="hidden"
          animate="show"/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/loadingGabriel/" />
    </QuizBackground>
  );
}