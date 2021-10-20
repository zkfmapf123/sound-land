

### REST API

- Auth
    - POST      http://localhost:3000/api/auth/login                   
    - POST      http://localhost:3000/api/auth/join                    
    - POST      http://localhost:3000/api/auth/email                  
    - PUT       http://localhost:3000/api/auth/password 

- Music
    - GET       http://localhost:3000/api/music/:part
    - GET       http://localhost:3000/api/music/:part/song?offset=0&limit=20
    - GET       http://localhost:3000/api/music/:part/album?offset=0&limit=20
    - GET       http://localhost:3000/api/music/:part/artist?offset=0&limit=20
    
    - GET       http://localhost:3000/api/music/:part/:id(streaming)
    - PUT       http://localhost:3000/api/music/:part/:id/good
    - PUT       http://localhost:3000/api/music/:part/:id/bad
    
    - POST      http://localhost:3000/api/music/:part/:id/comment
    - PUT       http://localhost:3000/api/music/:part/:id/comment
    - DELETE    http://localhost:3000/api/music/:part/:id/comment

- Favorite
    - GET       http://localhost:3000/api/favorite
    - GET       http://localhost:3000/api/favorite/song/:id(streaming)
    - DELETE    http://localhost:3000/api/favorite/song/:id

- Profile   
    - GET       http://localhost:3000/api/profile
    - PUT       http://localhost:3000/api/profile
    - DELETE    http://localhost:3000/api/profile/song/:id

- Upload
    - POST      http://localhost:3000/api/upload