let score = 0;
let wicket = 0;
let ballWiseScore = [];
let comentry = [];
let hit = 0;

function increaseScore(num) {
  if (wicket >= 11) {
    alert("All player out!!!");
    return;
  }
  ballWiseScore.push(num);
  score += num;
  hit = num;
  console.log(ballWiseScore);
  rootElement.render(<App />);
}
function clickWicket() {
  if (wicket >= 11) {
    alert("No more wicket left");
    return;
  }
  wicket += 1;
  hit = "Wicket";
  ballWiseScore.push("W");
  rootElement.render(<App />);
}

const Result = () => (
  <div>
    {ballWiseScore.map((res, index) => (
      <span key={index}>
        {index % 6 === 0 ? <br /> : null}
        <span>{res === 0 ? <strong>.</strong> : res}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    ))}
  </div>
);

function handleSubmit(event) {
  event.preventDefault();

  comentry.unshift(hit);
  rootElement.render(<App />);
}

const Form = () => (
  <form onSubmit={handleSubmit}>
    <input value={hit} />
    <input type="text" />
    <button type="Submit">Submit</button>
  </form>
);

const ScoreButton = () => (
  <div>
    <button onClick={() => increaseScore(0)}>0</button>
    <button onClick={() => increaseScore(1)}>1</button>
    <button onClick={() => increaseScore(2)}>2</button>
    <button onClick={() => increaseScore(3)}>3</button>
    <button onClick={() => increaseScore(4)}>4</button>
    <button onClick={() => increaseScore(5)}>5</button>
    <button onClick={() => increaseScore(6)}>6</button>
    <button onClick={clickWicket}>Wicket</button>
  </div>
);

const App = () => (
  <>
    <hr />
    <h1>Score Keeper App</h1>
    <h3>
      Score {score}/{wicket}
    </h3>
    <ScoreButton />
    <br />
    <Form />
    <Result />
    <hr />
    {comentry.map((res, index) => (
      <p key={index}>{res}</p>
    ))}
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
