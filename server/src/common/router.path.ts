export default {
  AUTH : '/auth',
  LOGIN : '/login',
  JOIN : '/join',
  FORGET_EMAIL : '/email',
  FORGET_PASSWORD : '/password',

  MUSIC : '/music',
  MUSIC_PART : '/:part',
  MUSIC_PART_SONG : '/:part/song',
  MUSIC_PART_ALBUM : '/:part/album',
  MUSIC_PART_ARTIST : '/:part/artist',

  MUSIC_DETAIL : '/:part/:id',
  MUSIC_DETAIL_GOOD : '/:part/:id/good',
  MUSIC_DETAIL_BAD : '/:part/:id/bad',

  MUSIC_COMMENT : '/:part/:id/comment',

  FAVORITE : '/favorite',
  FAVORITE_SONG_DELETE : '/song/:id',

  PROFILE : '/profile',
  PROFILE_SONG_DELETE : '/song/:id',

  UPLOAD : '/upload',
}