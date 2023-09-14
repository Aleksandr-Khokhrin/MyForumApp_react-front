import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import FavoriteArticles from "./FavoriteArticles";
import useStyles from "./ProfileStyles";


const LikedArticles = ({ user, handleCreateArticle }) => {
    const classes = useStyles()
    const articles = [
        {
            key: 1,
            title: 'Pirates of the Caribbean',
            category: 'FILM',
            author: 'Mr. Born',
            text: "The Pirates of the Caribbean: The Curse of the Black Pearl has a plot mainly about CaptainJack Sparrow and Will Turner trying to save Elizabeth Swann from the cursed ship called theBlack Pearl. Will has the motive of trying to save Elizabeth because he has a big crush onher, and while Captain Jack Sparrow wants his own ship back from the crew who mutinied.The curse of the black pearl is about the conquistador Cortez, Who killed the Aztecs andplundered all their gold, In turn the Aztecs put a curse on it making everyone who takes apiece from the chest turn into an undead. In the end, The cursed pirates figured out theyneeded the blood of a pirate called Will Turner, Or Bootstrapper Bill, The father of WillTurner.",
            avatarText: 'PC',
            image: 'https://www.dropbox.com/scl/fi/8fb56rnpeoxnml3f2kbqu/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU-._V1_.jpg?rlkey=zkc91sltqfna9na8qqmfgp7pv&dl=0',
            date: new Date()
        },
        {
            key: 1,
            title: 'DOTA2',
            category: 'GAME',
            author: 'Mr. Abadon',
            text: "Dota 2 is an RTS-styled MOBA-type competitive team game with RPG elements. Two competing teams (Radiant and Dire) consist of five players each. The main objective in Dota 2 is to destroy the enemy Ancient inside their stronghold. These strongholds are protected by multiple towers down 3 lanes. Instead of building armies of units like in classical RTS games, each player controls a single Hero, a strategically-powerful unit with unique abilities and characteristics which can be improved over the course of the game. Experience is earned when nearby creeps and heroes die, and once collecting enough experience, the hero gains a level, which increases the hero's stats, and at most levels the hero gains a skill point which can be spent to unlock or upgrade one of the hero's abilities. Alongside a hero's fixed abilities, each hero has 6 inventory slots which can be filled with Items which provide various benefits and abilities. To purchase these items, Gold is gained passively over time, by killing creeps, by killing enemy heroes and by destroying buildings.",
            avatarText: 'PC',
            image: 'https://www.dropbox.com/scl/fi/adkzth4j2vursv09rnwsa/dota-2.jpg?rlkey=tzp6qrxh7e4fu8gp0j5xvv3rp&dl=0',
            date: new Date()
        }, {
            key: 1,
            title: 'Harry Potter',
            category: 'BOOK',
            author: 'Mr. Koloskov',
            text: "Harry had a thin face, knobbly knees, black hair and bright-green eyes. He wore round glasses held together with a lot of Sellotape because of all the times Dudley had punched him on the nose. The only thing Harry liked about his own appearance was a very thin scar on his forehead which was shaped like a bolt of lightning. He had had it as long as he could remember and the first question he could ever remember asking his Aunt Petunia was how he had got it.",
            avatarText: 'PC',
            image: 'https://www.dropbox.com/scl/fi/hukyvcytdxq06qv47powu/harry-potter-books-in-order.webp?rlkey=r3pofvr6xevwldolw9j9a7nfg&dl=0',
            date: new Date()
        },
        {
            key: 1,
            title: 'Martin Eden',
            category: 'BOOK',
            author: 'F. Dostoevskiy',
            text: "Living in Oakland at the beginning of the 20th century, Martin Eden struggles to rise above his destitute, proletarian circumstances through an intense and passionate pursuit of self-education, hoping to achieve a place among the literary elite. His principal motivation is his love for Ruth Morse. Because Eden is a rough, uneducated sailor from a working-class background[5] and the Morses are a bourgeois family, a union between them would be impossible unless and until he reached their level of wealth and refinement.",
            avatarText: 'PC',
            image: 'https://www.dropbox.com/scl/fi/at7u1htojvcrgo6pd3iov/martin-eden.poster.ws2_.jpg?rlkey=gs1j8qbxbxq632ff5dle46oxw&dl=0',
            date: new Date()
        }
    ]
    return (
        <div className={classes.box}>
            <Grid item xs={12}>
                <h3 className={classes.marginLikedArticles}>Рецензии, которые понравились:</h3>
                <FavoriteArticles />
                <ul>
                    {user.likedArticles.map((article) => (
                        <li key={article.id}>{article.title}</li>
                    ))}
                </ul>
                <Button variant="outlined" color="primary" onClick={handleCreateArticle}>
                    Написать рецензию
                </Button>
            </Grid>
        </div>
    );
};

export default LikedArticles;
