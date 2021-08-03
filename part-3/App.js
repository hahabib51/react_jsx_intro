function App() {
    return (
      <div>
        <Person
          name="Homer"
          age={40}
          hobbies={["bowling", "watching tv", "drinking beer"]}
        />
        <Person name="Marge" age={36} hobbies={["painting", "gambling"]} />
        <Person
          name="Bart"
          age={12}
          hobbies={["skateboarding", "making prank calls"]}
        />
        <Person
          name="Lisa"
          age={10}
          hobbies={["reading", "saxophone", "eating vegetables"]}
        />
      </div>
    );
  }
  