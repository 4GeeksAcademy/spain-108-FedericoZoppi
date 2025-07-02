from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()


class Users(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String, nullable = True)
    last_name = db.Column(db.String, nullable = True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    in_admin = db.Column(db.Boolean, nullable=False)


    def serialize(self):
        # do not serialize the password, its a secururity breach
        return {"id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "is_active": self.is_active,
            "is_admin": self.is_admin}
    

    def __repr__(self):
        return f'<User {self.email}>'


class Posts(db.Model):
    __tablename__= 'posts'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = True)
    body = db.Column(db.String)
    date = db.Column(db.Date, nullable = False)
    image_url = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeingKey('users.id'))
    user_id = db.relationship('User', foreing_keys = [user_id],
                                   backref=db.backref('user_id_to', lazy='select'))
    

class Media(db.Model):
    __tablename__='media'
    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.Enum( "image", "video", "audio", name='media_type'), nullable=False)
    url = db.Column(db.String)
    post_id = db.Column(db.Integer, db.ForeingKey('posts.id'))
    post_id = db.relationship ('Post',foreing_keys = [post_id],
                              backref = db.backref('post_id_to', lazy = 'select'))


class Followers(db.Model):
    __tablename__ = 'followers'
    id = db.Column(db.Integer, primary_key=True)
    following_id = db.Column(db.Integer, db.ForeingKey('users.id'))
    following_id = db.relationship('User', foreing_keys = [following_id],
                                   backref=db.backref('following_to', lazy='select'))
    follower_id = db.Column(db.Integer, db.ForeingKey('users.id'))
    follower_id = db.relationship('User', foreing_keys = [following_id],
                                   backref=db.backref('following_to', lazy='select'))

    def serialize(self):
        return {'id': self.id,
                'following_id': self.following_id,
                'follower_id': self.follower_id}


class Comments(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeingKey('users.id'))
    user_id = db.relationship('User', foreing_keys = [user_id],
                                   backref=db.backref('user_id_to', lazy='select'))
    post_id = db.Column(db.Integer, db.ForeingKey('posts.id',))
    post_id = db.relationship('Post', foreing_keys = [post_id],
                                   backref=db.backref('post_id_to', lazy='select'))







class CharacterFavorites(db.Model):
    __tablename__='character_favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeingKey('users.id'))
    user_id = db.relationship('User', foreing_keys = [user_id],
                                   backref=db.backref('user_id_to', lazy='select'))
    character_id = db.Column(db.Integer, db.ForeingKey('characters.id'))
    character_id = db.relationship('Characters', foreing_keys = [character_id],
                                   backref=db.backref('character_id_to', lazy='select'))

class PlanetFavorites(db.Model):
    __tablename__='planet_favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeingKey('users.id'))
    user_id = db.relationship('User', foreing_keys = [user_id],
                                   backref=db.backref('user_id_to', lazy='select'))
    planet_id = db.Column(db.Integer, db.ForeingKey('planets.id'))
    planet_id = db.relationship('Planet', foreing_keys = [planet_id],
                                   backref=db.backref('planet_id_to', lazy='select'))


class Characters(db.Model):
    __tablename__='characters'
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
    __nametable__='planets'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    diameter = db.Column(db.String)
    rotation_period = db.Column(db.String)
    orbital_period = db.Column(db.String)
    gravity = db.Column(db.String)
    population = db.Column(db.String)
    climate = db.Column(db.String)
    terrain = db.Column(db.String)


