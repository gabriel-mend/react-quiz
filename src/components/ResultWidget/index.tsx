import { useRouter } from 'next/router'
import Widget from '../../styles/Widget'
import Link from  'next/link'

export default function ResultWidget({ results }) {
    const router = useRouter()
    const { name } = router.query

    return (
    <Widget>
        <Widget.Header>
          Tela de resultado
        </Widget.Header>
  
        <Widget.Content>
            {name && <p>Mandou bem {name}!</p>}
            <h3>Você acertou {results.filter(x => x === true).length} questões, parabéns!</h3>
            <ul>
                {results.map((result, resultIndex) => 
                    <Widget.Result id={result === true ? "result_correct" : "result_wrong"} key={resultIndex}>#0{resultIndex + 1} Resultado: {result === true ? 'Correta' : 'Errada'}</Widget.Result>
                )}
            </ul>
            <Link href="/">
                <a>Voltar para home</a>
            </Link>
        </Widget.Content>
      </Widget>
    );
}