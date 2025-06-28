from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    first_name = db.Column(db.String, nullable = True)
    last_name = db.Column(db.String, nullable = True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        # do not serialize the password, its a secururity breach
        return {"id": self.id,
            "email": self.email,
            "is_active": self.is_active,
            "first_name": self.first_name,
            "last_name": self.last_name}
    

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = True)
    body = db.Column(db.String)
    date = db.Column(db.Date, nullable = False)
    image_url = db.Column(db.String)
    

class Media(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.Enum( "image", "video", "audio", name='media_type'), nullable=False)
    url = db.Column(db.String)


class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True)


class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)


class CharacterFavorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)


class PlanetFavorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)


class Characters(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    height = db.Column(db.String)
    mass = db.Column(db.String)
    hair_color = db.Column(db.String)
    skin_color = db.Column(db.String)
    eye_color = db.Column(db.String)
    birth_year = db.Column(db.String)
    gender = db.Column(db.String)


class Planets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    diameter = db.Column(db.String)
    rotation_period = db.Column(db.String)
    orbital_period = db.Column(db.String)
    gravity = db.Column(db.String)
    population = db.Column(db.String)
    climate = db.Column(db.String)
    terrain = db.Column(db.String)