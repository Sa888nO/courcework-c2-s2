from app import db, session, Base 

class User(Base):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Post(Base):
    __tablename__ = "posts"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    title = db.Column(db.String(50), nullable=False)
    text = db.Column(db.String(500), nullable=False)