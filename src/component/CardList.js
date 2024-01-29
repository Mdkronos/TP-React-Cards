import Card from "./Card"

const movies = [
    {
        id: 1,
        image: "/image/01- curse of the blood rubies.jpg",
        title: "Curse of the Blood Rubies",
        released: "1986",
    },
    {
        id: 2,
        image: "/image/02- sleeping princess in devil's castle.jpg",
        title: "Sleeping Princess in Devil's Castle",
        released: "1987",
    },
    {
        id: 3,
        image: "/image/03- mystical adventure.jpg",
        title: "Mystical Adventure",
        released: "1988",
    },
    {
        id: 4,
        image: "/image/04- dead zone.jpg",
        title: "Dead Zone",
        released: "1989",
    },
    {
        id: 5,
        image: "/image/05- the world's strongest.jpg",
        title: "The World's Strongest",
        released: "1990",
    },
    {
        id: 6,
        image: "/image/06- the tree of might.jpg",
        title: "The Tree of Might",
        released: "1990",
    },
    {
        id: 7,
        image: "/image/07- lord slug.jpg",
        title: "Lord Slug",
        released: "1991",
    },
    {
        id: 8,
        image: "/image/08- cooler's revenge.jpg",
        title: "Cooler's Revenge",
        released: "1991",
    },
    {
        id: 9,
        image: "/image/09- the return of cooler.jpg",
        title: "The Return of Cooler",
        released: "1992",
    },
    {
        id: 10,
        image: "/image/10- super android 13.jpg",
        title: "Super Android 13",
        released: "1992",
    },
    {
        id: 11,
        image: "/image/11- the legendary super saiyan.jpg",
        title: "The legendary Super Saiyan",
        released: "1993",
    },
    {
        id: 12,
        image: "/image/12- bojack unbound.jpg",
        title: "Bojack Unbound",
        released: "1993",
    },
]

const CardList = () => {
    return (
        <>
            <div className="cardsPosition">
                {movies.map((movie, id) => <Card key={id} movie={movie} />)}
            </div>
        </>
    )
}

export default CardList
