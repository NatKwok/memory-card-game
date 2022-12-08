function HighScore() {
    //fetch("http://localhost:3001/user?username=elie" for Query params
    fetch("http://localhost:3001/users", { method: "GET" })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));

      return (
        <h2>HighScore: {HighScore}</h2>
      )
  }

  export default HighScore;