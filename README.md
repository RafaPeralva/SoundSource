# SoundSource

This product works on the idea of what would make music more discoverable.
Discoverability is possibly on of the most important things when it comes to content of any kind,
and while fields such as video creation have reinvisioned new ways of discoverability through algorithms,
discovering music is relatively stil archaic, relying on mainly suggestions of friends or music streaming
sites themselves. The aim of this product is to create a new way to discover music, using the upvote system
to create user curated playlists for all to listen to. We wish to be able to bring together people of all
music tastes to create playlists that will give everyone something they like, so much so, that one day
someone might just say, "Put on a SoundSource playlist."

Setting up backend(Springboot)
A springboot project was created with Springboot Initializr incorporating Spring Web, Spring Data JPA, and H2 Database. From their a JPA Model was established consisting of classes for users, favorites, and suggested. Further entities, ids, and relationships were set up.

# Getting Started

We **highly** recommend using IntelliJ IDEA for running backend and VS Code for running front-end.
Terminal may also be used.

1. Clone the repository

`git clone https://github.com/RafaPeralva/SoundSource.git`

## Backend

2. Open IntelliJ IDEA

3. Click in File > New > Project from Existing Sources, go into soundsource-backend and select **pom.xml**

4. Click to run and follow all of IntelliJ IDEA's prompts to install any dependencies needed

5. You may also need to install SDK by going to File > Project Structure > Project SDK, we recommend version 17

6. Run backend

7. If any problems arise you may need to unlink and relink maven project:

   1. Right click pom.xml file > maven > unlink maven projects
   2. Right click pom.xml and create maven project

8. Project may be run from terminal by using command `mvn spring-boot:run` while on **soundsource-backend** folder

## Frontend

8. Open VS Code

9. Steps can be done using VS code terminal or your computer's terminal

10. Go into frontend folder: `cd front-end/soundsource`

### Homebrew:

11. Check if installed: brew -v
    1. if not instal homebrew: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

### npm and node

12. Check if npm and node are installed: `npm -v and node -v`

13. If not installed:
    1. make sure brew is up-to-date: `brew update`
    2. install node and npm: `brew install node`
    3. check if node and npm were installed: `node -v` and `npm -v`

## To run project:

14. Install dependencies:

    1. `npm install`, if errors show you may need to delete **package-lock.json** and then re-run
    2. install axios ` npm install axios`

15. To run project: `npm start`

16. Frontend runs on `localhost:3000` and backend on `http://localhost:8080/`.

17. To login and use our app it is **highly** recommended that you use our spotify credentials:

    > user: spotifysoundsource@gmail.com
    >
    > pass: ssCS499!

18. Spotify application **must** be open in a device and signed in to same account!
