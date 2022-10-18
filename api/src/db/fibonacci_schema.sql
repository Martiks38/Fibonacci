CREATE DATABASE IF NOT EXISTS fibonacci;

USE fibonacci;

CREATE TABLE IF NOT EXISTS fibonacci_terms(
	term_id int not null,
    result text not null,
    primary key(term_ID)
);
