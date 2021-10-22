create database songLand;

/** 유저 */
create table Users(
    id int not null auto_increment,
    email varchar(50) not null unique,
    password text not null,
    name varchar(50) not null unique,
    thumnail text,
    insta_url text null,
    isMembership tinyint(1) default 0,
    membership_datetime timestamp default current_timestamp,
    created_datetime timestamp default current_timestamp,
    updated_datetime timestamp default current_timestamp,
    primary key(id)) character set utf8;

/** 유저 곡 */
create table User_songs(
    id int not null auto_increment,
    user_id int not null,
    thumnail text,
    title varchar(30) not null,
    description text,
    created_datetime timestamp default current_timestamp,
    primary key(id),
    foreign key(user_id) references Users(id) on delete cascade) character set utf8;

/** 곡의 대한 코맨트 */
create table User_song_comments(
    id int not null auto_increment,
    song_id int not null,
    user_id int not null,
    bgroup int default 1,
    sort int default 1,
    depth int default 1,
    comment text,
    created_datetime timestamp default current_timestamp,
    updated_datetime timestamp default current_timestamp,
    primary key(id),
    foreign key(song_id) references User_songs(id) on delete cascade,
    foreign key(user_id) references Users(id) on delete cascade) character set utf8;

/** 유저 곡 모음 */
create table User_song_group(
    id int not null auto_increment,
    user_id int not null,
    title varchar(30) default 'NoTitle',
    created_datetime timestamp default current_timestamp,
    primary key(id),
    foreign key(user_id) references Users(id) on delete cascade) character set utf8;

/** 유저 곡 모음 - item*/

create table User_group_item(
    id int not null auto_increment,
    group_id int not null,
    song_id int not null,
    primary key(id),
    foreign key(group_id) references User_song_group(id) on delete cascade,
    foreign key(song_id) references User_songs(id) on delete cascade) character set utf8;