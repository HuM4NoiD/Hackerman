CREATE TABLE user(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50),
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    dob DATE NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE company(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cname VARCHAR(50) NOT NULL,
    domain VARCHAR(50),
    website VARCHAR(50)
);

CREATE TABLE competition(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    body VARCHAR(200),
    companyId INTEGER,
    CONSTRAINT fk_competition_company
    FOREIGN KEY (companyId)
        REFERENCES company(id)
);

CREATE TABLE challenge(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    body VARCHAR(3000),
    category VARCHAR(30),
    lang VARCHAR(30),
    difficulty INTEGER NOT NULL,
    postedBy INTEGER,
    compId INTEGER,
    CONSTRAINT fk_challenge_company
    FOREIGN KEY (postedBy)
        REFERENCES company(id),
    CONSTRAINT fk_challenge_competition
    FOREIGN KEY (compId)
        REFERENCES competition(id)
);

CREATE TABLE solution(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    lang VARCHAR(50) NOT NULL,
    sol VARCHAR(5000) NOT NULL,
    userId INTEGER NOT NULL,
    challengeId INTEGER NOT NULL,
    CONSTRAINT fk_solution_user
    FOREIGN KEY (userId)
        REFERENCES user(id),
    CONSTRAINT fk_solution_challenge
    FOREIGN KEY (challengeId)
        REFERENCES challenge(id)
);

CREATE TABLE thread (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    challengeId INTEGER NOT NULL,
    CONSTRAINT fk_thread_challenge
    FOREIGN KEY (challengeId)
        REFERENCES challenge(id),
);

CREATE TABLE message (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    body VARCHAR(200) NOT NULL,
    userId INTEGER NOT NULL,
    threadId INTEGER NOT NULL,
    CONSTRAINT fk_message_user
    FOREIGN KEY (userId) REFERENCES user(id),
    CONSTRAINT fk_message_thread
    FOREIGN KEY (threadId) REFERENCES thread(id)
);

CREATE TABLE score (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    userId INTEGER NOT NULL,
    score INTEGER NOT NULL,
    category VARCHAR(30),
    CONSTRAINT fk_score_user
    FOREIGN KEY (userId) REFERENCES user(id)  
);