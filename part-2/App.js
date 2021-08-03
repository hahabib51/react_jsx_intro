function App() {
    return (
        <div>
            <Tweet
            name="Jon Snow"
            username="KingofTheNorth1"
            date={new Date().toDateString()}
            message="Defend WinterFell" 
            />
            <Tweet 
            name="Homer Simpson"
            username="McDuff8008"
            date={new Date().toDateString()}
            message="Why I Otta!!!" 
            />
            <Tweet 
            name="Ash Ketchup"
            username="PokemonMaster2020"
            date={new Date().toDateString()}
            message="Gotta Catch 'Em All!" 
            />
        </div>
    );
}