from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from . import models

def get_challenge_quota(db: Session, user_id: str):
    return (db.query(models.ChallengeQuota)
            .filter(models.ChallengeQuota.user_id == user_id)
            .first())

def create_challenge_quota(db: Session, user_id: str):
    db_quota = models.ChallengeQuota(user_id = user_id)
    db.add(db_quota) # Agrega el nuevo registro a la sesión
    db.commit() # Confirma (guarda) los cambios en la base de datos
    db.refresh(db_quota) # Refresca la instancia para reflejar los datos de la base de datos
    return db_quota

def reset_quota_if_needed(db: Session, quota: models.ChallengeQuota):
    now = datetime.now()
    if now - quota.last_reset_date.date() > timedelta(hours=24):
        quota.remaining_quota = 10
        quota.last_reset_date = now
        db.commit()
        db.refresh(quota)
    return quota

def create_challenge (
        db: Session, 
        difficulty: str,
        created_by: str,
        title: str,
        options: str,
        correct_answer_id: int,
        explanation: str
):
    
    db_challenge = models.Challenge(
        difficulty = difficulty,
        created_by = created_by,
        title = title,
        options = options,
        correct_answer_id = correct_answer_id,
        explanation = explanation
    )
    db.add(db_challenge)
    db.commit()
    db.refresh(db_challenge)
    return db_challenge

def get_user_challenges(db: Session, user_id: str):
    return db.query(models.Challenge).filter(models.Challenge.created_by == user_id).all()
