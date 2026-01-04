import "react"
import { useState, useEffect } from "react"
import { MCQChallenge } from "../challenge/MCQChallenge.jsx"

export function HistoryPanel() {

    const [history, setHistory] = useState ([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState (null)

    useEffect(() => {
        fetchHistory()
    }, [])

    const fetchHistory = async () => {
        setIsLoading(false)
    }

    if(isLoading){
        return <div className="loading">Cargando Historial...</div>
    }

    if(error){
        return <div className="error-message">
            <p>{error}</p>
            <button onClick={fetchHistory}>Reintentar</button>
        </div>
    }
    return <div className="history-panel">
        <h2>Historial</h2>
        {history.length === 0 ? <p>Sin historial de desafios</p> : 
            <div className="history-list">
                {history.map((challenge) => {
                    return <MCQChallenge 
                        challenge = {challenge} 
                        key = {challenge.id} 
                        showExplanation>
                    </MCQChallenge>
                })}
            </div>
        }
    </div>
}