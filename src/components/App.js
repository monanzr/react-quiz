// import DateCounter from "./DateCounter"
import { Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import useQuiz from "../hooks/useQuiz";

export default function App() {

  const { getStatus: status } = useQuiz()

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
          />
        )}
        {status === "active" && (
          <Fragment>
            <Progress
            />
            <Question
            />
            <footer>
              <Timer />
              <NextButton
              />
            </footer>
          </Fragment>
        )}
        {status === "finish" && (
          <FinishScreen
          />
        )}
      </Main>
    </div>
  );
}
