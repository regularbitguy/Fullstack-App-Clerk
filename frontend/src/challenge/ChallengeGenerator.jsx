import "react"
import {useState, useEffect} from "react"
import {MCQChallenge} from "./MCQChallenge.jsx"

export function ChallengeGenerator() {

    const [challenge, setChallenge] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [difficulty, setDifficulty] = useState("easy")
    const [quota, setQuota] = useState(null)
    
    const fetchQuota = async () => {
    }

    const generateChallenge = async () => {
    }

    const getNextResetTime = () => {
    }

    return <div className = "challenge-container">
        <h2>Generador de Desafíos</h2>

        <div className="quota-display">
            <p>Desafios restantes hoy: {quota?.quota_remaining || 0}</p>
            {quota?.quota_remaining === 0 && (
                <p>Siguiente reseteo: {0}</p>
            )}
        </div>

        <div className="difficulty-selector">
            <label htmlFor='difficulty'>Seleccionar Dificultad</label>
            <select 
                id="difficulty" 
                value={difficulty} 
                onChange={(e) => setDifficulty(e.target.value)} 
                disabled={isLoading}>

                <option value="easy">Fácil</option>
                <option value="medium">Medio</option>
                <option value="hard">Difícil</option>
            </select>
        </div>

        <button 
            onClick={generateChallenge}
            disabled={isLoading || quota?.quota_remaining === 0}
            className='generate-button'>
            {isLoading? "Generando..." : "Generar Desafio"}
        </button>

        {error && <div className='error-message'>
            <p>{error}</p>
        </div>}

        {challenge && <MSQChallenge challenge={challenge} />}
    </div>
    return <></>
}