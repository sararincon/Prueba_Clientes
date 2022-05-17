--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: sararincon
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(30),
    lastname character varying(15),
    uuid character varying(10),
    fecha character varying(100)
);


ALTER TABLE public.users OWNER TO sararincon;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: sararincon
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO sararincon;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sararincon
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: sararincon
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: sararincon
--

COPY public.users (id, name, lastname, uuid, fecha) FROM stdin;
47	Ria	Teixeira	b79a89	2022-05-09T20:15:52.985-04:00
48	Lance	Morris	0efb16	2022-05-09T20:18:53.000-04:00
49	Karl	May	878b07	2022-05-09T20:21:30.406-04:00
50	بیتا	پارسا	e87ce2	2022-05-09T20:47:17.646-04:00
51	Jonas	Hansen	17c89f	2022-05-09T20:50:09.928-04:00
52	Marco	Herrero	4fef85	2022-05-09T22:28:50.560-04:00
53	Jayden	Slawa	edf774	2022-05-09T22:58:28.766-04:00
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sararincon
--

SELECT pg_catalog.setval('public.users_id_seq', 53, true);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: sararincon
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

